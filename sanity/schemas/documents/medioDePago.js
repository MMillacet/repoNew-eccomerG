export default {
    name: 'medioDePago',
    title: 'Medio de Pago',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Nombre',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Descripcion',
            type: 'blockContent',
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
        },
    ],
};
