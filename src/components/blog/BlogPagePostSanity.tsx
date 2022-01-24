// react
import { Fragment } from 'react';

// third-party
import Head from 'next/head';

// application
import BlogPost from './BlogPostSanity';
import BlogSidebar from './BlogSidebarSanity';
import PageHeader from '../shared/PageHeader';

// data stubs
import theme from '../../data/theme';
import { SanityBlogPost } from '../../custom-sanity-types/blogPost';

export type BlogPagePostLayout = 'classic' | 'full';

export type BlogPagePostSidebarPosition = 'start' | 'end';

export interface BlogPagePostProps {
    layout?: BlogPagePostLayout;
    sidebarPosition?: BlogPagePostSidebarPosition;
    post?: SanityBlogPost | null;
    recentPosts?: Array<SanityBlogPost> | null;
}

export default function BlogPagePost(props: BlogPagePostProps) {
    const { layout = 'classic', sidebarPosition = 'start' } = props;

    let content;

    if (layout === 'classic') {
        const sidebar = <BlogSidebar position={sidebarPosition} recentPosts={props.recentPosts} />;

        let sidebarStart;
        let sidebarEnd;

        if (sidebarPosition === 'start') {
            sidebarStart = <div className="col-12 col-lg-4 order-1 order-lg-0">{sidebar}</div>;
        }
        if (sidebarPosition === 'end') {
            sidebarEnd = <div className="col-12 col-lg-4">{sidebar}</div>;
        }

        content = (
            <div className="row">
                {sidebarStart}
                <div className="col-12 col-lg-8">
                    <BlogPost layout={layout} post={props.post} />
                </div>
                {sidebarEnd}
            </div>
        );
    } else if (layout === 'full') {
        content = (
            <div className="row justify-content-center">
                <div className="col-md-12 col-lg-9 col-xl-8">
                    <BlogPost layout={layout} post={props.post} />
                </div>
            </div>
        );
    }

    const breadcrumbs = [
        { title: 'Home', url: '/' },
        { title: 'Blog', url: '/blog' },
        { title: 'Noticia', url: '' },
    ];

    return (
        <Fragment>
            <Head>
                <title>{`Noticia — ${theme.name}`}</title>
            </Head>

            <PageHeader breadcrumb={breadcrumbs} />

            <div className="container">{content}</div>
        </Fragment>
    );
}
