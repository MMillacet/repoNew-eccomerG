// react
import { Fragment, useMemo } from 'react';

// third-party
import Head from 'next/head';

// application
import router from 'next/router';
import shopApi from '../../api/shop';
import { IProduct } from '../../interfaces/product';
import { useProductTabs } from '../../services/hooks';

// blocks
import BlockBrands from '../blocks/BlockBrands';
// import BlockFeatures from '../blocks/BlockFeatures';
import { BlockProductColumnsItem } from '../blocks/BlockProductColumns';
import BlockProductsCarousel from '../blocks/BlockProductsCarousel';
import BlockSlideShow, { BlockSlideItem } from '../blocks/BlockSlideShow';

import { IBrand } from '../../interfaces/brand';

export interface InitData {
    // herramientas?: IProduct[];
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

    const banners = initData?.banners ?? [];

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

    return (
        <Fragment>
            <Head>
                <title>{`Goldfarb`}</title>
            </Head>

            {useMemo(
                () => (
                    <BlockSlideShow slides={initData?.slides} />
                ),
                [],
            )}

            {/* {useMemo(
                () => (
                    <BlockFeatures layout="boxed" />
                ),
                [],
            )} */}
            <div className="home-title-container">
                <div className="home-title">
                    <h4 style={{ color: 'white', fontStyle: 'italic', height: '60px', lineHeight: '53px' }}>NUESTRAS MARCAS</h4>
                </div>
            </div>

            {useMemo(
                () => (
                    <BlockBrands brands={props.initData?.ourBrands} />
                ),
                [],
            )}

            <div className="home-title-container">
                <div className="home-title">
                    <h4 style={{ color: 'white', fontStyle: 'italic', height: '60px', lineHeight: '53px' }}>PRODUCTOS EN OFERTA</h4>
                </div>
            </div>

            {useMemo(
                () => (
                    <BlockProductsCarousel
                        title=""
                        layout="grid-5"
                        rows={1}
                        products={props.initData?.loMasVendido}
                        loading={featuredProducts.isLoading}
                        onGroupClick={featuredProducts.handleTabChange}
                    />
                ),
                [featuredProducts],
            )}

            <div className="home-title-container">
                <div className="home-title">
                    <h4 style={{ color: 'white', fontStyle: 'italic', height: '60px', lineHeight: '53px' }}>DESTACADOS</h4>
                </div>
            </div>

            {useMemo(
                () => (
                    <BlockProductsCarousel
                        title=""
                        layout="grid-5"
                        rows={1}
                        products={props.initData?.destacados}
                        loading={featuredProducts.isLoading}
                        onGroupClick={featuredProducts.handleTabChange}
                    />
                ),
                [featuredProducts],
            )}

            {/* {useMemo(
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
       */}
            {/* {isDesktop && ( */}
            <div className="banners">
                <div className="container">
                    <div className="row" style={{ height: '300px' }}>
                        <div
                            className="col-12 col-sm-12 col-md-6 col-lg-6"
                            style={{
                                height: '300px',
                            }}
                        >
                            <div
                                onClick={() => (banners[0].link ? router.push(`${banners[0].link?.url}` || '') : null)}
                                style={{
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    height: '300px',
                                    backgroundSize: 'contain',
                                    backgroundImage: `url(${banners[0].image?.url})`,
                                }}
                            ></div>
                        </div>
                        <div
                            className="col-6 col-sm-6 col-md-3 col-lg-3"
                            style={{
                                height: '300px',
                            }}
                        >
                            <div
                                onClick={() => (banners[1].link ? router.push(`${banners[1].link?.url}` || '') : null)}
                                style={{
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    height: '300px',
                                    backgroundSize: 'contain',
                                    backgroundImage: `url(${banners[1].image?.url})`,
                                }}
                            ></div>
                        </div>
                        <div
                            className="col-6 col-sm-6 col-md-3 col-lg-3"
                            style={{
                                height: '300px',
                            }}
                        >
                            <div
                                onClick={() => (banners[2].link ? router.push(`${banners[2].link?.url}` || '') : null)}
                                style={{
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    height: '300px',
                                    backgroundSize: 'contain',
                                    backgroundImage: `url(${banners[2].image?.url})`,
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* )} */}

            {/* {!isDesktop && <div>Not Desktop</div>}

            {!isDesktop && <BlockSlideShow slides={initData?.banners} />} */}
        </Fragment>
    );
}

export default HomePageTwo;
