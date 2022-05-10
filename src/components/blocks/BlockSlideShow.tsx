// react
import { useEffect, useRef } from 'react';

// third-party
import classNames from 'classnames';
import { ImageAsset } from '@sanity/types';

// application
import AppLink from '../shared/AppLink';
import departmentsService from '../../services/departmentsService';
import GoldfarbSlick from '../shared/GoldfarbSlick';
import { useMedia } from '../../services/hooks';
import { SanityLink } from '../../custom-sanity-types/link';

export interface BlockSlideItem {
    title: string;
    subtitle: string;
    link: SanityLink;
    image?: ImageAsset;
}

export interface BlockSlideShowProps {
    withDepartments?: boolean;
    slides?: Array<BlockSlideItem>;
}

const slickSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
};

function BlockSlideShow(props: BlockSlideShowProps) {
    const { withDepartments = false } = props;
    const departmentsAreaRef = useRef<HTMLDivElement | null>(null);
    const isDesktop = useMedia('(min-width: 992px)');

    useEffect(
        () => () => {
            departmentsService.area = null;
        },
        [],
    );

    useEffect(() => {
        departmentsService.area = departmentsAreaRef.current;
    }, [isDesktop, departmentsAreaRef]);

    const setDepartmentsAreaRef = (ref: HTMLDivElement | null) => {
        departmentsAreaRef.current = ref;

        if (isDesktop) {
            departmentsService.area = departmentsAreaRef.current;
        }
    };

    const blockClasses = classNames('block-slideshow block', {
        'block-slideshow--layout--full': !withDepartments,
        'block-slideshow--layout--with-departments': withDepartments,
    });

    const layoutClasses = classNames('col-12', {
        'col-lg-12': !withDepartments,
        'col-lg-9': withDepartments,
    });

    const slidesList = props.slides?.map((slide, index) => {
        // const image = (withDepartments ? slide.image_classic : slide.image_full)[direction];
        const image = slide.image?.url;
        return (
            <div key={index} className="block-slideshow__slide">
                <div
                    className="block-slideshow__slide-image block-slideshow__slide-image--desktop"
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundPosition: 'center',
                    }}
                />
                <div
                    className="block-slideshow__slide-image block-slideshow__slide-image--mobile"
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                />
                <div className="block-slideshow__slide-content">
                    {slide.title && <div className="block-slideshow__slide-title" dangerouslySetInnerHTML={{ __html: slide.title }} />}
                    {slide.subtitle && <div className="block-slideshow__slide-text" dangerouslySetInnerHTML={{ __html: slide.subtitle }} />}
                    {slide.link?.text && (
                        <div className="block-slideshow__slide-button">
                            <AppLink
                                href={slide.link?.url || (slide.link?.phone && `tel:${slide.link?.phone}`)}
                                className="btn btn-primary btn-lg"
                            >
                                {slide.link?.text}
                            </AppLink>
                        </div>
                    )}
                </div>
            </div>
        );
    });

    return (
        <div className={blockClasses}>
            <div className="container">
                <div className="row">
                    {withDepartments && <div className="col-3 d-lg-block d-none" ref={setDepartmentsAreaRef} />}

                    <div className={layoutClasses} style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <div className="block-slideshow__body">
                            <GoldfarbSlick {...slickSettings}>{slidesList}</GoldfarbSlick>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlockSlideShow;
