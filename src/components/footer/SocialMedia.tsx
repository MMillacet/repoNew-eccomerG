import Link from 'next/link';
// eslint-disable-next-line no-use-before-define
import React from 'react';

export default function SocialMedia() {
    const socialMediaData = () => [
        {
            text: 'Facebook',
            image: 'ri-facebook-circle-fill facebook',
            link: '',
        },
        {
            text: 'Instagram',
            image: 'ri-instagram-fill instagram',
            link: '',
        },
        {
            text: 'Twitter',
            image: 'ri-twitter-fill twitter',
            link: '',
        },
    ];

    return (
        <React.Fragment>
            <div className="social-media-data">
                <h5 className="footer-contacts__title">Redes Sociales</h5>
                <div className="social-media-row">
                    {socialMediaData().map((social) => (
                        <Link key={social.text} href={`${social.link}`}>
                            <a target="_blank" rel="noopener noreferrer">
                                <div className="social-media">
                                    <div className="icons">
                                        <i className={`${social.image}`}></i>
                                    </div>
                                    <div className="title"> {social.text}</div>
                                </div>
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}
