import { useUser } from '@auth0/nextjs-auth0';
import { FunctionComponent } from 'react';

// application
import FooterContacts from './FooterContacts';
import FooterLinks from './FooterLinks';
// import FooterNewsletter from './FooterNewsletter';
import ToTop from './ToTop';

const Footer: FunctionComponent = () => {
    const { user } = useUser();
    const informationLinks = [
        { title: 'Sobre nosotros', url: '/site/about-us' },
        // { title: 'Misión y visión', url: '/site/vision-mission' },
        { title: 'Preguntas frecuentes', url: '/site/faq' },
        { title: 'Contacto', url: '/site/contact-us' },
        { title: 'Consultar servicio', url: '/site/service-status' },
        { title: 'Noticias', url: '/blog' },
        { title: 'Como comprar', url: '/site/how-to-purchase' },
    ];

    const accountLinks = [
        { title: 'Editar Perfil', url: '/account/profile' },
        { title: 'Historial de pedidos', url: '/account/orders' },
        { title: 'Estado de cuenta', url: '/account/status' },
        { title: 'Crear catalogo', url: '/account/catalog' },
    ];

    return (
        <div className="site-footer">
            <div className="container">
                <div className="site-footer__widgets">
                    <div className="row">
                        <div className="col-6 col-md-3 col-lg-3">
                            <FooterLinks title="Información" items={informationLinks} />
                        </div>

                        <div className="col-6 col-md-3 col-lg-3">{user && <FooterLinks title="Mi cuenta" items={accountLinks} />}</div>

                        <div className="col-12 col-md-6 col-lg-6">
                            <FooterContacts />
                        </div>
                    </div>
                </div>

                <div className="site-footer__bottom">
                    <div className="site-footer__copyright">
                        {/* © Copyright 2021 Goldfarb. Todos los derechos reservados. ({process?.env?.NODE_ENV}) */}© Copyright 2022
                        Goldfarb. Todos los derechos reservados. (Desarrollo)
                    </div>
                </div>
            </div>
            <ToTop />
        </div>
    );
};

export default Footer;
