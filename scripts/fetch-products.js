/* eslint-disable no-use-before-define */
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const nameToSlug = (name) =>
    name
        .toLowerCase()
        .replace(/[^a-z0-9]/, '-')
        .replace(/-+/, '-');

const baseURL = 'http://52.167.61.86/apiswebgoldfarb/api';

const makeProduct = (product) => {
    const code = product.code || product.itemCode;
    const subcategory = product.subcategory || product.subCategory || null;
    const subsubcategory = product.subsubcategory || product.subSubCategory || null;
    return {
        ...product,
        id: Number(code),
        slug: code,
        code,
        subcategory,
        subsubcategory,
        unitMult: Number(product.unitMult),
        unitsPerItem: Number(product.unitsPerItem),
        availability: product.hasStock ? 'in-stock' : 'out-of-stock',
        brand: {
            name: product.brand,
            slug: nameToSlug(product.brand),
        },
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
            withDesc: 'true',
        },
    };

    const { data } = await axios(config);

    data.products = data.products.map(makeProduct);

    return data;
};

// const getDescription = async (itemcode) => {
//     try {
//         const config = {
//             baseURL,
//             url: '/web/ProductLookup',
//             method: 'get',
//             data: {
//                 itemcodes: [itemcode],
//                 withDesc: 'true',
//             },
//         };

//         const { data } = await axios(config);

//         return data.products[0].description;
//     } catch (error) {
//         console.log('desc', error);
//         throw error;
//     }
// };

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

    console.log('Starting..');
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
            const time = new Date() - start;
            console.log({ time: time / 1000 });
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

run();
