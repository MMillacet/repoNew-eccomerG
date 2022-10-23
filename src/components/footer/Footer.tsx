import { FunctionComponent } from 'react';

// application
import FooterContacts from './FooterContacts';
import FooterLinks from './FooterLinks';
// import SocialMedia from './SocialMedia';
// import FooterNewsletter from './FooterNewsletter';
import ToTop from './ToTop';

const Footer: FunctionComponent = () => {
    const informationLinks = [
        { title: 'Como comprar', url: '/site/how-to-purchase' },
        { title: 'Preguntas frecuentes', url: '/site/faq' },
        { title: 'Sobre nosotros', url: '/site/about-us' },
        { title: 'Servicio Técnico', url: '/site/contact-us' },
        // { title: 'Misión y visión', url: '/site/vision-mission' },
        // { title: 'Noticias', url: '/blog' },
    ];

    return (
        <div className="site-footer">
            <div className="container">
                <div className="site-footer__widgets">
                    <div className="row">
                        <div className="col-6 col-md-3 col-lg-3">
                            <FooterLinks title="Información" items={informationLinks} />
                        </div>

                        {/* <div className="col-6 col-md-3 col-lg-3">
                            {isUserActivated && <FooterLinks title="Mi cuenta" items={accountLinks} />}
                        </div> */}

                        <div className="col-6 col-md-3 col-lg-3">
                            <FooterContacts />
                        </div>
                        {/* <div className="col-12 col-md-4 col-lg-3 social-media-col">
                            <SocialMedia />
                        </div> */}
                    </div>
                </div>

                <div className="site-footer__bottom">
                    <div className="site-footer__copyright">© Copyright 2022 Goldfarb. Todos los derechos reservados. (Prod)</div>
                </div>
            </div>
            <ToTop />
        </div>
    );
};

export default Footer;
