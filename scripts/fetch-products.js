/* eslint-disable no-use-before-define */
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const axios = require('axios');

const nameToSlug = (name) =>
    name
        .toLowerCase()
        .replace(/[^a-z0-9]/, '-')
        .replace(/-+/, '-');

const baseURL = 'http://app.goldfarb.com.uy/main/api';

const makeProduct = (product) => {
    const code = product.code || product.itemCode;
    const subcategory = product.subcategory || product.subCategory || null;
    return {
        ...product,
        id: Number(code),
        slug: code,
        code,
        title: product.title,
        family: product.family,
        category: product.category,
        subcategory,
        unitMult: product.unitMult,
        // images: [`https://goldfarb.blob.core.windows.net/goldfarb/imagenes/${code}.jpg`],
        brand: {
            name: product.brand,
            slug: nameToSlug(product.brand),
        },
        relatedItems: product.relatedItems,
    };
};

const getProductsList = async () => {
    const config = {
        baseURL,
        url: '/goldfarb/ProductsList',
        method: 'get',
    };

    const { data } = await axios(config);

    return data;
};

const lookup = async (itemcodes) => {
    const config = {
        baseURL,
        url: '/web/ProductLookup',
        method: 'get',
        params: {
            itemcodes: itemcodes.join(','),
        },
    };

    const { data } = await axios(config);

    data.products = await Promise.all(
        data.products.map(async (product) => {
            const p = makeProduct(product);

            const [description, documents, images] = await Promise.all([getDescription(p.id), getDocuments(p.id), getImages(p.id)]);

            p.images = images;
            p.documents = documents;
            p.description = description;
            return p;
        }),
    );

    return data;
};

const getDescription = async (itemcode) => {
    try {
        const config = {
            baseURL,
            url: '/goldfarb/ProductLookup',
            method: 'post',
            data: {
                itemcodes: [itemcode],
            },
        };

        const { data } = await axios(config);

        return data.products[0].description;
    } catch (error) {
        console.log('desc', error);
        throw error;
    }
};

const fileCode = (itemcode) => `${itemcode - (itemcode % 1000)}`;

const run = async () => {
    const start = new Date();
    // delete all contents of data/products folder
    const contents = fs.readdirSync(`${path.join(process.cwd(), `/public/products`)}`);
    contents.map((e) => fs.unlinkSync(path.join(process.cwd(), `/public/products/${e}`)));

    const { products } = await getProductsList();
    const itemcodes = products
        .filter((product) => !!product)
        .map((product) => Number(product.itemcode))
        .sort((a, b) => a - b);

    const files = {};

    try {
        let i = 0;
        let itemcodesToLookup = itemcodes.slice(i, i + 300);
        while (itemcodesToLookup.length > 0) {
            // eslint-disable-next-line no-await-in-loop
            const { products } = await lookup(itemcodesToLookup);

            products.forEach((p) => {
                const filecode = fileCode(p.id);
                if (!files[filecode]) {
                    files[filecode] = {};
                }
                files[filecode][p.id] = p;
            });
            i += 300;
            itemcodesToLookup = itemcodes.slice(i, i + 300);
            console.log(`${i}/${itemcodes.length}`);
        }
    } catch (err) {
        console.error(`Error ${err}`);
        throw err;
    }

    Object.keys(files).forEach((filecode) => {
        const filename = `${path.join(process.cwd(), `/public/products/${filecode}.json`)}`;
        fs.writeFileSync(filename, JSON.stringify(files[filecode]), { flag: 'w+' });
    });

    const end = new Date();
    const seconds = (end - start) / 1000;
    console.log(`Done in ${seconds} seconds`);
};

const IMG_EXT = ['jpg'];
const IMG_BASE_URL = 'https://goldfarb.blob.core.windows.net/goldfarb/imagenes/';

const DOCS_EXT = ['jpg', 'pdf'];
const DOCS_BASE_URL = 'https://goldfarb.blob.core.windows.net/goldfarb/documentos/';

async function isUrlFound(url) {
    try {
        const response = await fetch(url, { method: 'HEAD', cache: 'no-cache' });
        return response.status === 200;
    } catch (error) {
        return false;
    }
}

async function getDocumentsForExt(id, ext) {
    const docs = [];

    let i = 0;
    let exit = false;

    while (!exit && i < 10) {
        const url = i === 0 ? `${DOCS_BASE_URL}${id}.${ext}` : `${DOCS_BASE_URL}${id}-${i}.${ext}`;
        // eslint-disable-next-line no-await-in-loop
        const found = await isUrlFound(url);

        if (found) {
            docs.push(url);
        } else {
            exit = true;
        }

        i += 1;
    }

    return docs;
}

async function getDocuments(id) {
    try {
        const docs = [];

        // eslint-disable-next-line no-restricted-syntax
        for await (const ext of DOCS_EXT) {
            const extdocs = await getDocumentsForExt(id, ext);
            docs.push(...extdocs);
        }

        return docs;
    } catch (error) {
        console.log('getDocuments error', error);
        throw error;
    }
}

async function getImagesExt(id, ext) {
    const imgs = [];

    let i = 0;
    let exit = false;

    while (!exit && i < 10) {
        const url = i === 0 ? `${IMG_BASE_URL}${id}.${ext}` : `${IMG_BASE_URL}${id}-${i}.${ext}`;
        // eslint-disable-next-line no-await-in-loop
        const found = await isUrlFound(url);

        if (found) {
            imgs.push(url);
        } else {
            exit = true;
        }

        i += 1;
    }

    return imgs;
}

async function getImages(id) {
    try {
        const imgs = [];

        // eslint-disable-next-line no-restricted-syntax
        for await (const ext of IMG_EXT) {
            const extimgs = await getImagesExt(id, ext);
            imgs.push(...extimgs);
        }

        return imgs;
    } catch (error) {
        console.log('getimages', error);
        throw error;
    }
}

run();
