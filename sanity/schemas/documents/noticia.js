export default {
    name: 'noticia',
    title: 'Noticia',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Titulo',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'author',
            title: 'Autor',
            type: 'reference',
            to: { type: 'teamMember' },
        },
        {
            name: 'mainImage',
            title: 'Imagen Principal',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'includeImageInPost',
            title: 'Incluir imagen en la noticia',
            type: 'boolean',
        },
        {
            name: 'video',
            title: 'Video',
            type: 'file',
        },
        {
            name: 'categories',
            title: 'Categorías',
            type: 'array',
            of: [{ type: 'category' }],
        },
        {
            name: 'publishedAt',
            title: 'Fecha Publicación',
            type: 'datetime',
        },
        {
            name: 'body',
            title: 'Contenido',
            type: 'blockContent',
        },
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection;
            return { ...selection, subtitle: author && `by ${author}` };
        },
    },
};
