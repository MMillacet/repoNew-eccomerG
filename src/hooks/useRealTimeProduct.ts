// react
import { useEffect, useReducer } from 'react';

// application
import goldfarbApi from '../api/goldfarb';
import { IProduct } from '../interfaces/product';

export enum ApiRequestActionTypes {
    ERROR = 'ERROR',
    START = 'START',
    SUCCESS = 'SUCCESS',
}

type RealTimeProductState = {
    status: string;
    realTimeProduct: IProduct | undefined;
    error: string;
};

type ApiRequestAction = {
    type: ApiRequestActionTypes;
    payload?: any;
};

const realTimeProductReducer = (
    state: RealTimeProductState,
    action: ApiRequestAction,
): RealTimeProductState => {
    switch (action.type) {
        case ApiRequestActionTypes.ERROR:
            return { ...state, status: 'failed', error: action.payload };
        case ApiRequestActionTypes.START:
            return { ...state, status: 'pending' };
        case ApiRequestActionTypes.SUCCESS:
            return { ...state, status: 'succesful', realTimeProduct: action.payload };

        default:
            return state;
    }
};

const useRealTimeProduct = (productCode: string | number | undefined): RealTimeProductState => {
    const [realTimeProductState, dispatch] = useReducer(realTimeProductReducer, {
        status: 'idle',
        error: '',
        realTimeProduct: undefined,
    });

    useEffect(() => {
        const realTimeProductRequest = async () => {
            try {
                if (productCode) {
                    dispatch({ type: ApiRequestActionTypes.START });
                    const data = await goldfarbApi.getProductsLookup({
                        itemcodes: [`${productCode}`],
                    });

                    const rtProduct = data?.products?.[0];
                    if (rtProduct)
                        dispatch({ type: ApiRequestActionTypes.SUCCESS, payload: rtProduct });
                }
            } catch (error: any) {
                dispatch({ type: ApiRequestActionTypes.ERROR, payload: error?.message });
            }
        };

        realTimeProductRequest();
    }, [productCode]);

    return realTimeProductState;
};

export default useRealTimeProduct;
