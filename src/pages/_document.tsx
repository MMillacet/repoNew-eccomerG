// third-party
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        return { ...(await Document.getInitialProps(ctx)) };
    }

    // eslint-disable-next-line class-methods-use-this
    render() {
        // noinspection HtmlRequiredTitleElement
        return (
            <Html lang="en" dir="ltr">
                <Head>
                    <link rel="shortcut icon" href="/favicon.ico" />

                    {/* fonts */}
                    {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i" />
                     */}
                    <link
                        href="//db.onlinewebfonts.com/c/93a467f70a3e7b27a9b52a686f351dbe?family=DINNextLTPro-Regular"
                        rel="stylesheet"
                        type="text/css"
                    />
                    <link
                        href="//db.onlinewebfonts.com/c/210d3faed34546b2e1d26bf0e0b847e7?family=DINNextLTPro-Medium"
                        rel="stylesheet"
                        type="text/css"
                    />
                    <link
                        href="//db.onlinewebfonts.com/c/1f83f5c8497875fdc52c54ee78331a55?family=DIN+Next+LT+Pro+Heavy"
                        rel="stylesheet"
                        type="text/css"
                    />
                    <Script
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                    })(window,document,'script','dataLayer','GTM-5V2VHKZ');`,
                        }}
                    ></Script>
                </Head>
                <body>
                    <noscript
                        dangerouslySetInnerHTML={{
                            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5V2VHKZ"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                        }}
                    ></noscript>
                    <div className="site-preloader">
                        <style
                            dangerouslySetInnerHTML={{
                                __html: `
                                    @keyframes site-preloader-animation {
                                        from {
                                            transform: rotateZ(0deg);
                                        }
                                        to {
                                            transform: rotateZ(360deg);
                                        }
                                    }

                                    #__next *,
                                    #__next *:before,
                                    #__next *:after {
                                        transition-duration: 0s !important;
                                    }

                                    body {
                                        overflow: hidden !important;
                                        overflow-y: scroll !important;
                                        height: 100% !important;
                                    }

                                    .site-preloader {
                                        position: fixed;
                                        left: 0;
                                        top: 0;
                                        right: 0;
                                        bottom: 0;
                                        background-color: #fff;
                                        z-index: 99999;
                                        opacity: 1;
                                    }
                                    .site-preloader::before {
                                        box - sizing: border-box;
                                        content: "";
                                        display: block;
                                        position: absolute;
                                        left: calc(50% - 50px);
                                        top: calc(50% - 50px);
                                        width: 100px;
                                        height: 100px;
                                        border-radius: 50px;
                                        border: 3px solid rgba(0, 0, 0, .2);
                                        border-top-color: rgba(0, 0, 0, .6);

                                        animation-name: site-preloader-animation;
                                        animation-duration: .5s;
                                        animation-timing-function: linear;
                                        animation-iteration-count: infinite;
                                    }
                                    .site-preloader__fade {
                                        transition: opacity .3s;
                                        opacity: 0;
                                    }
                                `,
                            }}
                        />
                    </div>

                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
