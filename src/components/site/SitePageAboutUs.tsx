// third-party
import Head from 'next/head';
import SanityBlockContent from '@sanity/block-content-to-react';

// application
import GoldfarbSlick from '../shared/GoldfarbSlick';

// data stubs
import { ITeamMember } from '../../interfaces/teamMember';
import { BlockSlideItem } from '../blocks/BlockSlideShow';
import BlockBanner from '../blocks/BlockBanner';

const slickSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    return (
        <div className="block about-us">
            <Head>
                <title>Sobre Nosotros</title>
            </Head>

            <div
                className="about-us__image"
                style={{ backgroundImage: 'url("/images/aboutus.jpg")' }}
            />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-xl-10">
                        <div className="about-us__body">
                            <BlockBanner banner={props.initData?.banner} />
                            <h1 className="about-us__title">{props.initData?.title}</h1>
                            <h5 className="about-us__team-title">{props.initData?.subtitle}</h5>
                            <div className="about-us__text typography">
                                {props.initData?.texts && (
                                    <SanityBlockContent blocks={props.initData?.texts} />
                                )}
                            </div>
                            <div className="about-us__team">
                                <h3 className="about-us__team-title">
                                    REFERENTES DEL EQUIPO COMERCIAL
                                </h3>
                                {/* <div className="about-us__team-subtitle text-muted">
                                    <br />
                                    <AppLink href={url.contacts()}>Contact us</AppLink> and we will
                                    consider your candidacy.
                                </div> */}
                                <div className="about-us__teammates teammates">
                                    <GoldfarbSlick {...slickSettings}>
                                        {props.initData?.team?.map((teamMember) => (
                                            <div
                                                key={teamMember.id}
                                                className="teammates__item teammate"
                                            >
                                                <div className="teammate__avatar">
                                                    <img src={`${teamMember.image?.url}`} alt="" />
                                                </div>
                                                <div className="teammate__name">
                                                    {teamMember.name}
                                                </div>
                                                <div className="teammate__position text-muted">
                                                    {teamMember.role}
                                                </div>
                                            </div>
                                        ))}
                                    </GoldfarbSlick>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SitePageAboutUs;
