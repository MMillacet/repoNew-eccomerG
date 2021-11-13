import { ImageAsset } from '@sanity/types/dist/dts';

export interface IBrand {
    slug: string;
    name: string;
    description?: Array<object>;
    image?: string;
    logo?: ImageAsset;
}
