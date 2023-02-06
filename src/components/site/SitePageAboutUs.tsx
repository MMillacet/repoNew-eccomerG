// third-party
import Head from 'next/head';
import SanityBlockContent from '@sanity/block-content-to-react';

// data stubs
import { useState } from 'react';
import classNames from 'classnames';
import { Modal } from 'reactstrap';
import { ITeam, ITeamMember } from '../../interfaces/teamMember';
import { BlockSlideItem } from '../blocks/BlockSlideShow';

import ArrowRoundedDownSvg from '../../svg/arrow-rounded-down-12x7.svg';
import ArrowRoundedLeftSvg from '../../svg/arrow-rounded-left-8x13.svg';

export interface InitData {
    title: string;
    subtitle?: string;
    team?: ITeamMember[];
    banner?: BlockSlideItem;
    texts?: object[];
    teamData: ITeam[];
}
export interface SitePageAboutUsProps {
    initData: InitData;
}

const getTeamMembers = (team: string, teamData: ITeam[]) => {
    const teamMembers: any = [];
    teamData.forEach((teamMember: ITeam) => {
        if (teamMember.equipo.toUpperCase() === team.toUpperCase()) {
            teamMembers.push(teamMember);
        }
        return null;
    });
    return teamMembers;
};

const getTeams = (teamData: any) => {
    const teams: any = [];
    teamData.forEach((teamMember: any) => {
        if (!teams.includes(teamMember.equipo)) {
            teams.push(teamMember.equipo);
        }
    });
    return teams;
};

const TeamsView = (props: { selectedTeam: string; onClick: any; teamData: ITeam[] }) => (
    <div>
        {getTeams(props.teamData)
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

const MembersView = (props: { selectedTeam: string; teamData: ITeam[] }) => {
    const teamMembers = getTeamMembers(props.selectedTeam, props.teamData);
    if (teamMembers.length > 0) {
        return (
            <div className="teamview">
                {teamMembers.sort().map((member: ITeam, index: number) => (
                    <div className="teamview__member row" key={index}>
                        <div className="col-5">
                            {member.apellido.toUpperCase()}, {member.nombre.toUpperCase()}
                        </div>
                        {member.descripcion && <div className="col-7">{member.descripcion.toUpperCase()}</div>}
                    </div>
                ))}
            </div>
        );
    }
    return <div>No members </div>;
};

function SitePageAboutUs(props: SitePageAboutUsProps) {
    const { teamData } = props.initData;
    const [selectedTeam, setSelectedTeam] = useState<string>(teamData[0].equipo);
    const [isOpen, setIsOpen] = useState(false);

    const handleTeamNameClick = (e: any) => {
        const teamClicked = e.target.innerText;
        setSelectedTeam(teamClicked);
    };

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
                            <TeamsView teamData={teamData} selectedTeam={selectedTeam} onClick={handleTeamNameClick} />
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 teamviewcontainer">
                            <MembersView teamData={teamData} selectedTeam={selectedTeam} />
                        </div>
                    </div>
                </div>

                <div className="row" style={{ marginTop: '35px' }}>
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
                            <Modal isOpen={isOpen} toggle={() => setIsOpen(false)} size={"lg"}>
                                <div
                                    className="about-us__banner-img"
                                    style={{
                                        backgroundImage: `url('/images/aboutus/WEB_reciclaje.jpg')`,
                                        height:'30em',
                                        width:"53em",
                                        backgroundSize:"cover",
                                        backgroundRepeat:"no-repeat",
                                        backgroundPosition:"center center"
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
                </div>
            </div>
        </div>
    );
}

export default SitePageAboutUs;
