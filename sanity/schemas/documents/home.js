export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slides',
            title: 'Slides',
            type: 'array',
            of: [{ type: 'banner' }],
        },
        {
            name: 'banners',
            title: 'Banners',
            type: 'array',
            of: [{ type: 'banner' }],
        },
        {
            name: 'herramientas',
            title: 'Herramientas',
            type: 'array',
            // of: [{ type: 'reference', to: { type: 'post' } }],
            of: [{ type: 'string' }],
        },
        {
            name: 'loMasVendido',
            title: 'Lo Mas Vendido',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'destacados',
            title: 'Destacados',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'nuestrasMarcas',
            title: 'Nuestras Marcas',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'marca' } }],
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
};
