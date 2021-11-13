// third-party
import { FormattedMessage } from 'react-intl';

// application
import AppLink from '../shared/AppLink';
import Dropdown from './Dropdown';
import DropdownCurrency from './DropdownCurrency';
import DropdownLanguage from './DropdownLanguage';

export default function Topbar() {
    return (
        <div className="site-header__topbar topbar">
            <div className="topbar__container container">
                <div className="topbar__row">
                    Preguntas? Llamenos 2524447
                </div>
            </div>
        </div>
    );
}
