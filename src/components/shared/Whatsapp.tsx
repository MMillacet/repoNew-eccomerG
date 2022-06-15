/* eslint-disable react/jsx-fragments */
import theme from '../../data/theme';
import AppLink from './AppLink';

export const Whatsapp = () => {
    const number = theme.contacts.whatsapp;
    const link = `https://wa.me/${number.trim()}&lang=es`;
    return (
        <>
            <i
                className="footer-contacts__icon fa-brands fa-whatsapp"
                style={{
                    // fontSize: '18px',
                    verticalAlign: 'baseline',
                }}
            ></i>
            <AppLink href={link}>{number}</AppLink>
        </>
    );
};
export const Phone = () => {
    const number = theme.contacts.phone;
    const link = `tel:${number.trim()}`;
    return (
        <>
            <i
                className="footer-contacts__icon fa fa-phone"
                style={{
                    // fontSize: '18px',
                    verticalAlign: 'baseline',
                }}
            ></i>
            <AppLink href={link}>{number}</AppLink>
        </>
    );
};
