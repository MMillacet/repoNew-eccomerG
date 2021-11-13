// third-party
import { GetStaticProps } from 'next';

// application
import client from '../api/sanityClient';
import HomePageTwo, { InitData } from '../components/home/HomePageTwo';
// import shopApi from '../api/shop';

export interface PageProps {
    initData?: InitData;
}

function Page(props: PageProps) {
    const { initData } = props;

    return <HomePageTwo initData={initData} />;
}

// // noinspection JSUnusedGlobalSymbols
// export const getServerSideProps: GetServerSideProps<PageProps> = async () => ({
//     props: {
//         initData: {
//             featuredProducts: await shopApi.getPopularProducts({ limit: 12 }),
//             bestsellers: await shopApi.getPopularProducts({ limit: 7 }),
//             latestProducts: await shopApi.getLatestProducts({ limit: 8 }),
//             productColumns: [
//                 {
//                     title: 'Top Rated Products',
//                     products: await shopApi.getTopRatedProducts({ limit: 3 }),
//                 },
//                 {
//                     title: 'Special Offers',
//                     products: await shopApi.getDiscountedProducts({ limit: 3 }),
//                 },
//                 {
//                     title: 'Bestsellers',
//                     products: await shopApi.getPopularProducts({ limit: 3 }),
//                 },
//             ],
//         },
//     },
// });

export const getStaticProps: GetStaticProps<PageProps> = async () => {
    console.log('getStaticProps start');
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
    console.log('getStaticProps', result);
    // TODO: we should also include product request to shop api using product ids from sanity response

    return {
        props: { initData: { slides: result?.slides, banners: result?.banners, ourBrands: result?.nuestrasMarcas } },
    };
};

// export async function getStaticPaths() {
//     const paths = await client.fetch(postSlugsQuery);
//     return {
//         paths: paths.map((slug) => ({ params: { slug } })),
//         fallback: true,
//     };
// }

export default Page;
