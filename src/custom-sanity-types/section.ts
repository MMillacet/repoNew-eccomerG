import { ImageAsset } from '@sanity/types/dist/dts';

export interface SanitySection {
    subtitle: string;
    text: object[];
    image?: ImageAsset;
}
