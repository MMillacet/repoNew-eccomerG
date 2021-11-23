export default {
    name: 'section',
    title: 'Seccion',
    type: 'object',
    fields: [
        {
            name: 'subtitle',
            title: 'Subtitulo',
            type: 'string',
        },
        {
            name: 'text',
            title: 'Texto',
            type: 'blockContent',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
    ],
};
