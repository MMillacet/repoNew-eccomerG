// third-party
import { GetStaticProps } from 'next';

// application
import sanityApi from '../../api/sanity';
import SitePageHowToPurchase, { InitData } from '../../components/site/SitePageHowToPurchase';

export interface PageProps {
    initData?: InitData;
}

function Page(props: PageProps) {
    const { initData } = props;
    return <SitePageHowToPurchase initData={initData} />;
}
export const getStaticProps: GetStaticProps<PageProps> = async () => {
    const { title, notClient, client, doubts } = await sanityApi.getHowToPurchaseContent();

    // TODO: we should also include product request to shop api using product ids from sanity response

    // 1 requests con todos los codigos

    // despues los divido en colecciones: destacados, herraminetas, mas vendidos
    return {
        props: {
            initData: { title, notClient, client, doubts },
        },
    };
};

export default Page;
