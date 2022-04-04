import AppLink from '../shared/AppLink';

export default function Topbar() {
    return (
        <div className="site-header__topbar topbar">
            <div className="topbar__container container">
                <div className="topbar__row">
                    <AppLink href={''} className="topbar-item divider">
                        INFO
                    </AppLink>
                    <AppLink href={'/site/about-us'} className="topbar-item divider">
                        SOBRE NOSOTROS
                    </AppLink>
                    <AppLink href={'/site/how-to-purchase'} className="topbar-item divider">
                        CÓMO COMPRAR
                    </AppLink>
                    <div className="topbar-item-last">CONTÁCTENOS - 097 133 189</div>
                </div>
            </div>
        </div>
    );
}
