// react
import { Fragment } from 'react';

// third-party
import Head from 'next/head';
import SanityBlockContent from '@sanity/block-content-to-react';

// application
import PageHeader from '../shared/PageHeader';
import { SanitySection } from '../../custom-sanity-types/section';
import { SanityClientSection } from '../../custom-sanity-types/clientSection';
import BlockPaymentMethods from '../blocks/BlockPaymentMethods';
import url from '../../services/url';

export interface InitData {
    title: string;
    notClient: SanitySection;
    client: SanityClientSection;
    // payment: SanitySection;
    // paymentMethod: SanityPaymentMethod;
    // whereToBuy: SanitySection;
    doubts: SanitySection;
}
export interface SitePageFaqProps {
    initData?: InitData;
}

function SitePageFaq(props: SitePageFaqProps = {}) {
    const { initData } = props;
    const breadcrumb = [
        { title: 'Inicio', url: url.home() },
        { title: initData?.title || 'Cómo Comprar', url: url.howToPurchase() },
    ];

    return (
        <Fragment>
            <Head>
                <title>CÓMO COMPRAR</title>
            </Head>

            <PageHeader header={initData?.title} breadcrumb={breadcrumb} />

            <div className="block faq">
                <div className="container">
                    <div className="faq__section">
                        <div className="faq__section-title">
                            <h3>{initData?.notClient?.subtitle}</h3>
                        </div>
                        <div className="faq__section-body">
                            <div className="row">
                                <div className="faq__section-column col-12 ">
                                    <div className="typography">
                                        <SanityBlockContent blocks={initData?.notClient?.text} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="faq__section">
                        <div className="faq__section-title">
                            <h3>{initData?.client?.subtitle}</h3>
                        </div>
                        <div className="faq__section-body">
                            <div className="row">
                                <div className="faq__section-column col-12">
                                    <SanityBlockContent blocks={initData?.client?.text} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="faq__section-column col-12">
                                    <div
                                        className="block-banner__image block-banner__image--desktop"
                                        style={{
                                            backgroundImage: `url(${initData?.client?.image})`,
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="faq__section-column col-12">
                                    <h6>{initData?.client?.payment?.subtitle}</h6>

                                    <SanityBlockContent blocks={initData?.client?.payment?.text} />
                                </div>
                            </div>
                            <div className="row">
                                <BlockPaymentMethods
                                    paymentMethods={initData?.client?.paymentMethods}
                                />
                            </div>
                            <div className="row">
                                <div className="faq__section-column col-12">
                                    <h6>{initData?.client?.whereToBuy?.subtitle}</h6>

                                    <SanityBlockContent
                                        blocks={initData?.client?.whereToBuy?.text}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="faq__section">
                        <div className="faq__section-title">
                            <h3>{initData?.doubts?.subtitle}</h3>
                        </div>
                        <div className="faq__section-body">
                            <div className="row">
                                <div className="faq__section-column col-12">
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

export default SitePageFaq;
