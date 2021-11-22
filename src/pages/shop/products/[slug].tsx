// third-party
import { GetStaticPropsContext } from 'next';
import goldfarbApi from '../../../api/goldfarb';
// application
import ShopPageProduct from '../../../components/shop/ShopPageProduct';
import SitePageNotFound from '../../../components/site/SitePageNotFound';
import { IProduct } from '../../../interfaces/product';

export interface PageProps {
    product: IProduct | null;
}

export async function getStaticPaths() {
    const { products } = await goldfarbApi.getProductsList();

    // Get the paths we want to pre-render based on posts
    const paths = process.env.IGNORE_PRODUCT_BUILDS
        ? []
        : products
              .filter((product: { itemcode: any }) => !!product.itemcode)
              .map((product: { itemcode: any }) => ({ params: { slug: product.itemcode } }));

    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
}

export async function getStaticProps(context: GetStaticPropsContext) {
    let product: IProduct | null = null;

    if (typeof context.params?.slug === 'string') {
        const { slug } = context.params;

        const { products } = await goldfarbApi.getProductsLookup({ itemcodes: [slug] });
        product = products[0];
    }

    return {
        props: {
            product,
        },
        revalidate: 60, // In seconds
        notFound: !product,
    };
}

function Page({ product }: PageProps) {
    if (product === null) {
        return <SitePageNotFound />;
    }

    return <ShopPageProduct product={product} />;
}

export default Page;
