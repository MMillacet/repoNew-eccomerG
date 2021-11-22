import axios from 'axios';
import axiosConfig from '../axiosConfig';

const exchangeRate = async () => {
    const config = axiosConfig.exchangeRate();
    const { data } = await axios(config);

    return data;
};

const minTransportCharge = async () => {
    const config = axiosConfig.minTransportCharge();
    const { data } = await axios(config);

    return data;
};

export default { exchangeRate, minTransportCharge };
