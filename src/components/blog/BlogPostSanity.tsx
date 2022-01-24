// third-party
import classNames from 'classnames';
import SanityBlockContent from '@sanity/block-content-to-react';
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';

// application
import AppLink from '../shared/AppLink';

// data stubs
import { SanityBlogPost } from '../../custom-sanity-types/blogPost';
import { formatDate } from '../../api/helpers/utils';

export type BlogPostLayout = 'classic' | 'full';

export interface BlogPostProps {
    layout?: BlogPostLayout;
    post?: SanityBlogPost | null;
}

const serializers = {
    types: {
        youtube: ({ node }: { node: any }) => {
            const { url } = node;
            const id = getYouTubeId(url);
            return <YouTube videoId={id === null ? undefined : id} />;
        },
    },
};

function BlogPost(props: BlogPostProps) {
    const { layout = 'classic' } = props;

    const postClasses = classNames('post__content typography', {
        'typography--expanded': layout === 'full',
    });

    return (
        <div className={`block post post--layout--${layout}`}>
            <div className={`post__header post-header post-header--layout--${layout}`}>
                {/* <div className="post-header__categories">
                    <AppLink href="/">Últimas Noticias</AppLink>
                </div> */}
                <h1 className="post-header__title">{props.post?.title}</h1>
                <div className="post-header__meta">
                    <div className="post-header__meta-item">
                        Por <AppLink href="/">{props.post?.author?.name}</AppLink>
                    </div>
                    <div className="post-header__meta-item">
                        <AppLink href="/">{formatDate(props.post?.publishedAt)}</AppLink>
                    </div>
                </div>
            </div>

            {props.post?.mainImage && props.post?.includeImageInPost && (
                <div className="post__featured">
                    <AppLink href="/">
                        <img src={props.post?.mainImage?.url} alt="" />
                    </AppLink>
                </div>
            )}

            <div className={postClasses}>
                <SanityBlockContent blocks={props.post?.body} serializers={serializers} />
            </div>

            <div className="post__footer">
                {/* <div className="post__tags-share-links">
                    <div className="post__tags tags">
                        <div className="tags__list">
                            <AppLink href="/">Promotion</AppLink>
                            <AppLink href="/">Power Tool</AppLink>
                            <AppLink href="/">Wrench</AppLink>
                            <AppLink href="/">Electrodes</AppLink>
                        </div>
                    </div>
                    <div className="post__share-links share-links">
                        <ul className="share-links__list">
                            <li className="share-links__item share-links__item--type--like">
                                <AppLink href="/">Like</AppLink>
                            </li>
                            <li className="share-links__item share-links__item--type--tweet">
                                <AppLink href="/">Tweet</AppLink>
                            </li>
                            <li className="share-links__item share-links__item--type--pin">
                                <AppLink href="/">Pin It</AppLink>
                            </li>
                            <li className="share-links__item share-links__item--type--counter">
                                <AppLink href="/">4K</AppLink>
                            </li>
                        </ul>
                    </div>
                </div> */}
                {props.post?.author && (
                    <div className="post-author">
                        <div className="post-author__avatar">
                            <AppLink href="/">
                                <img src={props.post?.author?.image?.url} alt="" />
                            </AppLink>
                        </div>
                        <div className="post-author__info">
                            <div className="post-author__name">{props.post?.author?.name}</div>
                            <div className="post-author__about">{props.post?.author?.bio}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BlogPost;
