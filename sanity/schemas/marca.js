export default {
    name: 'marca',
    title: 'Marca',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'blockContent',
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
        },
        {
            name: 'video',
            title: 'Video',
            type: 'file',
        },
        {
            name: 'productos',
            title: 'Productos',
            type: 'array',
            of: [{ type: 'string' }],
        },
    ],
};
