import { ImageAsset } from '@sanity/types';

export interface SanityTeamMember {
    id: string;
    name: string;
    role: string;
    bio: object[];
    image: ImageAsset;
}
