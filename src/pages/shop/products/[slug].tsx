// third-party
import { GetStaticPropsContext } from 'next';
import goldfarbApi from '../../../api/goldfarb';
import shopApi from '../../../api/shop';
// application
import ShopPageProduct from '../../../components/shop/ShopPageProduct';
import SitePageNotFound from '../../../components/site/SitePageNotFound';
import { IShopCategory } from '../../../interfaces/category';
import { IProduct } from '../../../interfaces/product';

export interface PageProps {
    product: IProduct | null;
    relatedProducts: IProduct[];
    categories: IShopCategory[];
}

export async function getStaticPaths() {
    // const paths = [{ params: { slug: '25168' } }]; // for testing
    // Get the paths we want to pre-render based on posts
    const { products } = await goldfarbApi.getProductsList();
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
        const categories = await shopApi.getCategories({ depth: 1 });

        const { products } = await goldfarbApi.getProductsLookup2({ itemcodes: [slug] });
        // eslint-disable-next-line prefer-destructuring
        const product = products[0];

        if (product) {
            const { products: relatedProducts } = await goldfarbApi.getProductsLookup2({
                itemcodes: product?.relatedItems || [],
            });

            return {
                props: {
                    product,
                    relatedProducts,
                    categories,
                },
                revalidate: 60, // In seconds
            };
        }
    }

    return {
        props: {
            product: null,
            relatedProducts: [],
            categories: [],
        },
        revalidate: 60, // In seconds
    };
}

function Page({ product, relatedProducts, categories }: PageProps) {
    if (product === null) {
        return <SitePageNotFound />;
    }
    return <ShopPageProduct categories={categories} product={product} relatedProducts={relatedProducts} />;
}

export default Page;
