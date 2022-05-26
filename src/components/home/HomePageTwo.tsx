// react
import { Fragment, useMemo } from 'react';

// third-party
import Head from 'next/head';

// application
import { useUser } from '@auth0/nextjs-auth0';
import { IProduct } from '../../interfaces/product';

// blocks
import BlockBrands from '../blocks/BlockBrands';
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

const openUrl = (url: string): void => {
    if (url) {
        const w = window.open(url, '_blank');
        if (w) {
            w.focus(); // okay now
        }
    }
};

function HomePageTwo(props: HomePageOneProps) {
    const { initData } = props;

    const { user } = useUser();
    const isUserActivated = user && !!user.cardcode;

    const banners = initData?.banners ?? [];

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

            {isUserActivated && (
                <div className="home-title-container">
                    <div className="home-title">
                        <h4 style={{ color: 'white', fontStyle: 'italic', height: '60px', lineHeight: '53px' }}>PRODUCTOS EN OFERTA</h4>
                    </div>
                </div>
            )}

            {useMemo(() => {
                if (isUserActivated) {
                    return <BlockProductsCarousel title="" layout="grid-5" rows={1} products={props.initData?.loMasVendido} />;
                }
                return null;
            }, [])}

            <div className="home-title-container">
                <div className="home-title">
                    <h4 style={{ color: 'white', fontStyle: 'italic', height: '60px', lineHeight: '53px' }}>DESTACADOS</h4>
                </div>
            </div>

            {useMemo(
                () => (
                    <BlockProductsCarousel title="" layout="grid-5" rows={1} products={props.initData?.destacados} />
                ),
                [],
            )}

            {console.log({ banners })}
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
                                onClick={() => openUrl(banners[0].link?.url)}
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
                                onClick={() => openUrl(banners[1].link?.url)}
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
                                onClick={() => openUrl(banners[2].link?.url)}
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
