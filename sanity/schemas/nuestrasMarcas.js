export default {
    name: 'nuestrasMarcas',
    title: 'Nuestras Marcas',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'blockContent',
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        },
        {
            name: 'marcas',
            title: 'Nuestras Marcas',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'marca' } }],
        },
    ],
};
