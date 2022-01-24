import { ImageAsset } from '@sanity/types';

export interface SanitySection {
    subtitle: string;
    text: object[];
    image?: ImageAsset;
}
