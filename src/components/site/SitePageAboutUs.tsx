// third-party
import Head from 'next/head';
import SanityBlockContent from '@sanity/block-content-to-react';

// application
// import { useRef } from 'react';
// import Slick from 'react-slick';
// import GoldfarbSlick from '../shared/GoldfarbSlick';

// data stubs
import { useState } from 'react';
import classNames from 'classnames';
import { ITeamMember } from '../../interfaces/teamMember';
import { BlockSlideItem } from '../blocks/BlockSlideShow';

import ArrowRoundedDownSvg from '../../svg/arrow-rounded-down-12x7.svg';
import ArrowRoundedLeftSvg from '../../svg/arrow-rounded-left-8x13.svg';

// import BlockHeader from '../shared/BlockHeader';

// const slickSettings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 400,
//     slidesToShow: 5,
//     slidesToScroll: 5,
//     responsive: [
//         {
//             breakpoint: 1367,
//             settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 4,
//             },
//         },
//         {
//             breakpoint: 967,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//             },
//         },
//         {
//             breakpoint: 767,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2,
//             },
//         },
//         {
//             breakpoint: 379,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//             },
//         },
//     ],
// };
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

const teamData = [
    {
        name: 'Equipo Comercial',
        members: [
            { lastName: 'REBUFFO', firstName: 'PABLO', role: 'Gerente Comercial ', team: 'Equipo Comercial' },
            { lastName: 'NUÑEZ', firstName: 'GASTÓN', role: 'Asistente Comercial ', team: 'Equipo Comercial' },
            { lastName: 'OLIVERA', firstName: 'SANTIAGO', role: 'Encargado de Negocio ', team: 'Equipo Comercial' },
            { lastName: 'PIGNATTA', firstName: 'VALERIA', role: 'Encargado de Negocio ', team: 'Equipo Comercial' },
            { lastName: 'VARELA', firstName: 'MARCOS', role: 'Encargado de Negocio ', team: 'Equipo Comercial' },
            { lastName: 'GONZALEZ', firstName: 'JAVIER', role: 'Encargado de Negocio / Marketing ', team: 'Equipo Comercial' },
            { lastName: 'RAJCHMAN', firstName: 'CLAUDIA', role: 'Encargado de Negocio ', team: 'Equipo Comercial' },
        ],
    },
    {
        name: 'Ventas Telefónicas',
        members: [
            { lastName: 'CARRIZO', firstName: 'ALVARO', role: 'Vendedor telefónico', team: 'Ventas Telefónicas' },
            { lastName: 'MISA', firstName: 'GONZALO', role: 'Vendedor telefónico', team: 'Ventas Telefónicas' },
            { lastName: 'TRIBEL', firstName: 'ALEJANDRO', role: 'Vendedor telefónico', team: 'Ventas Telefónicas' },
        ],
    },
    {
        name: 'Asistencia Técnica',
        members: [
            { lastName: 'PERCIANTE', firstName: 'BRUNO', role: 'Asistente Técnico ', team: 'Asistencia Técnica' },
            { lastName: 'GONZALEZ', firstName: 'EDUARDO', role: 'Asistente Técnico ', team: 'Asistencia Técnica' },
            { lastName: 'SOCA', firstName: 'ANDRES', role: 'Asistente Técnico ', team: 'Asistencia Técnica' },
        ],
    },
    {
        name: 'Merchandiser',
        members: [{ lastName: 'MACHADO', firstName: 'CAROLAINE', role: 'Merchandiser', team: 'Merchandiser' }],
    },
    {
        name: 'Departamento de Pinturas',
        members: [
            { lastName: 'CASTRO', firstName: 'JORGE', role: 'Responsable de Negocio', team: 'Departamento de Pinturas' },
            { lastName: 'ESCOTO', firstName: 'ENRIQUE', role: 'Promotor de Pinturas', team: 'Departamento de Pinturas' },
        ],
    },
    {
        name: 'Ventas Externas',
        members: [
            { lastName: 'MAZZUCO', firstName: 'ADRIAN', role: 'Vendedor externo', team: 'Ventas Externas' },
            { lastName: 'AÑON', firstName: 'OSVALDO', role: 'Vendedor externo', team: 'Ventas Externas' },
            { lastName: 'ROLANDO', firstName: 'MAXIMILIANO', role: 'Vendedor externo', team: 'Ventas Externas' },
            { lastName: 'VANOLI', firstName: 'ALEJANDRO', role: 'Vendedor externo', team: 'Ventas Externas' },
            { lastName: 'ETCHEBARNE', firstName: 'FERNANDO', role: 'Vendedor externo', team: 'Ventas Externas' },
            { lastName: 'MIGLIERINA', firstName: 'RAFAEL', role: 'Vendedor externo', team: 'Ventas Externas' },
            { lastName: 'GAUDIOSO', firstName: 'VICENTE', role: 'Vendedor externo', team: 'Ventas Externas' },
            { lastName: 'MATTOS', firstName: 'PABLO', role: 'Vendedor externo', team: 'Ventas Externas' },
            { lastName: 'BALSA', firstName: 'JORGE', role: 'Vendedor externo', team: 'Ventas Externas' },
            { lastName: 'FERNANDEZ', firstName: 'GABRIEL', role: 'Vendedor externo', team: 'Ventas Externas' },
            { lastName: 'DEVINCENZI', firstName: 'ALEJANDRO', role: 'Vendedor externo', team: 'Ventas Externas' },
            { lastName: 'GARCIA', firstName: 'CLAUDIA', role: 'Vendedor externo', team: 'Ventas Externas' },
            { lastName: 'BERMUDEZ', firstName: 'MARCELO', role: 'Vendedor externo', team: 'Ventas Externas' },
        ],
    },
    {
        name: 'Administración',
        members: [
            { lastName: 'MAYER', firstName: 'FLORENCIA', role: 'Gerente de Administración y Finanzas', team: 'Administración' },
            { lastName: 'BANCHERO', firstName: 'RODY', role: 'Encargado de Administración ', team: 'Administración' },
            { lastName: 'ROMERO', firstName: 'LETICIA', role: 'Demand Planner ', team: 'Administración' },
            { lastName: 'STABLE', firstName: 'PABLO', role: 'Auxiliar Administrativo', team: 'Administración' },
            { lastName: 'LOPEZ DE HARO', firstName: 'DANIEL', role: 'Auxiliar Administrativo', team: 'Administración' },
            { lastName: 'TRIPODI', firstName: 'PABLO', role: 'Auxiliar Administrativo', team: 'Administración' },
            { lastName: 'PEÑA', firstName: 'ADRIANA', role: 'Auxiliar Administrativo', team: 'Administración' },
            { lastName: 'LANERI', firstName: 'DANIELA', role: 'Auxiliar Administrativo', team: 'Administración' },
        ],
    },
    {
        name: 'Importaciones',
        members: [
            { lastName: 'AVILA', firstName: 'CLAUDIA', role: 'Auxiliar Administrativo', team: 'Importaciones' },
            { lastName: 'OSORIO', firstName: 'JOSEFINA', role: 'Auxiliar Administrativo', team: 'Importaciones' },
        ],
    },
    {
        name: 'Gestión Humana',
        members: [{ lastName: 'GRZABEL', firstName: 'ALEX', role: 'Jefe de Gestión y Desarrollo Humano', team: 'Gestión Humana' }],
    },
    {
        name: 'Informática y diseño',
        members: [
            {
                lastName: 'MARTINEZ',
                firstName: 'REYNALDO',
                role: 'Responsable de Infraestructura y diseño',
                team: 'Informática y diseño',
            },
            { lastName: 'GONZALEZ', firstName: 'ANDREA', role: 'Auxiliar de Informática', team: 'Informática y diseño' },
            { lastName: 'RODRIGUEZ', firstName: 'OBDULIO', role: 'Auxiliar de Informática', team: 'Informática y diseño' },
            { lastName: 'SILVEIRA', firstName: 'DIEGO', role: 'Auxiliar de Informática', team: 'Informática y diseño' },
        ],
    },
    {
        name: 'Posventa',
        members: [
            { lastName: 'BERGARA', firstName: 'NICOLAS', role: 'Auxiliar de Service', team: 'Posventa' },
            { lastName: 'DALTO', firstName: 'ESTEBAN', role: 'Medio Oficial ', team: 'Posventa' },
            { lastName: 'DI PAOLA', firstName: 'ANDRES', role: 'Responsable de Posventa', team: 'Posventa' },
            { lastName: 'ROSA', firstName: 'JUAN', role: 'Responsable de Posventa', team: 'Posventa' },
        ],
    },
    {
        name: 'Dirección / Gerencia General',
        members: [{ lastName: 'BLUTH', firstName: 'SYLVINA', role: 'Director', team: 'Dirección / Gerencia General' }],
    },
    {
        name: 'Logística',
        members: [
            { lastName: 'DE ROSA', firstName: 'ERNESTO', role: 'Jefe de Logistica ', team: 'Logística' },
            { lastName: 'RAVELO', firstName: 'ROSALIA', role: 'Asistente de Logística', team: 'Logística' },
            { lastName: 'RODRIGUEZ', firstName: 'MAXIMILIANO', role: 'Auxiliar Administrativo', team: 'Logística' },
            { lastName: 'BASANTA', firstName: 'SUSANA', role: 'Telefonista', team: 'Logística' },
            { lastName: 'TRAVIESO', firstName: 'RUBEN', role: 'Encargado de Expedición y Picking', team: 'Logística' },
            { lastName: 'CARNALES', firstName: 'RUBEN', role: 'Encargado de Recepción y Almacenaje', team: 'Logística' },
            { lastName: 'NAVIA', firstName: 'MARCELO', role: 'Responsable de picking', team: 'Logística' },
            { lastName: 'DOLGAY', firstName: 'MARCOS', role: 'Equipo de Logística', team: 'Logística' },
            { lastName: 'GONZÁLEZ', firstName: 'MARTIN', role: 'Equipo de Logística', team: 'Logística' },
            { lastName: 'MOLINA', firstName: 'WALTER', role: 'Equipo de Logística', team: 'Logística' },
            { lastName: 'GOUX', firstName: 'LUCAS', role: 'Equipo de Logística', team: 'Logística' },
            { lastName: 'CAMARGO', firstName: 'MARIA', role: 'Equipo de Logística', team: 'Logística' },
            { lastName: 'PICARDO', firstName: 'JUAN', role: 'Equipo de Logística', team: 'Logística' },
            { lastName: 'RIVERO', firstName: 'FABIO', role: 'Equipo de Logística', team: 'Logística' },
            { lastName: 'GARCIA', firstName: 'MAXIMILIANO', role: 'Chofer ', team: 'Logística' },
            { lastName: 'LAUNAS', firstName: 'FEDERICO', role: 'Tráfico', team: 'Logística' },
            { lastName: 'TRUCELLI', firstName: 'LUIS', role: 'Equipo de Logística', team: 'Logística' },
            { lastName: 'AGUILAR', firstName: 'RAFAEL', role: 'Equipo de Logística', team: 'Logística' },
            { lastName: 'MILLACET', firstName: 'MATHIAS', role: 'Equipo de Logística', team: 'Logística' },
            { lastName: 'QUIROZ', firstName: 'JULIAN', role: 'Equipo de Logística', team: 'Logística' },
            { lastName: 'MATTOS', firstName: 'ALEXANDER', role: 'Chofer', team: 'Logística' },
            { lastName: 'PUENTE', firstName: 'MARCEL', role: 'Tráfico', team: 'Logística' },
            { lastName: 'PERELLI', firstName: 'FABRIZIO', role: 'Chofer ', team: 'Logística' },
            { lastName: 'MEDINA', firstName: 'SANTIAGO', role: 'Equipo de Logística', team: 'Logística' },
        ],
    },
];

