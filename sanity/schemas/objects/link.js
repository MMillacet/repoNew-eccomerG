/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default {
    title: 'Link',
    name: 'link',
    type: 'object',
    fields: [
        {
            name: 'text',
            title: 'Text',
            type: 'string',
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
        },
        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
            validation: (Rule) => Rule.custom((number) => !number || !Number.isNaN(number)),
        },
    ],
};
