/* eslint-disable react/jsx-fragments */
import theme from '../../data/theme';
import AppLink from './AppLink';

export const Whatsapp = () => {
    const number = theme.contacts.whatsapp;
    const link = `https://wa.me/${number.replace(/\s/g, '')}`;
    return (
        <>
            <i
                className="footer-contacts__icon fa-brands fa-whatsapp"
                style={{
                    verticalAlign: 'baseline',
                }}
            ></i>
            <AppLink href={link}>{number}</AppLink>
        </>
    );
};
export const Phone = () => {
    const number = theme.contacts.phone;
    const link = `tel:${number.replace(/\s/g, '')}`;
    return (
        <>
            <i
                className="footer-contacts__icon fa fa-phone"
                style={{
                    verticalAlign: 'baseline',
                }}
            ></i>
            <AppLink href={link}>{number}</AppLink>
        </>
    );
};
