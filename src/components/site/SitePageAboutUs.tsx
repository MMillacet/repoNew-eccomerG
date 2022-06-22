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
import { Modal } from 'reactstrap';
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
        name: 'Depto. Logística',
        members: [
            { firstName: 'ERNESTO', lastName: 'DE ROSA', role: 'Jefe de Logistica ', team: 'Depto. Logística' },
            { firstName: 'SUSANA', lastName: 'BASANTA', role: 'Telefonista', team: 'Depto. Logística' },
            { firstName: 'RAFAEL', lastName: 'AGUILAR', role: 'Atención al pùblico', team: 'Depto. Logística' },
            { firstName: 'ROSALíA', lastName: 'RAVELO', role: 'Asistente de Logística', team: 'Depto. Logística' },
            { firstName: 'MAXIMILIANO', lastName: 'RODRIGUEZ', role: 'Administración Logística', team: 'Depto. Logística' },
            { firstName: 'SANTIAGO', lastName: 'MEDINA', role: 'Asistente Operativo ', team: 'Depto. Logística' },
            { firstName: 'RUBEN', lastName: 'CARNALES', role: 'Responsable de Recepciòn y Almacenaje', team: 'Depto. Logística' },
            { firstName: 'RUBEN', lastName: 'TRAVIESO', role: 'Responsable de Expedición', team: 'Depto. Logística' },
            { firstName: 'MARCELO', lastName: 'NAVIA', role: 'Responsable de Picking', team: 'Depto. Logística' },
            { firstName: 'FABRIZIO', lastName: 'PERELLI', role: 'Equipo de Tráfico', team: 'Depto. Logística' },
            { firstName: 'ALEXANDER', lastName: 'MATTOS', role: 'Equipo de Tráfico', team: 'Depto. Logística' },
            { firstName: 'LUIS', lastName: 'TRUCELLI', role: 'Equipo de Logìstica', team: 'Depto. Logística' },
            { firstName: 'MATHIAS', lastName: 'MILLACET', role: 'Equipo de Logìstica', team: 'Depto. Logística' },
            { firstName: 'MARCEL', lastName: 'PUENTE', role: 'Equipo de Tráfico', team: 'Depto. Logística' },
            { firstName: 'MARIA', lastName: 'CAMARGO', role: 'Equipo de Logìstica', team: 'Depto. Logística' },
            { firstName: 'JULIAN', lastName: 'QUIROZ', role: 'Equipo de Logìstica', team: 'Depto. Logística' },
            { firstName: 'MARCOS', lastName: 'DOLGAY', role: 'Equipo de Logìstica', team: 'Depto. Logística' },
            { firstName: 'LUCAS', lastName: 'GOUX', role: 'Equipo de Logìstica', team: 'Depto. Logística' },
            { firstName: 'WALTER', lastName: 'MOLINA', role: 'Equipo de Logìstica', team: 'Depto. Logística' },
            { firstName: 'FEDERICO', lastName: 'LAUNAS', role: 'Equipo de Tráfico', team: 'Depto. Logística' },
            { firstName: 'MAXIMILIANO', lastName: 'GARCÍA', role: 'Equipo de Tráfico', team: 'Depto. Logística' },
            { firstName: 'JUAN', lastName: 'PICARDO', role: 'Equipo de Logìstica', team: 'Depto. Logística' },
            { firstName: 'FABIO', lastName: 'RIVERO', role: 'Equipo de Logìstica', team: 'Depto. Logística' },
        ],
    },
    {
        name: 'Administración',
        members: [
            { firstName: 'FLORENCIA', lastName: 'MAYER', role: 'Gerente de Administraciòn y Finanzas', team: 'Administración' },
            { firstName: 'RODY', lastName: 'BANCHERO', role: 'Encargado de Administracion ', team: 'Administración' },
            { firstName: 'DANIELA', lastName: 'LANERI', role: 'Auxiliar Administrativo ', team: 'Administración' },
            { firstName: 'DANIEL', lastName: 'LOPEZ DE HARO', role: 'Auxiliar Administrativo ', team: 'Administración' },
            { firstName: 'CARINA', lastName: 'PEÑA', role: 'Auxiliar Administrativo ', team: 'Administración' },
            { firstName: 'PABLO', lastName: 'STABLE', role: 'Auxiliar Administrativo ', team: 'Administración' },
            { firstName: 'PABLO', lastName: 'TRIPODI', role: 'Auxiliar Administrativo ', team: 'Administración' },
            { firstName: 'CLAUDIA', lastName: 'AVILA', role: 'Auxiliar de Importaciones', team: 'Administración' },
            { firstName: 'LETICIA', lastName: 'ROMERO', role: 'Demand Planner ', team: 'Administración' },
            { firstName: 'JOSEFINA', lastName: 'OSORIO', role: 'Auxiliar de Importaciones ', team: 'Administración' },
        ],
    },
    {
        name: 'Gestión Humana',
        members: [{ firstName: 'ALEX', lastName: 'GRZABEL', role: 'Jefe Gestión y Desarrollo Humano ', team: 'Gestión Humana' }],
    },
    {
        name: 'Post-Venta',
        members: [
            { firstName: 'JUAN', lastName: 'ROSA', role: 'Responsable de Service ', team: 'Post-Venta' },
            { firstName: 'ANDRES', lastName: 'DI PAOLA', role: 'Responsable de Service', team: 'Post-Venta' },
            { firstName: 'ESTEBAN', lastName: 'DALTO', role: 'Auxiliar de Service', team: 'Post-Venta' },
            { firstName: 'NICOLAS', lastName: 'BERGARA', role: 'Auxiliar de Service', team: 'Post-Venta' },
        ],
    },
    {
        name: 'Depto Comercial',
        members: [
            { firstName: 'PABLO', lastName: 'REBUFFO', role: 'Gerente Comercial ', team: 'Depto Comercial' },
            { firstName: 'GASTÓN', lastName: 'NÚÑEZ', role: 'Asistente Comercial', team: 'Depto Comercial' },
            { firstName: 'CAROLAINE', lastName: 'MACHADO', role: 'Merchandiser', team: 'Depto Comercial' },
            { firstName: 'KOKE', lastName: 'CASTRO', role: 'Responsable de Linea Pinturas', team: 'Depto Comercial' },
            {
                firstName: 'CLAUDIA',
                lastName: 'RAJCHMAN',
                role: 'Responsable de Línea Ferretería y Ventas Telefónicas',
                team: 'Depto Comercial',
            },
            {
                firstName: 'MARCOS',
                lastName: 'VARELA',
                role: 'Responsable de Línea Goldex y Herramientas Profesionales',
                team: 'Depto Comercial',
            },
            { firstName: 'VALERIA', lastName: 'PIGNATTA', role: 'Responsable de Línea Bazar ', team: 'Depto Comercial' },
            {
                firstName: 'JAVIER',
                lastName: 'GONZALEZ',
                role: 'Responsable de Línea Electrodomésticos y Marketing',
                team: 'Depto Comercial',
            },
            { firstName: 'SANTIAGO', lastName: 'OLIVERA', role: 'Responsable de Línea  Echo-Shindaiwa', team: 'Depto Comercial' },
            { firstName: 'ENRIQUE', lastName: 'ESCOTO', role: 'Promotor de Pinturas', team: 'Depto Comercial' },
            { firstName: 'EDUARDO', lastName: 'GONZALEZ', role: 'Asistente Técnico ', team: 'Depto Comercial' },
            { firstName: 'ANDRES', lastName: 'SOCA', role: 'Asistente Técnico ', team: 'Depto Comercial' },
            { firstName: 'BRUNO', lastName: 'PERCIANTE', role: 'Asistente Técnico ', team: 'Depto Comercial' },
            { firstName: 'OSVALDO', lastName: 'AÑON ', role: 'Vend. Viajante ', team: 'Depto Comercial' },
            { firstName: 'RAFAEL', lastName: 'MIGLIERINA', role: 'Vendedor de Plaza ', team: 'Depto Comercial' },
            { firstName: 'MARCELO', lastName: 'BERMUDEZ ', role: 'Vend. Viajante ', team: 'Depto Comercial' },
            { firstName: 'VICENTE', lastName: 'GAUDIOSO ', role: 'Vend. Viajante ', team: 'Depto Comercial' },
            { firstName: 'PABLO', lastName: 'MATTOS', role: 'Vend. Viajante ', team: 'Depto Comercial' },
            { firstName: 'ALEJANDRO', lastName: 'VANOLI ', role: 'Vend. Viajante ', team: 'Depto Comercial' },
            { firstName: 'FERNANDO', lastName: 'ETCHEBARNE', role: 'Vend. Viajante ', team: 'Depto Comercial' },
            { firstName: 'JORGE', lastName: 'BALSA ', role: 'Vend. Viajante ', team: 'Depto Comercial' },
            { firstName: 'MAXIMILIANO', lastName: 'ROLANDO ', role: 'Vend. Viajante ', team: 'Depto Comercial' },
            { firstName: 'ALEJANDRO', lastName: 'DEVINCENZI ', role: 'Vend. Viajante ', team: 'Depto Comercial' },
            { firstName: 'CLAUDIA', lastName: 'GARCIA', role: 'Vendedor de Plaza ', team: 'Depto Comercial' },
            { firstName: 'GABRIEL', lastName: 'FERNANDEZ', role: 'Vend. Viajante ', team: 'Depto Comercial' },
            { firstName: 'ADRIAN', lastName: 'MAZZUCO', role: 'Vendedor de Plaza ', team: 'Depto Comercial' },
            { firstName: 'ALVARO', lastName: 'CARRIZO', role: 'Vendedor Telefónico', team: 'Depto Comercial' },
            { firstName: 'ALEJANDRO', lastName: 'TRIBEL', role: 'Vendedor Telefónico', team: 'Depto Comercial' },
            { firstName: 'GONZALO', lastName: 'MISA', role: 'Vendedor Telefónico', team: 'Depto Comercial' },
        ],
    },
    { name: 'Gerencia Gral.', members: [{ firstName: 'SYLVINA', lastName: 'BLUTH', role: 'Gerente General ', team: 'Gerencia Gral.' }] },
    {
        name: 'Informática / Diseño',
        members: [
            { firstName: 'OBDULIO', lastName: 'RODRIGUEZ', role: 'Auxiliar de Informática ', team: 'Informática / Diseño' },
            { firstName: 'REYNALDO', lastName: 'MARTINEZ', role: 'Infraestructura y Diseño ', team: 'Informática / Diseño' },
            { firstName: 'DIEGO', lastName: 'SILVEIRA', role: 'Auxiliar Administrativo ', team: 'Informática / Diseño' },
            { firstName: 'ANDREA', lastName: 'GONZALEZ', role: 'Asistente de Diseño', team: 'Informática / Diseño' },
        ],
    },
];

