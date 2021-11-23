// react
import { Fragment } from 'react';

// third-party
import Head from 'next/head';
import SanityBlockContent from '@sanity/block-content-to-react';

// application
import PageHeader from '../shared/PageHeader';
import { SanityFAQ } from '../../custom-sanity-types/faq';
import url from '../../services/url';

export interface InitData {
    title: string;
    faq?: SanityFAQ[];
}
export interface SitePageFaqProps {
    initData?: InitData;
}

function FaqItem(props: SanityFAQ) {
    return (
        <div className="typography">
            <h6>{props?.question}</h6>
            {props?.answer && <SanityBlockContent blocks={props?.answer} />}
        </div>
    );
}

function SitePageFaq(props: SitePageFaqProps = {}) {
    const { initData } = props;
    const breadcrumb = [
        { title: 'Inicio', url: url.home() },
        { title: initData?.title || 'Preguntas Frecuentes', url: url.faq() },
    ];

    return (
        <Fragment>
            <Head>
                <title>PREGUNTAS FRECUENTES</title>
            </Head>

            <PageHeader header={initData?.title} breadcrumb={breadcrumb} />

            <div className="block faq">
                <div className="container">
                    <div className="faq__section">
                        <div className="faq__section-body">
                            {initData?.faq?.map((faq) => (
                                <div className="row faq__section-faq" key={faq.id}>
                                    <div className="faq__section-column col-12">
                                        <FaqItem {...faq} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* <div className="faq__section">
                        <div className="faq__section-title">
                            <h3>Payment Information</h3>
                        </div>
                        <div className="faq__section-body">
                            <div className="row">
                                <div className="faq__section-column col-12 col-lg-6">
                                    <div className="typography">
                                        <h6>What shipping methods are available?</h6>

                                        <p>
                                            Lorem ipsum dolor sit amet conse ctetur adipisicing
                                            elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip ex
                                            ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat.
                                        </p>
                                    </div>
                                </div>
                                <div className="faq__section-column col-12 col-lg-6">
                                    <div className="typography">
                                        <h6>What shipping methods are available?</h6>

                                        <p>
                                            Lorem ipsum dolor sit amet conse ctetur adipisicing
                                            elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip ex
                                            ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="faq__section">
                        <div className="faq__section-title">
                            <h3>Orders and Returns</h3>
                        </div>
                        <div className="faq__section-body">
                            <div className="row">
                                <div className="faq__section-column col-12 col-lg-6">
                                    <div className="typography">
                                        <h6>What shipping methods are available?</h6>

                                        <p>
                                            Lorem ipsum dolor sit amet conse ctetur adipisicing
                                            elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip ex
                                            ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat.
                                        </p>
                                    </div>
                                </div>
                                <div className="faq__section-column col-12 col-lg-6">
                                    <div className="typography">
                                        <h6>What shipping methods are available?</h6>

                                        <p>
                                            Lorem ipsum dolor sit amet conse ctetur adipisicing
                                            elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip ex
                                            ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </Fragment>
    );
}

export default SitePageFaq;
