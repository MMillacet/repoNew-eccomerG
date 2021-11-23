export default {
    name: 'clientSection',
    title: 'Seccion Soy Cliente',
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
        {
            name: 'payment',
            title: 'Formas de pago',
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
            ],
        },
        {
            name: 'paymentMethods',
            title: 'Medios de Pago',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'medioDePago' } }],
        },
        {
            name: 'whereToBuy',
            title: 'Donde comprar',
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
            ],
        },
    ],
};
