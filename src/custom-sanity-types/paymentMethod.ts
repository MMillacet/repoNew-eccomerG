import { ImageAsset } from '@sanity/types/dist/dts';

export interface SanityPaymentMethod {
    id: string;
    title: string;
    text: string;
    logo: ImageAsset;
}
