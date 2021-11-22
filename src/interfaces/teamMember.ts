import { ImageAsset } from '@sanity/types/dist/dts';

export interface ITeamMember {
    id: string;
    name: string;
    role: string;
    bio?: Array<object>;
    image?: ImageAsset;
}
