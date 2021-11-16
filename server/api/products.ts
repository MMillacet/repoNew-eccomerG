import axios from 'axios';
import axiosConfig from '../axiosConfig';
import { SearchOptions } from '../models/searchOptions';

const latest = () => {
    const config = axiosConfig.latestProducts();
    return axios(config);
}

const lookup = async (itemcodes: string[] = [], cardcode: string = '4000092') => {
    const config = axiosConfig.productLookup({
        itemcodes,
        cardcode,
    });

    const { data } = await axios(config);

    data.products = data.products.map((product: any) => ({
        id: product.code,
        slug: product.code,
        images: [`https://goldfarbbetascc.sana-cloud.net/product/image/large/${product.code}_0.jpg`],
        ...product,
    }));

    return data;
};


const search = async (options: SearchOptions) => {
    const config = options.family
    ? axiosConfig.outlet(options.family)
    : axiosConfig.productSearch(options);

    const { data } = await axios(config);

    return data;
};




export default { latest, lookup, search };