// react
import { useState, Fragment, useMemo } from 'react';

// third-party
import Head from 'next/head';

// application
import BlogSidebar from './BlogSidebar';
import PageHeader from '../shared/PageHeader';
import Pagination from '../shared/Pagination';
import PostCard, { PostCardLayout } from '../shared/PostCardSanity';
import { SanityBlogPost } from '../../custom-sanity-types/blogPost';

// data stubs
// import dataBlogPosts from '../../data/blogPosts';
// import theme from '../../data/theme';

export type BlogPageCategoryLayout = 'classic' | 'grid' | 'list';

export type BlogPageCategorySidebarPosition = 'start' | 'end' | 'none';

export interface InitData {
    posts: Array<SanityBlogPost>;
}
export interface BlogPageCategoryProps {
    layout?: BlogPageCategoryLayout;
    sidebarPosition?: BlogPageCategorySidebarPosition;
    initData?: InitData;
}

const PAGE_SIZE = 5;

function BlogPageCategory(props: BlogPageCategoryProps) {
    const { layout = 'list', sidebarPosition = 'start' } = props;
    const [page, setPage] = useState(1);

    const breadcrumb = [
        { title: 'Inicio', url: '/' },
        { title: 'Noticias', url: '/' },
    ];

    let sidebarStart;
    let sidebarEnd;

    let sidebar = null;

    if (sidebarPosition === 'start') {
        sidebar = <BlogSidebar position={sidebarPosition} />;
        sidebarStart = <div className="col-12 col-lg-4 order-1 order-lg-0">{sidebar}</div>;
    } else if (sidebarPosition === 'end') {
        sidebar = <BlogSidebar position={sidebarPosition} />;
        sidebarEnd = <div className="col-12 col-lg-4">{sidebar}</div>;
    } else {
        sidebarStart = null;
        sidebarEnd = null;
    }
    const postsToPaginate = props.initData?.posts;
    const postList = useMemo(() => {
        const start = (page - 1) * PAGE_SIZE;
        const end = page * PAGE_SIZE;
        const auxPostList = postsToPaginate?.slice(start, end).map((post, index) => {
            const layoutMap: { [layout: string]: PostCardLayout } = {
                classic: 'grid-lg',
                grid: 'grid-nl',
                list: 'list-nl',
            };
            return (
                <div key={`${post.id}-${index}`} className="posts-list__item">
                    <PostCard post={post} layout={layoutMap[layout]} />
                </div>
            );
        });
        console.log('pagination', start, end, auxPostList);
        return auxPostList;
    }, [page, postsToPaginate]);

    console.log(page, postList);
    return (
        <Fragment>
            <Head>
                <title>Goldfarb - Noticias</title>
            </Head>

            <PageHeader header="Noticias" breadcrumb={breadcrumb} />

            <div className="container">
                <div className="row">
                    {sidebarStart}
                    <div className={`col-12 ${sidebarPosition !== 'none' ? 'col-lg-8' : ''}`}>
                        <div className="block">
                            <div className="posts-view">
                                <div
                                    className={`posts-view__list posts-list posts-list--layout--${layout}`}
                                >
                                    <div className="posts-list__body">{postList}</div>
                                </div>
                                <div className="posts-view__pagination">
                                    <Pagination
                                        current={page}
                                        siblings={
                                            (postsToPaginate || []).length > PAGE_SIZE ? 1 : 0
                                        }
                                        total={
                                            postsToPaginate?.length
                                                ? Math.ceil(postsToPaginate?.length / PAGE_SIZE)
                                                : 1
                                        }
                                        onPageChange={setPage}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {sidebarEnd}
                </div>
            </div>
        </Fragment>
    );
}

export default BlogPageCategory;
