import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: process.env.SANITY_PROJECT_ID, // you can find this in sanity.json
    dataset: process.env.SANITY_DATASET, // or the name you chose in step 1
    useCdn: false, // `false` if you want to ensure fresh data
    token: process.env.SANITY_TOKEN,
    apiVersion: '2021-06-07',
});
