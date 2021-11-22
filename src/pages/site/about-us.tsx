// third-party
import { GetStaticProps } from 'next';

// application
import sanityApi from '../../api/sanity';
import SitePageAboutUs, { InitData } from '../../components/site/SitePageAboutUs';

export interface PageProps {
    initData?: InitData;
}

function Page(props: PageProps) {
    const { initData } = props;
    console.log(initData);
    return <SitePageAboutUs initData={initData} />;
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
    const { title, subtitle, nuestroEquipo, banner, texts } = await sanityApi.getAboutUsContent();

    // TODO: we should also include product request to shop api using product ids from sanity response

    // 1 requests con todos los codigos

    // despues los divido en colecciones: destacados, herraminetas, mas vendidos
    return {
        props: {
            initData: {
                title,
                subtitle,
                team: nuestroEquipo,
                banner,
                texts,
            },
        },
    };
};

export default Page;
