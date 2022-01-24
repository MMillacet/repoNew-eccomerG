// application
import { GetStaticProps } from 'next';
import sanityApi from '../../api/sanity';
import BlogPageCategory, { InitData } from '../../components/blog/BlogPage';

export interface PageProps {
    initData?: InitData;
}

function Page(props: PageProps) {
    const { initData } = props;
    return <BlogPageCategory initData={initData} sidebarPosition='none'/>;
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
    const posts = await sanityApi.getBlog();

    console.log(posts);
    // TODO: we should also include product request to shop api using product ids from sanity response

    // 1 requests con todos los codigos

    // despues los divido en colecciones: destacados, herraminetas, mas vendidos
    return {
        props: {
            initData: { posts },
        },
    };
};

export default Page;
