import axios from 'axios';
import axiosConfig from '../axiosConfig';

const invoice = async (docNum: string, cardcode: string) => {
    const config = axiosConfig.invoice(docNum, cardcode);
    const { data } = await axios(config);

    return data;
}


const invoiceReturn = async (docNum: string, cardcode: string) => {
    const config = axiosConfig.invoiceReturn(docNum, cardcode);
    const { data } = await axios(config);

    return data;
}

const recipe = async (docNum: string) => {
    const config = axiosConfig.clientRecipe(docNum);
    const { data } = await axios(config);

    return data;
}

export default { invoice, invoiceReturn, recipe };