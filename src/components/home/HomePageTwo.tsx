// react
import { Fragment, useMemo, useState } from 'react';

// third-party
import Head from 'next/head';

// application
import { useUser } from '@auth0/nextjs-auth0';
import { Modal } from 'reactstrap';
import { IProduct } from '../../interfaces/product';

// blocks
import BlockBrands from '../blocks/BlockBrands';
import { BlockProductColumnsItem } from '../blocks/BlockProductColumns';
import BlockProductsCarousel from '../blocks/BlockProductsCarousel';
import BlockSlideShow, { BlockSlideItem } from '../blocks/BlockSlideShow';

import { IBrand } from '../../interfaces/brand';

const YoutubeVideoModal = (props: { onClose: () => void; videoUrl: string | null }) => {
    const { onClose, videoUrl } = props;

    if (!videoUrl) {
        return null;
    }

    let videoView;

    if (videoUrl !== null) {
        videoView = (
            <iframe
                src={videoUrl}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                width="620"
                height="515"
                allowFullScreen
                title="video"
            />
        );
    }

    return (
        <Modal isOpen={videoUrl !== null} toggle={onClose} centered size="">
            {videoView}
        </Modal>
    );
};

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

    const { user } = useUser();
    const isUserActivated = user && !!user.cardcode;

    const [playingVideoUrl, setPlayingVideoUrl] = useState<string | null>(null);

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
            }, [isUserActivated])}

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
                                onClick={() => setPlayingVideoUrl(banners[0].link?.url)}
                                style={{
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    height: '300px',
                                    backgroundSize: 'contain',
                                    backgroundImage: `url(${banners[0].image?.url})`,
                                    cursor: 'pointer',
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
                                onClick={() => setPlayingVideoUrl(banners[1].link?.url)}
                                style={{
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    height: '300px',
                                    backgroundSize: 'contain',
                                    backgroundImage: `url(${banners[1].image?.url})`,
                                    cursor: 'pointer',
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
                                onClick={() => setPlayingVideoUrl(banners[2].link?.url)}
                                style={{
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    height: '300px',
                                    backgroundSize: 'contain',
                                    backgroundImage: `url(${banners[2].image?.url})`,
                                    cursor: 'pointer',
                                }}
                            ></div>
                        </div>
                        <YoutubeVideoModal onClose={() => setPlayingVideoUrl(null)} videoUrl={playingVideoUrl}></YoutubeVideoModal>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default HomePageTwo;