const TeamsView = (props: { selectedTeam: string; onClick: any }) => (
    <div>
        {teamData
            .map((t) => t.name)
            .map((team: string, index: number) => {
                const isSelected = team.toUpperCase() === props.selectedTeam.toUpperCase();
                const cnames = classNames({
                    'about-us__team_name': true,
                    selected: isSelected,
                });

                return (
                    <div className={cnames} onClick={props.onClick} key={index}>
                        <h3 className="about-us__team_name-title">{team.toUpperCase()}</h3>
                        {isSelected ? <ArrowRoundedDownSvg /> : <ArrowRoundedLeftSvg />}
                    </div>
                );
            })}
    </div>
);

const MembersView = (props: { selectedTeam: string }) => {
    const data = teamData.find((t) => t.name.toUpperCase() === props.selectedTeam.toUpperCase());
    if (data) {
        const { members } = data;
        return (
            <div className="teamview">
                {members.map((member, index) => (
                    <div className="teamview__member row" key={index}>
                        <div className="col-5">
                            {member.lastName.toUpperCase()}, {member.firstName.toUpperCase()}
                        </div>
                        <div className="col-7">{member.role.toUpperCase()}</div>
                    </div>
                ))}
            </div>
        );
    }
    return <div>No members </div>;
};

function SitePageAboutUs(props: SitePageAboutUsProps) {
    const [selectedTeam, setSelectedTeam] = useState(teamData[0].name);

    const handleTeamNameClick = (e: any) => {
        const teamClicked = e.target.innerText;
        setSelectedTeam(teamClicked);
    };

    // const slickRef = useRef<Slick>(null);

    // const handleNextClick = () => {
    //     if (slickRef.current) {
    //         slickRef.current.slickNext();
    //     }
    // };

    // const handlePrevClick = () => {
    //     if (slickRef.current) {
    //         slickRef.current.slickPrev();
    //     }
    // };

    return (
        <div className="about-us">
            <Head>
                <title>Sobre Nosotros</title>
            </Head>

            <div className="about-us__image" style={{ backgroundImage: `url("${props.initData?.banner?.image?.url}")` }}>
                <h1 className="about-us__title">SOBRE NOSOTROS</h1>
                <h5 className="about-us__subtitle">{props.initData?.title.toLocaleUpperCase()}</h5>
            </div>
            <div className="about-us__body">
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
                <div className="about-us__team">
                    <h3 className="about-us__teammembers-title">MIEMBROS DEL EQUIPO</h3>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 teamnamescontainer">
                            <TeamsView selectedTeam={selectedTeam} onClick={handleTeamNameClick} />
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 teamviewcontainer">
                            <MembersView selectedTeam={selectedTeam} />
                        </div>
                    </div>
                </div>

                {/* <div className="about-us__team">
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
                </div> */}
                <div className="row" style={{ marginTop: '35px' }}>
                    {/* <div className="about-us__banner col-12 col-md-6 col-lg-6 justify-content-left">
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
                    </div> */}
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
                                backgroundImage: `url('/images/aboutus/Goldfarb - Web Boceto_SOBRE NOSOTROS1-08.png')`,
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

                    {/* <div className="about-us__banner col-12 col-md-6 col-lg-6 justify-content-right">
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
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default SitePageAboutUs;
