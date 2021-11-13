export default {
    name: 'sobreNosotros',
    title: 'Sobre Nosotros',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'banner',
            title: 'Imagen Encabezado',
            type: 'banner',
        },
        {
            name: 'texts',
            title: 'Textos',
            type: 'blockContent',
        },
        {
            name: 'nuestroEquipo',
            title: 'Nuestro Equipo',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'author' } }],
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
};
