// eslint-disable-next-line import/no-unresolved
import { ImageAsset } from '@sanity/types/dist/dts';

export interface ITeamMember {
    id: string;
    name: string;
    role: string;
    bio?: Array<object>;
    image?: ImageAsset;
}

export interface ITeam {
    apellido: string;
    nombre: string;
    descripcion: string;
    equipo: string;
}
