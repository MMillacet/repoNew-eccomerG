// react
import { Fragment, useState } from 'react';

// third-party
import Head from 'next/head';

// application

// data stubs
import theme from '../../data/theme';
import { Phone, Whatsapp } from '../shared/Whatsapp';

function SitePageContactUs() {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        setIsLoading(true);
        const s = await (await fetch(`/api/documents/servicestatus?docNum=${event.target.docnum.value}`)).text();

        setIsLoading(false);
        setStatus(s);
    };

    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleContactClick = (e: any) => {
        e.preventDefault();
        window.open(`mailto:contacto@goldfarb.com.uy?subject=${subject}&body=${message}`);
    };

    const number = theme.contacts.whatsapp;
    const link = `https://wa.me/+598${number.replace(/\s/g, '')}`;

    return (
        <Fragment>
            <Head>
                <title>{`Servicio Técnico — ${theme.name}`}</title>
            </Head>

            <div className="contact-us__image" style={{ backgroundImage: `url('/images/atencioncliente/Atencion al cliente-06.png')` }}>
                <h1 className="contact-us__title">SERVICIO TÉCNICO</h1>
            </div>

            <div className="block contact-us">
                <div className="container">
                    <div className="row" style={{ marginTop: '40px', marginBottom: '40px' }}>
                        <div
                            className="contact-us__banner col-12 col-md-7 justify-content-right whatsapp"
                            onClick={() => window.open(link)}
                        >
                            <div
                                className="contact-us__banner-img"
                                style={{
                                    backgroundImage: `url('/images/atencioncliente/Atencion al cliente-39.png')`,
                                    height: '250px',
                                    padding: '15px',
                                }}
                            >
                                <img className="whatsappicon" src={'/images/atencioncliente/Atencion al cliente-25.png'}></img>{' '}
                                <div className="contact-us__banner-img-overlay">
                                    <h3 className="contact-us__banner-img-overlay-title">ATENCIÓN PERSONALIZADA</h3>
                                    <h5 className="contact-us__banner-img-overlay-text">
                                        Por favor no dudes en contactarnos al <Whatsapp />
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-0 contact-us">
                        <div className="card-body">
                            <div className="contact-us__container">
                                <div className="row">
                                    <div className="col-12 col-lg-6 pb-4 pb-lg-0">
                                        <h4 className="contact-us__header card-title">EN QUE PODEMOS AYUDARTE HOY?</h4>
                                        <p>
                                            Si tenés alguna duda en particular dejá tus datos y comentarios a continuación. En breve nos
                                            pondremos en contacto contigo.
                                        </p>
                                        {/*
                                        <div className="contact-us__address">
                                            <p>
                                                Pantaleon Perez 4881 - C.P. 12100
                                                <br />
                                                Email: contacto@goldfarb.com.uy
                                                <br />
                                                Telefono: (598) 2524 4447
                                            </p>

                                            <p>
                                                <strong>Horarios</strong>
                                                <br />
                                                Lunes a viernes 8:15 - 17:30
                                            </p>
                                        </div> */}
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        {/* <h4 className="contact-us__header card-title">Déjanos un mensaje</h4> */}

                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="form-subject">Asunto</label>
                                                <input
                                                    type="text"
                                                    id="form-subject"
                                                    className="form-control"
                                                    value={subject}
                                                    onChange={(e) => setSubject(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="form-message">Mensaje</label>
                                                <textarea
                                                    id="form-message"
                                                    className="form-control"
                                                    rows={4}
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-primary enviar-btn" onClick={handleContactClick}>
                                                ENVIAR
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: '20px' }}>
                            {/* <h4 className="contact-us__header card-title">UBICACIÓN</h4> */}
                            <br />
                            <div className="contact-us__address">
                                <h5>Encontranos en el Polo Logístico Nacional</h5>
                                <br />
                                <p>
                                    <i className="footer-contacts__icon fas fa-globe-americas" />
                                    {theme.contacts.address}
                                    <br />
                                    <Phone />
                                    <br />
                                    <Whatsapp />
                                    <br />
                                    <i className="footer-contacts__icon far fa-envelope" />
                                    {theme.contacts.email}
                                </p>
                            </div>
                        </div>

                        <div className="contact-us__map">
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.723799607955!2d-56.120434184763376!3d-34.86316678039317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f80b54a333ed3%3A0x2f9cc03c2c8c9b1!2sDr.%20Pantale%C3%B3n%20P%C3%A9rez%204881%2C%2012100%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1sen!2suy!4v1640790050577!5m2!1sen!2suy"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                            />
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: '35px' }}>
                        <div
                            className="contact-us__banner col-12 col-md-6 col-lg-6 justify-content-left card-body"
                            style={{ height: '275px' }}
                        >
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="docnum">Número de servicio</label>
                                    <input id="docnum" type="text" className="form-control" />
                                </div>
                                <button type="submit" className={`btn btn-primary enviar-btn ${isLoading ? 'btn-loading' : ''}`}>
                                    {!isLoading ? 'CONSULTAR' : ''}
                                </button>
                            </form>

                            <div className="row justify-content-left">{!isLoading ? status : ''}</div>
                        </div>
                        <div className="contact-us__banner col-12 col-md-6 col-lg-6 justify-content-right">
                            <div
                                className="contact-us__banner-img"
                                style={{ backgroundImage: `url('/images/atencioncliente/Atencion al cliente-41.png')`, padding: '15px' }}
                            >
                                {' '}
                                <div className="contact-us__banner-img-overlay">
                                    <h3 className="contact-us__banner-img-overlay-title">SECCIÓN REPUESTOS</h3>
                                    <h5 className="contact-us__banner-img-overlay-text">
                                        <i className="footer-contacts__icon fas fa-globe-americas" />
                                        {theme.contacts.address}
                                        <br />
                                        <Phone />
                                        <br />
                                        <Whatsapp />
                                        <br />
                                        <i className="footer-contacts__icon far fa-envelope" />
                                        {theme.contacts.email}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default SitePageContactUs;
