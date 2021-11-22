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
                    <div className="account-menu__user-name">Helena Garcia</div>
                    <div className="account-menu__user-email">goldfarb@example.com</div>
                </div>
            </AppLink>
            <div className="account-menu__divider" />
            <ul className="account-menu__links">
                <li>
                    <AppLink href={url.accountProfile()}>Edit Profile</AppLink>
                </li>
                <li>
                    <AppLink href={url.accountOrders()}>Order History</AppLink>
                </li>
                <li>
                    <AppLink href={url.accountAddresses()}>Addresses</AppLink>
                </li>
                <li>
                    <AppLink href={url.accountPassword()}>Password</AppLink>
                </li>
            </ul>
            <div className="account-menu__divider" />
            <ul className="account-menu__links">
                <li>
                    <a href="/api/auth/logout">Logout</a>
                </li>
            </ul>
        </div>
    );

    const dropdown = user ? loggedInDropdown : loggedOutDropdown;

    return <Indicator dropdown={dropdown} icon={<Person20Svg />} />;
}

export default IndicatorAccount;
