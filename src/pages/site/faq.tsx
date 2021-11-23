// third-party
import { GetStaticProps } from 'next';

// application
import sanityApi from '../../api/sanity';
import SitePageFaq, { InitData } from '../../components/site/SitePageFaq';

export interface PageProps {
    initData?: InitData;
}

function Page(props: PageProps) {
    const { initData } = props;
    return <SitePageFaq initData={initData} />;
}
export const getStaticProps: GetStaticProps<PageProps> = async () => {
    const { titulo, preguntas } = await sanityApi.getFAQContent();

    // TODO: we should also include product request to shop api using product ids from sanity response

    // 1 requests con todos los codigos

    // despues los divido en colecciones: destacados, herraminetas, mas vendidos
    return {
        props: {
            initData: {
                title: titulo,
                faq: preguntas,
            },
        },
    };
};

export default Page;
