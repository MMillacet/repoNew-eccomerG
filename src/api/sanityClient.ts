import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: process.env.SANITY_PROJECT_ID, // you can find this in sanity.json
    dataset: process.env.SANITY_DATASET, // or the name you chose in step 1
    useCdn: false, // `false` if you want to ensure fresh data
    token: process.env.SANITY_TOKEN,
    apiVersion: '2021-06-07',
});

export async function getHomePage() {
    // The idea is to have only one home object in sanity so we just grab the first one
    const query = `
    *[_type == "home"]{
        ...,
        slides[] {
          ...,
          "image": image.asset->
        },
        banners[] {
          ...,
          "image": image.asset->
        },
        nuestrasMarcas[] -> {
            name,
            "logo": logo.asset->,
            description
        }
    }[0]
    `;
    const result = await client.fetch(query);

    return result;
}

export default client;
