// application
import { GetServerSideProps } from 'next';
import sanityApi from '../../api/sanity';
import BlogPageCategory, { InitData } from '../../components/blog/BlogPage';

export interface PageProps {
    initData?: InitData;
}

function Page(props: PageProps) {
    const { initData } = props;
    return <BlogPageCategory initData={initData} sidebarPosition="none" />;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
    const posts = await sanityApi.getBlog();

    return {
        props: {
            initData: { posts },
        },
    };
};

export default Page;
