// third-party
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

// application
import { getSession } from '@auth0/nextjs-auth0';
import sanityApi from '../api/sanity';
import goldfarbApi from '../api/goldfarb';
import HomePageTwo, { InitData } from '../components/home/HomePageTwo';

export interface PageProps {
    initData?: InitData;
}

function Page(props: PageProps) {
    const { initData } = props;

    return <HomePageTwo initData={initData} />;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (context: GetServerSidePropsContext) => {
    const result = await sanityApi.getHomeContent();

    const { req, res } = context;

    const session = await getSession(req, res);

    const cardcode = session?.user?.cardcode || null;

    const [loMasVendido, destacados] = await Promise.all(
        [result.loMasVendido, result.destacados].map((list) =>
            goldfarbApi.getProductsLookup(cardcode ? { itemcodes: list, cardcode } : { itemcodes: list }),
        ),
    );

    const productosDestacados = destacados.products.sort(
        (a: any, b: any) => result.destacados.indexOf(a.code) - result.destacados.indexOf(b.code),
    );

    return {
        props: {
            initData: {
                // herramientas: herramientas?.products,
                loMasVendido: loMasVendido?.products,
                destacados: productosDestacados,
                slides: result?.slides,
                banners: result?.banners,
                ourBrands: result?.nuestrasMarcas,
            },
        },
    };
};

export default Page;
