// third-party
import { GetStaticPropsContext } from 'next';
import goldfarbApi from '../../../api/goldfarb';
// application
import ShopPageProduct from '../../../components/shop/ShopPageProduct';
import SitePageNotFound from '../../../components/site/SitePageNotFound';
import { IProduct } from '../../../interfaces/product';

export interface PageProps {
    product: IProduct | null;
    relatedProducts: IProduct[];
}

export async function getStaticPaths() {
    const { products } = await goldfarbApi.getProductsList();

    // const paths = [{ params: { slug: '51602' } }]; // for testing

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
    if (typeof context.params?.slug === 'string') {
        const { slug } = context.params;

        const { products } = await goldfarbApi.getProductsLookup2({ itemcodes: [slug] });

        // eslint-disable-next-line prefer-destructuring
        const product = products[0];

        const { products: relatedProducts } = await goldfarbApi.getProductsLookup2({
            itemcodes: product?.relatedItems || [],
        });

        return {
            props: {
                product,
                relatedProducts,
            },
            revalidate: 60, // In seconds
        };
    }

    return {
        props: {
            product: null,
            relatedProducts: [],
        },
        revalidate: 60, // In seconds
    };
}

function Page({ product, relatedProducts }: PageProps) {
    if (product === null) {
        return <SitePageNotFound />;
    }

    return <ShopPageProduct product={product} relatedProducts={relatedProducts} />;
}

export default Page;
