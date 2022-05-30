// react
import { Fragment } from 'react';

// third-party
import Head from 'next/head';
import SanityBlockContent from '@sanity/block-content-to-react';

// application
import { SanitySection } from '../../custom-sanity-types/section';
import { SanityClientSection } from '../../custom-sanity-types/clientSection';
// import BlockPaymentMethods from '../blocks/BlockPaymentMethods';

export interface InitData {
    title: string;
    notClient: SanitySection;
    client: SanityClientSection;
    // payment: SanitySection;
    // paymentMethod: SanityPaymentMethod;
    // whereToBuy: SanitySection;
    doubts: SanitySection;
}
export interface SitePagehowtobuyProps {
    initData?: InitData;
}

function SitePagehowtobuy(props: SitePagehowtobuyProps = {}) {
    const { initData } = props;

    return (
        <Fragment>
            <Head>
                <title>CÓMO COMPRAR</title>
            </Head>

            <div className="howtobuy__image" style={{ backgroundImage: `url("/images/como-comprar.png")` }}>
                <h1 className="howtobuy__title">CÓMO COMPRAR</h1>
                {/* <h5 className="about-us__subtitle">{props.initData?.title.toLocaleUpperCase()}</h5> */}
            </div>

            <div className="block howtobuy">
                <div className="container">
                    <div className="row">
                        <div className="howtobuy__section col-sm-12 col-lg-6" style={{ marginTop: '10px' }}>
                            <div className="howtobuy__section-body">
                                <div className="row">
                                    <div className="howtobuy__section-column col-12 ">
                                        <div className="howtobuy__section-title">
                                            <h3>{initData?.notClient?.subtitle}</h3>
                                        </div>
                                        <SanityBlockContent blocks={initData?.notClient?.text} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="howtobuy__section col-sm-12 col-lg-6" style={{ marginTop: '10px' }}>
                            <div className="howtobuy__section-body">
                                <div className="row">
                                    <div className="howtobuy__section-column col-12 ">
                                        <div className="howtobuy__section-title">
                                            <h3>{initData?.client?.subtitle}</h3>
                                        </div>
                                        <SanityBlockContent blocks={initData?.client?.text} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="howtobuy__section">
                        <div className="howtobuy__section-title">
                            <h3>{initData?.doubts?.subtitle}</h3>
                        </div>
                        <div className="howtobuy__section-body">
                            <div className="row">
                                <div className="howtobuy__section-column col-12">
                                    <SanityBlockContent blocks={initData?.doubts?.text} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default SitePagehowtobuy;
