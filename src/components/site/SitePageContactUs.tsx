// react
import { Fragment, useState } from 'react';

// third-party
import Head from 'next/head';

// application
import PageHeader from '../shared/PageHeader';

// data stubs
import theme from '../../data/theme';

function SitePageContactUs() {
    const breadcrumb = [
        { title: 'Inicio', url: '/' },
        { title: 'Contacto', url: '' },
    ];

    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleContactClick = (e: any) => {
        e.preventDefault();
        window.open(`mailto:contacto@goldfarb.com.uy?subject=${subject}&body=${message}`);
    };

    return (
        <Fragment>
            <Head>
                <title>{`Contacto — ${theme.name}`}</title>
            </Head>

            <PageHeader header="Contacto" breadcrumb={breadcrumb} />

            <div className="block">
                <div className="container">
                    <div className="card mb-0 contact-us">
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
                        <div className="card-body">
                            <div className="contact-us__container">
                                <div className="row">
                                    <div className="col-12 col-lg-6 pb-4 pb-lg-0">
                                        <h4 className="contact-us__header card-title">Nuestra dirección</h4>

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
                                                Lunes a viernes 9:00 - 13:00
                                                <br />
                                                Lunes a viernes 14:00 - 18:00
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <h4 className="contact-us__header card-title">Déjanos un mensaje</h4>

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
                                            <button type="submit" className="btn btn-primary" onClick={handleContactClick}>
                                                Enviar mensaje
                                            </button>
                                        </form>
                                    </div>
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
