// application
// import { GetStaticPropsContext } from 'next';
import getShopPageData from '../../../store/shop/shopHelpers';
import ShopPageCategory from '../../../components/shop/ShopPageCategory';
import { wrapper } from '../../../store/store';
// import goldfarbApi from '../../../api/goldfarb';
// import { familiesToCategories, makeShopCategory, walkTree } from '../../../api/helpers/category';

// export async function getStaticPaths() {
//     // Get the paths we want to pre-render based on posts
//     const families = await goldfarbApi.getFamilies();
//     const categories = familiesToCategories(families);

//     // const paths = categories.map((category: any) => ({ params: { slug: category.slug } }));
//     const [, categoriesListData] = walkTree(makeShopCategory, categories);

//     const categorySlugs = categoriesListData.map((c) => c.slug).filter((s) => s !== '' && s !== '-');

//     const paths = [...new Set(categorySlugs)].map((slug: string) => ({ params: { slug } }));

//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: false };
// }

// export const getStaticProps = wrapper.getStaticProps((store) => async (context: GetStaticPropsContext) => {
//     if (typeof context.params?.slug === 'string') {
//         const { slug } = context.params;

//         await getShopPageData(store, context, slug);
//     } else {
//         await getShopPageData(store, context);
//     }

//     return {
//         props: {},
//         revalidate: 60, // In seconds
//     };
// });

// Problem to solve: If we server this statically we don't have price on first server and either price filter

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
    await getShopPageData(store, context);

    return { props: {} };
});

function Page() {
    return <ShopPageCategory columns={3} viewMode="grid" sidebarPosition="start" />;
}

export default Page;
