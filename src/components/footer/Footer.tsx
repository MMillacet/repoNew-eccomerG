import { FunctionComponent } from 'react';

// application
import FooterContacts from './FooterContacts';
import FooterLinks from './FooterLinks';
// import FooterNewsletter from './FooterNewsletter';
import ToTop from './ToTop';

const Footer: FunctionComponent = () => {
    const informationLinks = [
        { title: 'Sobre nosotros', url: '/site/about-us' },
        { title: 'Misión y visión', url: '/site/vision-mission' },
        { title: 'Contactanos', url: '/site/contact-us' },
        { title: 'Noticias', url: '/site/news' },
    ];

    const accountLinks = [
        { title: 'Ubicacion', url: '/site/location' },
        { title: 'Historial de pedidos', url: '/account/orders' },
        { title: 'Catálogo', url: '/catalog' },
        { title: 'Estado de cuenta', url: '/account/status' },
    ];

    return (
        <div className="site-footer">
            <div className="container">
                <div className="site-footer__widgets">
                    <div className="row">
                        <div className="col-6 col-md-3 col-lg-3">
                            <FooterLinks title="Informacion" items={informationLinks} />
                        </div>
                        <div className="col-6 col-md-3 col-lg-3">
                            <FooterLinks title="Mi cuenta" items={accountLinks} />
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <FooterContacts />
                        </div>
                    </div>
                </div>

                <div className="site-footer__bottom">
                    <div className="site-footer__copyright">{process?.env?.NODE_ENV}</div>
                </div>
            </div>
            <ToTop />
        </div>
    );
};

export default Footer;
