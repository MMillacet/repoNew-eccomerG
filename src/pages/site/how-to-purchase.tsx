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

    return {
        props: {
            initData: { title, notClient, client, doubts },
        },
    };
};

export default Page;
