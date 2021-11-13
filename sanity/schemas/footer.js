export default {
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
        {
            name: 'enlaces',
            title: 'Enlaces',
            type: 'array',
            of: [{ type: 'link' }],
        },
    ],
};
