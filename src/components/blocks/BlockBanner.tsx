// third-party
import { ImageAsset } from '@sanity/types';

// application
import { SanityLink } from '../../custom-sanity-types/link';
import AppLink from '../shared/AppLink';

export interface BlockBannerItem {
    title: string;
    subtitle: string;
    link: SanityLink;
    image?: ImageAsset;
}
export interface BlockBannerProps {
    banner?: BlockBannerItem;
}
export default function BlockBanner(props: BlockBannerProps) {
    const image = props?.banner?.image?.url;
    return (
        <div className="block block-banner">
            <div className="container">
                <AppLink href="/" className="block-banner__body">
                    <div
                        className="block-banner__image block-banner__image--desktop"
                        style={{
                            backgroundImage: `url(${image})`,
                        }}
                    />
                    <div
                        className="block-banner__image block-banner__image--mobile"
                        style={{
                            backgroundImage: `url(${image})`,
                        }}
                    />
                    <div className="block-banner__title">{props?.banner?.title}</div>
                    <div className="block-banner__text">{props?.banner?.subtitle}</div>
                    <div className="block-banner__button">
                        <span className="btn btn-sm btn-primary">
                        {props?.banner?.link?.text}</span>
                    </div>
                </AppLink>
            </div>
        </div>
    );
}
