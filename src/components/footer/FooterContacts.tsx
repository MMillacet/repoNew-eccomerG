// data stubs
import theme from '../../data/theme';

import { Whatsapp } from '../shared/Whatsapp';

function FooterContacts() {
    return (
        <div className="site-footer__widget footer-contacts">
            <h5 className="footer-contacts__title">Contactanos</h5>

            <ul className="footer-contacts__contacts">
                <li>
                    <i className="footer-contacts__icon fas fa-globe-americas" />
                    {theme.contacts.address}
                </li>
                <li>
                    <i className="footer-contacts__icon far fa-envelope" />
                    {theme.contacts.email}
                </li>
                <li>
                    <Whatsapp />
                </li>
                <li>
                    <i className="footer-contacts__icon far fa-clock" />
                    Lunes a viernes 8:15 - 17:30
                </li>
            </ul>
        </div>
    );
}

export default FooterContacts;
