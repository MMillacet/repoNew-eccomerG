// data stubs
import theme from '../../data/theme';

function FooterContacts() {
    return (
        <div className="site-footer__widget footer-contacts">
            <h5 className="footer-contacts__title">Contactanos</h5>

            {/* <div className="footer-contacts__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in feugiat lorem.
                Pellentque ac placerat tellus.
            </div> */}

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
                    <i className="footer-contacts__icon fas fa-mobile-alt" />
                    {theme.contacts.phone}
                </li>
                <li>
                    <i className="footer-contacts__icon far fa-clock" />
                    Lunes a viernes 9:00 - 13:00
                </li>
                <li>
                    <i className="footer-contacts__icon far fa-clock" />
                    Lunes a viernes 14:00 - 18:00
                </li>
            </ul>
        </div>
    );
}

export default FooterContacts;
