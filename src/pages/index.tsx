// third-party
import { useUser } from '@auth0/nextjs-auth0';
import { GetStaticProps } from 'next';
import { useEffect } from 'react';

// application
import sanityApi from '../api/sanity';
import goldfarbApi from '../api/goldfarb';
import HomePageTwo, { InitData } from '../components/home/HomePageTwo';

export interface PageProps {
    initData?: InitData;
}

function Page(props: PageProps) {
    const { user } = useUser();

    const fetchUserInfo = async () => {
        await fetch('/api/user/info');
    };

    useEffect(() => {
        if (user && !user.initialised) {
            fetchUserInfo();
        }
    }, [user]);

    const { initData } = props;

    return <HomePageTwo initData={initData} />;
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
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
