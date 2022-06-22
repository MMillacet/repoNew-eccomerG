// third-party
import queryString from 'query-string';
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { Store } from 'redux';
import { getSession } from '@auth0/nextjs-auth0';
// application
import { AppDispatch } from '../types';
import { IFilterValues, IListOptions } from '../../interfaces/list';
import { ISearchOptions } from '../../interfaces/search';
import { RootState } from '../root/rootTypes';
import { shopInitThunk } from './shopActions';
import { nameToSlug } from '../../api/helpers/utils';

export function parseQueryOptions(query: string) {
    const queryObject = queryString.parse(query);
    const optionValues: IListOptions = {};

    if (typeof queryObject.page === 'string') {
        optionValues.page = parseFloat(queryObject.page);
    }
    if (typeof queryObject.limit === 'string') {
        optionValues.limit = parseFloat(queryObject.limit);
    }
    if (typeof queryObject.sort === 'string') {
        optionValues.sort = queryObject.sort;
    }

    return optionValues;
}

export function parseQuerySearchOptions(query: string) {
    const queryObject = queryString.parse(query);
    const searchOptionValues: ISearchOptions = {};

    if (typeof queryObject.term === 'string') {
        searchOptionValues.term = queryObject.term;
    }
    if (typeof queryObject.family === 'string') {
        searchOptionValues.family = queryObject.family;
    }
    if (typeof queryObject.category === 'string') {
        searchOptionValues.category = queryObject.category;
    }
    if (typeof queryObject.subcategory === 'string') {
        searchOptionValues.subcategory = queryObject.subcategory;
    }
    if (typeof queryObject.subsubcategory === 'string') {
        searchOptionValues.subsubcategory = queryObject.subsubcategory;
    }
    if (typeof queryObject.brand === 'string') {
        searchOptionValues.brand = queryObject.brand;
    }

    return searchOptionValues;
}

export function parseQueryFilters(query: string) {
    const queryObject = queryString.parse(query);
    const filterValues: IFilterValues = {};

    Object.keys(queryObject).forEach((param) => {
        const value = queryObject[param];
        const mr = param.match(/^filter_([-_A-Za-z0-9]+)$/);

        if (!mr || typeof value !== 'string') {
            return;
        }

        // eslint-disable-next-line prefer-destructuring
        const filterSlug = mr[1];

        filterValues[filterSlug] = value;
    });

    return filterValues;
}

export function buildQuery(options: IListOptions, filters: IFilterValues, searchOptions: ISearchOptions) {
    const params: { [key: string]: any } = {};

    if (options.page !== 1) {
        params.page = options.page;
    }

    if (options.limit !== 12) {
        params.limit = options.limit;
    }

    if (options.sort !== 'default') {
        params.sort = options.sort;
    }

    if (searchOptions.term) {
        params.term = searchOptions.term;
    }

    if (searchOptions.family) {
        params.family = searchOptions.family;
    }

    if (searchOptions.category) {
        params.category = searchOptions.category;
    }

    if (searchOptions.subcategory) {
        params.subcategory = searchOptions.subcategory;
    }

    if (searchOptions.subsubcategory) {
        params.subsubcategory = searchOptions.subsubcategory;
    }

    if (searchOptions.brand) {
        params.brand = searchOptions.brand;
    }

    Object.keys(filters)
        .filter((x) => x !== 'category' && !!filters[x])
        .forEach((filterSlug) => {
            params[`filter_${filterSlug}`] = filters[filterSlug];
        });

    return queryString.stringify(params, { encode: false });
}

export default async function getShopPageData(
    store: Store<RootState>,
    context: GetServerSidePropsContext | GetStaticPropsContext,
    slug?: string,
): Promise<void> {
    let categorySlug = slug || (typeof context.params?.slug === 'string' ? context.params.slug : null);
    const dispatch = store.dispatch as AppDispatch;

    if ('req' in context) {
        if (typeof context.req.url === 'string') {
            const { req, res } = context;

            const session = await getSession(req, res);

            const cardcode = session?.user?.cardcode || null;

            const query = queryString.stringify(queryString.parseUrl(context.req.url).query);
            const options = parseQueryOptions(query);
            const filters = parseQueryFilters(query);
            const searchOptions = parseQuerySearchOptions(query);
            searchOptions.cardcode = cardcode; // This doesn't come from the query string

            if (!categorySlug) {
                if (searchOptions.subsubcategory) {
                    categorySlug = nameToSlug(searchOptions.subsubcategory);
                } else if (searchOptions.subcategory) {
                    categorySlug = nameToSlug(searchOptions.subcategory);
                } else if (searchOptions.category) {
                    categorySlug = nameToSlug(searchOptions.category);
                } else if (searchOptions.family) {
                    categorySlug = nameToSlug(searchOptions.family);
                }
            }

            await dispatch(shopInitThunk(categorySlug, options, filters, searchOptions));
        }
    } else {
        await dispatch(shopInitThunk(categorySlug, {}, {}, {}));
    }
}
