// eslint-disable-next-line no-use-before-define
import React from 'react';
import theme from '../../data/theme';

export default function WhatsappFixed() {
    const number = theme.contacts.whatsapp;

    const handleWhatsapp = () => {
        window.open(`https://wa.me/598${number.replace(/\s/g, '')}`);
    };

    return (
        <React.Fragment>
            <div className="whatsapp__body">
                <div className="totop__start" />
                <div className="totop__container container" />
                <div className="totop__end">
                    <div onClick={handleWhatsapp} className="totop__button">
                        <img width={60} src="../images/Botones/Whatsapp.png" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
