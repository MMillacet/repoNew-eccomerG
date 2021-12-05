// application
import { ICategory } from '../../interfaces/category';
import { IFilterValues, IListOptions } from '../../interfaces/list';
import { IProductsList } from '../../interfaces/product';

export const SHOP_NAMESPACE = 'shop';

export interface ShopState {
    init: boolean;
    cardcode: string | null;
    categorySlug: string | null;
    categoryIsLoading: boolean;
    category: ICategory | null;
    productsListIsLoading: boolean;
    productsList: IProductsList | null;
    options: IListOptions;
    filters: IFilterValues;
    search: string | null;
}
