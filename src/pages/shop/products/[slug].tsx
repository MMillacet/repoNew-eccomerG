// third-party
import { GetStaticPropsContext } from 'next';
// import { promises as fs } from 'fs';
// import path from 'path';
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
              // eslint-disable-next-line no-restricted-globals
              .filter((product: { itemcode: any }) => product.itemcode && !isNaN(product.itemcode))
              .map((product: { itemcode: any }) => ({ params: { slug: product.itemcode } }));

    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
}

const fileCode = (itemcode: number) => `${itemcode - (itemcode % 1000)}`;

const lookupProductsLocally = async (itemcodes: string[]) => {
    const codes = itemcodes.filter(Number).map((itemcode) => Number(itemcode));

    const result: any[] = [];

    await Promise.all(
        codes.map(async (code) => {
            try {
                const filecode = fileCode(code);

                const products = await (await fetch(`https://goldfarb-ecommerce.vercel.app/products/${filecode}.json`)).json();
                const product = products[code];

                if (product) {
                    result.push(product);
                }
            } catch (e) {
                console.error('Failed to add product', code);
            }
        }),
    );

    return result;
};

export async function getStaticProps(context: GetStaticPropsContext) {
    if (typeof context.params?.slug === 'string') {
        const { slug } = context.params;
        const categories = await shopApi.getCategories({ depth: 1 });

        let products = await lookupProductsLocally([slug]);

        if (products.length === 0) {
            products = (await goldfarbApi.getProductsLookup({ itemcodes: [slug], withDesc: 'true' })).products;
        }

        const [product] = products;

        if (product) {
            return {
                props: {
                    product,
                    categories,
                },
                revalidate: 60, // In seconds
            };
        }
    }

    return {
        props: {
            product: null,
            categories: [],
        },
        revalidate: 60, // In seconds
    };
}

function Page({ product, categories }: PageProps) {
    if (product === null) {
        return <SitePageNotFound />;
    }
    return <ShopPageProduct categories={categories} product={product} />;
}

export default Page;
