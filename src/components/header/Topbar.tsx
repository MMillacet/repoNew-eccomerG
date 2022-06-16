import AppLink from '../shared/AppLink';
import { Phone, Whatsapp } from '../shared/Whatsapp';

export default function Topbar() {
    return (
        <div className="site-header__topbar topbar">
            <div className="topbar__container container">
                <div className="topbar__row">
                    <img src="/images/Iconos/GeoLoc.png" style={{ width: '32px', height: '28px' }} />
                    <AppLink href={'/site/contact-us'} className="topbar-item divider">
                        INFO
                    </AppLink>
                    <AppLink href={'/site/about-us'} className="topbar-item divider">
                        SOBRE NOSOTROS
                    </AppLink>
                    <AppLink href={'/site/how-to-purchase'} className="topbar-item divider">
                        CÓMO COMPRAR
                    </AppLink>
                    <AppLink href={'/site/faq'} className="topbar-item divider">
                        PREGUNTAS FRECUENTES
                    </AppLink>
                    <div className="topbar-item divider">
                        <Whatsapp />
                    </div>
                    <div className="topbar-item-last">
                        <Phone />
                    </div>
                </div>
            </div>
        </div>
    );
}
