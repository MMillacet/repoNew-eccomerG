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
    return <SitePageAboutUs initData={initData} />;
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
    const { title, subtitle, nuestroEquipo, banner, texts } = await sanityApi.getAboutUsContent();

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
