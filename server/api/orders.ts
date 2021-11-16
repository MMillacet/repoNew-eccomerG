import axios from 'axios';
import axiosConfig from '../axiosConfig';

const create = async (order: any) => {
    const config = axiosConfig.createOrder(order);
    const { data } = await axios(config);

    return data;
}

export default { create };