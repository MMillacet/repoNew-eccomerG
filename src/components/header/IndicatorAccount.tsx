// application
import { useUser } from '@auth0/nextjs-auth0';
import AppLink from '../shared/AppLink';
import Indicator from './Indicator';
import Person20Svg from '../../svg/person-20.svg';
import url from '../../services/url';

function IndicatorAccount() {
    const { user } = useUser();

    const loggedOutDropdown = (
        <div className="account-menu">
            <form className="account-menu__form">
                <div className="form-group account-menu__form-button">
                    <a className="btn btn-primary btn-sm" href="/api/auth/login">
                        Iniciar sesión
                    </a>
                </div>
                <div className="account-menu__form-link">
                    <a href="/api/auth/login">Registrate</a>
                </div>
            </form>
        </div>
    );

    const loggedInDropdown = (
        <div className="account-menu">
            <AppLink href={url.accountDashboard()} className="account-menu__user">
                <div className="account-menu__user-info">
                    <div className="account-menu__user-name">{user?.name}</div>
                    <div className="account-menu__user-email">{user?.email}</div>
                </div>
            </AppLink>
            <div className="account-menu__divider" />
            <ul className="account-menu__links">
                <li>
                    <AppLink href={url.accountProfile()}>Editar Perfil</AppLink>
                </li>
                <li>
                    <AppLink href={url.accountOrders()}>Historial pedidos</AppLink>
                </li>
                <li>
                    <AppLink href={url.accountCatalog()}>Crear catalogo</AppLink>
                </li>
                <li>
                    <AppLink href={url.accountPassword()}>Contraseña</AppLink>
                </li>
            </ul>
            <div className="account-menu__divider" />
            <ul className="account-menu__links">
                <li>
                    <a href="/api/auth/logout">Cerrar sesión</a>
                </li>
            </ul>
        </div>
    );

    const dropdown = user ? loggedInDropdown : loggedOutDropdown;

    return <Indicator dropdown={dropdown} icon={<Person20Svg />} />;
}

export default IndicatorAccount;
