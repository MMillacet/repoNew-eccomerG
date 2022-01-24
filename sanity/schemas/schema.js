// First, we must import the schema creator
/* eslint-disable import/no-unresolved */
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
/* eslint-disable import/no-unresolved */
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import teamMember from './documents/teamMember';
import home from './documents/home';
import nuestrasMarcas from './documents/nuestrasMarcas';
import header from './documents/header';
import footer from './documents/footer';
import marca from './documents/marca';
import preguntasFrecuentes from './documents/preguntasFrecuentes';
import sobreNosotros from './documents/sobreNosotros';
import noticia from './documents/noticia';
import blockContent from './objects/blockContent';
import category from './objects/category';
import preguntaRespuesta from './objects/preguntaRespuesta';
import link from './objects/link';
import banner from './objects/banner';
import comoComprar from './documents/comoComprar';
import medioDePago from './documents/medioDePago';
import section from './objects/section';
import clientSection from './objects/clientSection';
import notClientSection from './objects/notClientSection';
import youtube from './objects/youtube';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        // The following are document types which will appear
        // in the studio.
        teamMember,
        banner,
        blockContent,
        category,
        footer,
        header,
        home,
        link,
        marca,
        nuestrasMarcas,
        noticia,
        preguntaRespuesta,
        preguntasFrecuentes,
        sobreNosotros,
        comoComprar,
        medioDePago,
        section,
        clientSection,
        notClientSection,
        youtube,
        // When added to this list, object types can be used as
        // { type: 'typename' } in other document schemas
    ]),
});
