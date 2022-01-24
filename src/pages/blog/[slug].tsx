// application
import { GetStaticProps, GetStaticPropsContext } from 'next';
import sanityApi from '../../api/sanity';
import BlogPagePost from '../../components/blog/BlogPagePostSanity';
import { SanityBlogPost } from '../../custom-sanity-types/blogPost';

export interface PageProps {
    post?: SanityBlogPost | null;
    recentPosts?: Array<SanityBlogPost> | null;
}
function Page(props: PageProps) {
    return (
        <BlogPagePost
            layout="classic"
            sidebarPosition="end"
            post={props.post}
            recentPosts={props.recentPosts}
        />
    );
}

export async function getStaticPaths() {
    const posts = await sanityApi.getBlog();

    // Get the paths we want to pre-render based on posts
    const paths = process.env.IGNORE_PRODUCT_BUILDS
        ? []
        : posts
              .filter((product: { slug: any }) => !!product.slug)
              .map((product: { slug: any }) => ({ params: { slug: product.slug } }));

    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps<PageProps> = async (context: GetStaticPropsContext) => {
    let post: SanityBlogPost | null = null;
    let recentPosts: Array<SanityBlogPost> | null = [];

    if (typeof context.params?.slug === 'string') {
        const { slug } = context.params;
        post = await sanityApi.getBlogPost(slug);
        recentPosts = await sanityApi.getBlog(5, 'publishedAt', 'desc');
    }
    console.log('recentPosts', recentPosts);
    return {
        props: {
            post,
            recentPosts,
        },
        revalidate: 60, // In seconds
        notFound: !post,
    };
};

export default Page;
