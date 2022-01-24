// application
import AppLink from '../shared/AppLink';
import { SanityBlogPost } from '../../custom-sanity-types/blogPost';
import { formatDate } from '../../api/helpers/utils';

export interface WidgetPostsProps {
    posts?: Array<SanityBlogPost> | null;
}

function WidgetPosts(props: WidgetPostsProps) {
    const { posts = [] } = props;
    // const postImage = (post: SanityBlogPost) => {
    //     console.log(post.mainImage);
    //     return post.mainImage?.url?.replace(/\.jpg$/, '-thumbnail.jpg');
    // };

    const postsList = (posts || []).map((post) => (
        <div key={post.id} className="widget-posts__item">
            <div className="widget-posts__image">
                <AppLink href={`/blog/${encodeURIComponent(post.slug)}`}>
                    <img src={post.mainImage?.url || '/images/posts/post-1.jpg'} alt="" />
                </AppLink>
            </div>

            <div className="widget-posts__info">
                <div className="widget-posts__name">
                    <AppLink href={`/blog/${encodeURIComponent(post.slug)}`}>{post.title}</AppLink>
                </div>
                <div className="widget-posts__date">{formatDate(post.publishedAt)}</div>
            </div>
        </div>
    ));

    return (
        <div className="widget-posts widget">
            <h4 className="widget__title">Ultimas Noticias</h4>
            <div className="widget-posts__list">{postsList}</div>
        </div>
    );
}

export default WidgetPosts;
