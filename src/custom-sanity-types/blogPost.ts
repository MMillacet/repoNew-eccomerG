import { File, ImageAsset } from '@sanity/types';
import { SanityTeamMember } from './teamMember';

export interface SanityBlogPost {
    id: string;
    title: string;
    body: object[];
    slug: string;
    author: SanityTeamMember;
    categories: object[];
    publishedAt: Date;
    mainImage?: ImageAsset;
    includeImageInPost?: boolean;
    video?: File;
}
