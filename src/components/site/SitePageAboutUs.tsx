// third-party
import Head from 'next/head';
import SanityBlockContent from '@sanity/block-content-to-react';

// application
import { useRef } from 'react';
import Slick from 'react-slick';
import GoldfarbSlick from '../shared/GoldfarbSlick';

// data stubs
import { ITeamMember } from '../../interfaces/teamMember';
import { BlockSlideItem } from '../blocks/BlockSlideShow';
import BlockHeader from '../shared/BlockHeader';

const slickSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 379,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};
export interface InitData {
    title: string;
    subtitle?: string;
    team?: ITeamMember[];
    banner?: BlockSlideItem;
    texts?: object[];
}
export interface SitePageAboutUsProps {
    initData?: InitData;
}

function SitePageAboutUs(props: SitePageAboutUsProps) {
    const slickRef = useRef<Slick>(null);

    const handleNextClick = () => {
        if (slickRef.current) {
            slickRef.current.slickNext();
        }
    };

    const handlePrevClick = () => {
        if (slickRef.current) {
            slickRef.current.slickPrev();
        }
    };

    return (
        <div className="block about-us">
            <Head>
                <title>Sobre Nosotros</title>
            </Head>

            <div className="about-us__image" style={{ backgroundImage: `url("${props.initData?.banner?.image?.url}")` }}>
                <h1 className="about-us__title">SOBRE NOSOTROS</h1>
                <h5 className="about-us__subtitle">{props.initData?.title.toLocaleUpperCase()}</h5>
            </div>
            <div className="about-us__body">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="about-us__text typography">
                                {props.initData?.texts && <SanityBlockContent blocks={props.initData?.texts.slice(0, 2)} />}
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="about-us__text typography">
                                {props.initData?.texts && <SanityBlockContent blocks={props.initData?.texts.slice(2, 4)} />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-us__team">
                    <h3 className="about-us__team-title">REFERENTES DEL EQUIPO COMERCIAL</h3>
                    <BlockHeader title={''} arrows onNext={handleNextClick} onPrev={handlePrevClick} />
                    <div className="about-us__teammates teammates">
                        <GoldfarbSlick ref={slickRef} {...slickSettings}>
                            {props.initData?.team?.map((teamMember) => (
                                <div key={teamMember.id} className="teammates__item teammate">
                                    <div className="teammate__avatar">
                                        <img src={`${teamMember.image?.url}`} alt="" />
                                    </div>
                                </div>
                            ))}
                        </GoldfarbSlick>
                    </div>
                </div>
                <div className="row" style={{ marginTop: '35px' }}>
                    <div className="about-us__banner col-12 col-md-6 col-lg-6 justify-content-left">
                        <div
                            className="about-us__banner-img"
                            style={{
                                padding: '15px',
                            }}
                        >
                            <h3 className="about-us__banner-img-overlay-title">RSE</h3>
                            <h5 className="about-us__banner-img-overlay-text">
                                Presentamos algunos de los proyectos internos y externos en los que trabajamos con colaboradores de forma
                                voluntaria.{' '}
                            </h5>
                        </div>
                    </div>
                    <div className="about-us__banner col-12 col-md-6 col-lg-6 justify-content-right">
                        <div
                            className="about-us__banner-img"
                            style={{ backgroundImage: `url('/images/aboutus/Goldfarb - Web Boceto_SOBRE NOSOTROS1-03.png')` }}
                        >
                            <div className="about-us__banner-img-overlay">
                                <h3 className="about-us__banner-img-overlay-title">Apoyo al Centro “Los Tréboles”</h3>
                                <h5 className="about-us__banner-img-overlay-text">
                                    Un equipo de colaboradores realiza trabajos de pintura y mejoras en salones de clase, teniendo prevista
                                    la realización de una huerta y otras acciones para mejorar espacios donde niños y jóvenes aprenden y se
                                    desarrollan. Se colabora además con la donación de herramientas necesarias para el mantenimiento de las
                                    instalaciones.{' '}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="about-us__banner col-12 col-md-6 col-lg-6 justify-content-left">
                        <div
                            className="about-us__banner-img"
                            style={{
                                backgroundImage: `url('/images/aboutus/Goldfarb - Web Boceto_SOBRE NOSOTROS1-04.png')`,
                            }}
                        >
                            {' '}
                            <div className="about-us__banner-img-overlay">
                                <h3 className="about-us__banner-img-overlay-title">Capacitación Externa</h3>
                                <h5 className="about-us__banner-img-overlay-text">
                                    Un equipo de colaboradores desarrolla instancias de capacitación en diferentes áreas, promoviendo la
                                    formación de personas en situación de vulnerabilidad social, buscando colaborar en la inserción laboral
                                    de estas personas.{' '}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="about-us__banner col-12 col-md-6 col-lg-6 justify-content-right">
                        <div
                            className="about-us__banner-img"
                            style={{ backgroundImage: `url('/images/aboutus/Goldfarb - Web Boceto_SOBRE NOSOTROS1-05.png')` }}
                        >
                            {' '}
                            <div className="about-us__banner-img-overlay">
                                <h3 className="about-us__banner-img-overlay-title">Capacitación Interna</h3>
                                <h5 className="about-us__banner-img-overlay-text">
                                    Un equipo de colaboradores organiza instancias de capacitación interna, con el fin de formar a sus
                                    compañeros de trabajo en temas variados como ser Excel, preparación de superficies y pintura,
                                    fotografía, manejo de herramientas, soldadura, cocina, etc. Promoviendo de esta forma la posibilidad de
                                    compartir conocimientos con los compañeros de trabajo.{' '}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="about-us__banner col-12 col-md-6 col-lg-6 justify-content-left">
                        <div
                            className="about-us__banner-img"
                            style={{
                                backgroundImage: `url('/images/aboutus/Goldfarb - Web Boceto_SOBRE NOSOTROS1-06.png')`,
                            }}
                        >
                            {' '}
                            <div className="about-us__banner-img-overlay">
                                <h3 className="about-us__banner-img-overlay-title">Reciclaje de plásticos y cartón</h3>
                                <h5 className="about-us__banner-img-overlay-text">
                                    Promoviendo el cuidado del medio ambiente realizamos la separación de los residuos y el envío de los
                                    mismos para su reciclaje.{' '}
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="about-us__banner col-12 col-md-6 col-lg-6 justify-content-right">
                        <div
                            className="about-us__banner-img"
                            style={{ backgroundImage: `url('/images/aboutus/Goldfarb - Web Boceto_SOBRE NOSOTROS1-07.png')` }}
                        >
                            {' '}
                            <div className="about-us__banner-img-overlay">
                                <h3 className="about-us__banner-img-overlay-title">Te ayudamos a mejorar tu casa</h3>
                                <h5 className="about-us__banner-img-overlay-text">
                                    Un equipo de colaboradores ayuda a concretar tareas de mantenimiento en la casa de compañeros de
                                    trabajo, que por diferentes motivos no han podido concretar. A su vez la empresa colabora con la
                                    donación de materiales.{' '}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SitePageAboutUs;
