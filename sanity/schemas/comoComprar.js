export default {
    name: 'comoComprar',
    title: 'Como Comprar',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Titulo',
            type: 'string',
        },
        {
            name: 'notClient',
            title: 'No Soy Cliente',
            type: 'notClientSection',
        },
        {
            name: 'client',
            title: 'Soy Cliente',
            type: 'clientSection',
        },
        {
            name: 'doubts',
            title: 'Dudas',
            type: 'section',
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
};
