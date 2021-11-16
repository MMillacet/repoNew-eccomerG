// react
import { Fragment, useMemo } from 'react';

// third-party
import Head from 'next/head';

// application
import shopApi from '../../api/shop';
import { IProduct } from '../../interfaces/product';
import { useDeferredData, useProductColumns, useProductTabs } from '../../services/hooks';

// blocks
import BlockBanner, { BlockBannerItem } from '../blocks/BlockBanner';
import BlockBrands from '../blocks/BlockBrands';
import BlockFeatures from '../blocks/BlockFeatures';
import BlockProductColumns, { BlockProductColumnsItem } from '../blocks/BlockProductColumns';
import BlockProductsCarousel from '../blocks/BlockProductsCarousel';
import BlockSlideShow, { BlockSlideItem } from '../blocks/BlockSlideShow';

// data stubs
import theme from '../../data/theme';
import { IBrand } from '../../interfaces/brand';

export interface InitData {
    herramientas?: IProduct[];
    loMasVendido?: IProduct[];
    destacados?: IProduct[];
    featuredProducts?: IProduct[];
    bestsellers?: IProduct[];
    latestProducts?: IProduct[];
    productColumns?: BlockProductColumnsItem[];
    ourBrands?: IBrand[];
    slides?: BlockSlideItem[];
    banners?: BlockSlideItem[];
}

export interface HomePageOneProps {
    initData?: InitData;
}

function HomePageTwo(props: HomePageOneProps) {
    const { initData } = props;

    /**
     * Featured products.
     */
    const featuredProducts = useProductTabs(
        useMemo(
            () => [
                { id: 1, name: 'All', categorySlug: undefined },
                { id: 2, name: 'Power Tools', categorySlug: 'power-tools' },
                { id: 3, name: 'Hand Tools', categorySlug: 'hand-tools' },
                { id: 4, name: 'Plumbing', categorySlug: 'plumbing' },
            ],
            [],
        ),
        (tab) => shopApi.getPopularProducts({ limit: 12, category: tab.categorySlug }),
        initData?.featuredProducts,
    );

    /**
     * Bestsellers.
     */
    const bestsellers = useDeferredData(
        () => shopApi.getPopularProducts({ limit: 7 }),
        [],
        initData?.bestsellers,
    );

    /**
     * Latest products.
     */
    const latestProducts = useProductTabs(
        useMemo(
            () => [
                { id: 1, name: 'All', categorySlug: undefined },
                { id: 2, name: 'Power Tools', categorySlug: 'power-tools' },
                { id: 3, name: 'Hand Tools', categorySlug: 'hand-tools' },
                { id: 4, name: 'Plumbing', categorySlug: 'plumbing' },
            ],
            [],
        ),
        (tab) => shopApi.getLatestProducts({ limit: 8, category: tab.categorySlug }),
        initData?.latestProducts,
    );

    /**
     * Product columns.
     */
    const columns =
        initData?.productColumns ||
        useProductColumns(
            useMemo(
                () => [
                    {
                        title: 'Top Rated Products',
                        source: () => shopApi.getTopRatedProducts({ limit: 3 }),
                    },
                    {
                        title: 'Special Offers',
                        source: () => shopApi.getDiscountedProducts({ limit: 3 }),
                    },
                    {
                        title: 'Bestsellers',
                        source: () => shopApi.getPopularProducts({ limit: 3 }),
                    },
                ],
                [],
            ),
        );

    return (
        <Fragment>
            <Head>
                <title>{`Home Page Two — ${theme.name}`}</title>
            </Head>

            {useMemo(
                () => (
                    <BlockSlideShow slides={initData?.slides} />
                ),
                [],
            )}

            {useMemo(
                () => (
                    <BlockFeatures layout="boxed" />
                ),
                [],
            )}

            {useMemo(
                () => (
                    <BlockProductsCarousel
                        title="HERRAMIENTAS"
                        layout="grid-5"
                        rows={1}
                        products={props.initData?.herramientas}
                        loading={featuredProducts.isLoading}
                        // groups={featuredProducts.tabs}
                        // onGroupClick={featuredProducts.handleTabChange}
                    />
                ),
                [featuredProducts],
            )}
            {useMemo(
                () => (
                    <BlockProductsCarousel
                        title="LO MÁS VENDIDO"
                        layout="grid-5"
                        rows={1}
                        products={props.initData?.loMasVendido}
                        loading={featuredProducts.isLoading}
                        // groups={featuredProducts.tabs}
                        onGroupClick={featuredProducts.handleTabChange}
                    />
                ),
                [featuredProducts],
            )}

            {useMemo(
                () => (
                    <BlockSlideShow slides={initData?.banners} />
                ),
                [],
            )}
            {useMemo(
                () => (
                    <BlockProductsCarousel
                        title="DESTACADOS"
                        layout="grid-5"
                        rows={1}
                        products={props.initData?.destacados}
                        loading={featuredProducts.isLoading}
                        // groups={featuredProducts.tabs}
                        onGroupClick={featuredProducts.handleTabChange}
                    />
                ),
                [bestsellers.data],
            )}
            {useMemo(
                () => (
                    <BlockBrands brands={props.initData?.ourBrands} />
                ),
                [],
            )}
        </Fragment>
    );
}

export default HomePageTwo;
