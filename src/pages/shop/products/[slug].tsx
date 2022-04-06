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

// const writeProductsLocally = async (products: any[]) => {
//     const itemcodes = products
//         .map((product) => product.itemcode)
//         .filter((product) => !!product)
//         .sort((a, b) => Number(a) - Number(b));

//     const lastItemCode = Number(itemcodes[itemcodes.length - 1]);

//     for (let i = 0; i < lastItemCode; i += 1600) {
//         try {
//             const itemcodesToLookup = itemcodes.filter((itemcode) => Number(itemcode) >= i && Number(itemcode) < i + 1600);
//             if (itemcodesToLookup.length > 0) {
//                 // eslint-disable-next-line no-await-in-loop
//                 const { products } = await goldfarbApi.getProductsLookup2({ itemcodes: itemcodesToLookup });
//                 try {
//                     const json: any = {};
//                     products.forEach((p) => {
//                         json[p.id] = p;
//                     });

//                     const filename = `${path.join(process.cwd(), `/src/data/products/${i}.json`)}`;
//                     console.log(`Writing ${itemcodesToLookup.length} products to file ${filename}`);
//                     // eslint-disable-next-line no-await-in-loop
//                     await fs.writeFile(filename, JSON.stringify(json), { flag: 'w+' });
//                 } catch (err) {
//                     console.error(`error writing file ${i}.json`, err);
//                 }
//             }
//         } catch (err) {
//             console.error(`Error at ${i}, ${err}`);
//         }
//     }
// };

export async function getStaticPaths() {
    // const paths = [{ params: { slug: '25168' } }]; // for testing
    // Get the paths we want to pre-render based on posts
    const { products } = await goldfarbApi.getProductsList();

    // await writeProductsLocally(products);

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
    const codes = itemcodes.map((itemcode) => Number(itemcode));

    const result: any[] = [];

    await Promise.all(
        codes.map(async (code) => {
            try {
                const filecode = fileCode(code);

                const products = await (await fetch(`https://goldfarb-ecommerce.vercel.app/products/${filecode}.json`)).json();
                const product = products[code];

                result.push(product);
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

        // const { products } = await goldfarbApi.getProductsLookup2({ itemcodes: [slug] });
        const products = await lookupProductsLocally([slug]);

        const [product] = products;

        if (product) {
            const relatedProducts = await lookupProductsLocally(product?.relatedItems || []);

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
