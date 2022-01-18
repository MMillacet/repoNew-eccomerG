const fs = require('fs');
const axios = require('axios');

const baseURL = 'http://app.goldfarb.com.uy/main/api';

const getCategories = async () => {
    const config = {
        baseURL,
        url: '/goldfarb/getFamilies',
        method: 'get',
    };

    const { data } = await axios(config);

    return data;
};

const run = async () => {
    const data = await getCategories();
    fs.writeFileSync(`${__dirname}/../src/data/families.json`, JSON.stringify(data), { flag: 'w+' });
};

run();
