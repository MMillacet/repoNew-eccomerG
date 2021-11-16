// third-party
import axios from 'axios';
import { GetStaticProps } from 'next';
import productsApi from '../../server/api/products';

// application
import { getHomePage } from '../api/sanityClient';
import HomePageTwo, { InitData } from '../components/home/HomePageTwo';
// import shopApi from '../api/shop';

export interface PageProps {
    initData?: InitData;
}

function Page(props: PageProps) {
    const { initData } = props;

    return <HomePageTwo initData={initData} />;
}

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
    const sanityHomeData = await getHomePage();

    const [herramientas, loMasVendido, destacados] = await Promise.all(
        [sanityHomeData.herramientas, sanityHomeData.loMasVendido, sanityHomeData.destacados].map(
            (list) => productsApi.lookup(list),
        ),
    );

    return {
        props: {
            initData: {
                herramientas: herramientas?.products,
                loMasVendido: loMasVendido?.products,
                destacados: destacados?.products,
                slides: sanityHomeData?.slides,
                banners: sanityHomeData?.banners,
                ourBrands: sanityHomeData?.nuestrasMarcas,
            },
        },
    };
};

export default Page;
