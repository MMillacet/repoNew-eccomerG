/* eslint-disable no-underscore-dangle */
// third-party
import classNames from 'classnames';
import SanityBlockContent from '@sanity/block-content-to-react';

// application
import AppLink from './AppLink';
import { SanityBlogPost } from '../../custom-sanity-types/blogPost';
import { formatDate } from '../../api/helpers/utils';

export type PostCardLayout = 'grid-nl' | 'grid-lg' | 'list-nl' | 'list-sm';

export interface PostCardProps {
    post: SanityBlogPost;
    layout?: PostCardLayout;
}

function PostCard(props: PostCardProps) {
    const { post, layout } = props;
    const cardClasses = classNames('post-card', {
        'post-card--layout--grid': layout && ['grid-nl', 'grid-lg'].includes(layout),
        'post-card--layout--list': layout && ['list-nl', 'list-sm'].includes(layout),
        'post-card--size--nl': layout && ['grid-nl', 'list-nl'].includes(layout),
        'post-card--size--lg': layout === 'grid-lg',
        'post-card--size--sm': layout === 'list-sm',
    });
    // const categories =
    //     post.categories?.map((category) => (
    //         <AppLink key={category?.title} href={url.blogCategory()}>
    //             {category.title}
    //         </AppLink>
    //     )) || [];

    return (
        <div className={cardClasses}>
            <div className="post-card__image">
                <AppLink href={`/blog/${encodeURIComponent(post.slug)}`}>
                    <img src={post.mainImage?.url || '/images/posts/post-1.jpg'} alt="" />
                </AppLink>
            </div>
            <div className="post-card__info">
                {/* <div className="post-card__category">{categories}</div> */}
                <div className="post-card__name">
                    <AppLink href={`/blog/${encodeURIComponent(post.slug)}`}>{post.title}</AppLink>
                </div>
                <div className="post-card__date">{formatDate(post.publishedAt)}</div>
                <SanityBlockContent className="post-card__content" blocks={post.body} />
                <div className="post-card__read-more">
                    <AppLink
                        href={`/blog/${encodeURIComponent(post.slug)}`}
                        className="btn btn-secondary btn-sm"
                    >
                        LEER MÁS
                    </AppLink>
                </div>
            </div>
        </div>
    );
}

export default PostCard;
