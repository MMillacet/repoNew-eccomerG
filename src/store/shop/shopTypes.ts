// application
import { ICategory } from '../../interfaces/category';
import { IFilterValues, IListOptions } from '../../interfaces/list';
import { IProductsList } from '../../interfaces/product';
import { ISearchOptions } from '../../interfaces/search';

export const SHOP_NAMESPACE = 'shop';

export interface ShopState {
    init: boolean;
    categorySlug: string | null;
    categoriesData: { categoriesTreeData: ICategory[]; categoriesListData: ICategory[] };
    category: ICategory | null;
    categoryIsLoading: boolean;
    productsListIsLoading: boolean;
    productsList: IProductsList | null;
    options: IListOptions;
    filters: IFilterValues;
    searchOptions: ISearchOptions;
}
