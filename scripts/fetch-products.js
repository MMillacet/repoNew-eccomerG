const fs = require('fs');
const path = require('path');
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
        id: Number(code),
        slug: code,
        code,
        title: product.title,
        family: product.family,
        category: product.category,
        subcategory,
        unitMult: product.unitMult,
        images: [`https://goldfarbbetascc.sana-cloud.net/product/image/large/${code}_0.jpg`],
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

    data.products = data.products.map((product) => makeProduct(product));

    return data;
};

const fileCode = (itemcode) => `${itemcode - (itemcode % 1000)}`;

// const run = async () => {
//     const start = new Date();
//     const { products } = await getProductsList();
//     const itemcodes = products
//         .filter((product) => !!product)
//         .map((product) => Number(product.itemcode))
//         .sort((a, b) => a - b);

//     const lastItemCode = itemcodes[itemcodes.length - 1];

//     for (let i = 0; i < lastItemCode; i += 1000) {
//         try {
//             const itemcodesToLookup = itemcodes.filter((itemcode) => itemcode >= i && itemcode < i + 1000);
//             console.log(`Looking up ${itemcodesToLookup.length} products...`);

//             if (itemcodesToLookup.length > 0) {
//                 // eslint-disable-next-line no-await-in-loop
//                 const { products } = await lookup(itemcodesToLookup);
//                 const file = {};
//                 products.forEach((p) => {
//                     file[p.id] = p;
//                 });
//                 fs.writeFileSync(`${__dirname}/../src/data/products/${i}.json`, JSON.stringify(file), { flag: 'w+' });
//             }
//         } catch (err) {
//             console.error(`Error at ${i}, ${err}`);
//             throw err;
//         }
//     }
//     const end = new Date();
//     const seconds = (end - start) / 1000;
//     console.log(`Done in ${seconds} seconds`);
// };

const run = async () => {
    const start = new Date();
    // delete all contents of data/products folder
    const contents = fs.readdirSync(`${path.join(process.cwd(), `/src/data/products`)}`);
    contents.map((e) => fs.unlinkSync(path.join(process.cwd(), `/src/data/products/${e}`)));

    const { products } = await getProductsList();
    const itemcodes = products
        .filter((product) => !!product)
        .map((product) => Number(product.itemcode))
        .sort((a, b) => a - b);

    const files = {};

    try {
        // for (let i = 0; i < lastItemCode; i += 300) {
        let i = 0;
        let itemcodesToLookup = itemcodes.slice(i, i + 300);
        while (itemcodesToLookup.length > 0) {
            // if (itemcodesToLookup.length > 0) {
            // eslint-disable-next-line no-await-in-loop
            const { products } = await lookup(itemcodesToLookup);

            // eslint-disable-next-line no-loop-func
            products.forEach((p) => {
                const filecode = fileCode(p.id);
                if (!files[filecode]) {
                    files[filecode] = {};
                }
                files[filecode][p.id] = p;
            });
            i += 300;
            itemcodesToLookup = itemcodes.slice(i, i + 300);
        }
    } catch (err) {
        console.error(`Error ${err}`);
        throw err;
    }

    Object.keys(files).forEach((filecode) => {
        const filename = `${path.join(process.cwd(), `/src/data/products/${filecode}.json`)}`;
        fs.writeFileSync(filename, JSON.stringify(files[filecode]), { flag: 'w+' });
    });

    const end = new Date();
    const seconds = (end - start) / 1000;
    console.log(`Done in ${seconds} seconds`);
};

run();