const TeamsView = (props: { selectedTeam: string; onClick: any }) => (
    <div>
        {teamData
            .map((t) => t.name)
            .sort()
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
                {members.sort().map((member, index) => (
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
    const [isOpen, setIsOpen] = useState(false);

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
                                backgroundImage: `url('/images/aboutus/Goldfarb - Web Boceto_SOBRE NOSOTROS1-06.png')`,
                                cursor: 'pointer',
                            }}
                            onClick={() => setIsOpen(true)}
                        >
                            {' '}
                            <div className="about-us__banner-img-overlay">
                                <h3 className="about-us__banner-img-overlay-title">Reciclaje de plásticos y cartón</h3>
                                <h5 className="about-us__banner-img-overlay-text">
                                    Promoviendo el cuidado del medio ambiente realizamos la separación de los residuos y el envío de los
                                    mismos para su reciclaje.{' '}
                                </h5>
                            </div>
                            <Modal isOpen={isOpen} toggle={() => setIsOpen(false)}>
                                <div
                                    className="about-us__banner-img"
                                    style={{
                                        backgroundImage: `url('/images/aboutus/Goldfarb - Web Boceto_SOBRE NOSOTROS1-08.png')`,
                                    }}
                                    onClick={() => setIsOpen(true)}
                                ></div>
                            </Modal>
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
