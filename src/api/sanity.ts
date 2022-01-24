import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: process.env.SANITY_PROJECT_ID, // you can find this in sanity.json
    dataset: process.env.SANITY_DATASET, // or the name you chose in step 1
    useCdn: false, // `false` if you want to ensure fresh data
    token: process.env.SANITY_TOKEN,
    apiVersion: '2021-06-07',
});

const sanityApi = {
    getHomeContent: async () => {
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
        try {
            const result = await client.fetch(query);
            return result;
        } catch (error) {
            console.error(error);
            throw new Error(`${error}`);
        }
    },
    getAboutUsContent: async () => {
        const query = `
            *[_type == "sobreNosotros"]{
                ...,
                banner {
                    ...,
                    "image": image.asset->
                },
                nuestroEquipo[] -> {
                    "id": _id,
                    name,
                    role,
                    bio,
                    "image": image.asset->
                }
            }[0]
        `;
        try {
            const result = await client.fetch(query);
            return result;
        } catch (error) {
            console.error(error);
            throw new Error(`${error}`);
        }
    },
    getFAQContent: async () => {
        const query = `
            *[_type == "preguntasFrecuentes"]{
                ...,
                preguntas[] {
                      "id": _key,
                      "question": pregunta,
                      "answer": respuesta
                  }
            }[0]
        `;
        try {
            const result = await client.fetch(query);
            return result;
        } catch (error) {
            console.error(error);
            throw new Error(`${error}`);
        }
    },
    getHowToPurchaseContent: async () => {
        const query = `
            *[_type == "comoComprar"]{
                ...,
                client {
                    ...,
                    paymentMethods[] -> {
                      "id": _id,
                      name,
                      description,
                      "logo": logo.asset->
                  }
                }
            }[0]
        `;
        try {
            const result = await client.fetch(query);
            return result;
        } catch (error) {
            console.error(error);
            throw new Error(`${error}`);
        }
    },
    getBlog: async (limit?: number, orderField?: string, orderDirection: string = 'desc') => {
        const order = orderField ? ` | order(${orderField} ${orderDirection})` : '';
        const slice = limit ? `[0...${limit}]` : '';
        const query = `
            *[_type == "noticia"]{
                ...,
                author -> {
                    ...,
                    "id": _id,
                    role,
                    bio,
                    "image": image.asset->
                },
                "id": _id,
                "slug": slug.current,
                "mainImage": mainImage.asset->
            } ${order} ${slice}
        `;
        try {
            const result = await client.fetch(query);
            return result;
        } catch (error) {
            console.error(error);
            throw new Error(`${error}`);
        }
    },
    getBlogPost: async (slug: String) => {
        const query = `
            *[_type == "noticia" && slug.current == "${slug}"]{
                ...,
                author -> {
                    ...,
                    "id": _id,
                    role,
                    bio,
                    "image": image.asset->
                },
                "id": _id,
                "slug": slug.current,
                "mainImage": mainImage.asset->
            }[0]
        `;
        try {
            const result = await client.fetch(query);
            return result;
        } catch (error) {
            console.error(error);
            throw new Error(`${error}`);
        }
    },
};

export default sanityApi;
