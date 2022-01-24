export default {
    name: 'banner',
    title: 'Banner',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        },
        {
            name: 'link',
            title: 'Link',
            type: 'link',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
    ],
};
