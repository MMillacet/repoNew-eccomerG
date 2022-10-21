// third-party
import { GetServerSideProps } from 'next';
import goldfarbApi from '../../api/goldfarb';

// application
import sanityApi from '../../api/sanity';
import SitePageAboutUs, { InitData } from '../../components/site/SitePageAboutUs';

export interface PageProps {
    initData: InitData;
}

function Page(props: PageProps) {
    const { initData } = props;
    return <SitePageAboutUs initData={initData} />;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
    const { title, subtitle = '', nuestroEquipo, banner, texts } = await sanityApi.getAboutUsContent();
    try {
        const teamData = await goldfarbApi.getEmployes();
        return {
            props: {
                initData: {
                    title,
                    subtitle,
                    team: nuestroEquipo,
                    banner,
                    texts,
                    teamData,
                },
            },
        };
    } catch (error) {
        return { notFound: true };
    }
};

export default Page;
