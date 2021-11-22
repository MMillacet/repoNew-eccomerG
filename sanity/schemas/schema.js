// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
import category from './category';
import post from './post';
import teamMember from './teamMember';
import home from './home';
import nuestrasMarcas from './nuestrasMarcas';
import header from './header';
import footer from './footer';
import marca from './marca';
import preguntaRespuesta from './preguntaRespuesta';
import preguntasFrecuentes from './preguntasFrecuentes';
import sobreNosotros from './sobreNosotros';
import link from './link';
import banner from './banner';

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
        post,
        preguntaRespuesta,
        preguntasFrecuentes,
        sobreNosotros,
        // When added to this list, object types can be used as
        // { type: 'typename' } in other document schemas
    ]),
});
