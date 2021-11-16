// third-party
import axios from 'axios';
import { GetStaticProps } from 'next';
import goldfarbApi from '../api/goldfarb';

// application
import sanityApi from '../api/sanity';
import HomePageTwo, { InitData } from '../components/home/HomePageTwo';

export interface PageProps {
    initData?: InitData;
}

function Page(props: PageProps) {
    const { initData } = props;

    return <HomePageTwo initData={initData} />;
}

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
    const result = await sanityApi.getHomeContent();

    const [herramientas, loMasVendido, destacados] = await Promise.all(
        [result.herramientas, result.loMasVendido, result.destacados].map((list) =>
            goldfarbApi.getProductsLookup({ itemcodes: list }),
        ),
    );

    return {
        props: {
            initData: {
                herramientas: herramientas?.products,
                loMasVendido: loMasVendido?.products,
                destacados: destacados?.products,
                slides: result?.slides,
                banners: result?.banners,
                ourBrands: result?.nuestrasMarcas,
            },
        },
    };
};

export default Page;


