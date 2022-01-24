// application
import { SanityBlogPost } from '../../custom-sanity-types/blogPost';

// widgets
// import WidgetAboutus from '../widgets/WidgetAboutus';
// import WidgetCategories from '../widgets/WidgetCategories';
// import WidgetComments from '../widgets/WidgetComments';
// import WidgetNewsletter from '../widgets/WidgetNewsletter';
import WidgetPosts from '../widgets/WidgetPostsSanity';
// import WidgetSearch from '../widgets/WidgetSearch';
// import WidgetTags from '../widgets/WidgetTags';

export type BlogSidebarPosition = 'start' | 'end';

export interface BlogSidebarProps {
    position?: BlogSidebarPosition;
    recentPosts?: Array<SanityBlogPost> | null;
}

function BlogSidebar(props: BlogSidebarProps) {
    const { position = 'start' } = props;

    return (
        <div className={`block block-sidebar block-sidebar--position--${position}`}>
            {/* <div className="block-sidebar__item">
                <WidgetSearch />
            </div>
            <div className="block-sidebar__item">
                <WidgetAboutus />
            </div>
            <div className="block-sidebar__item">
                <WidgetCategories categories={dataBlogWidgetCategories} />
            </div> */}
            <div className="block-sidebar__item">
                <WidgetPosts posts={props.recentPosts} />
            </div>
            {/* <div className="block-sidebar__item">
                <WidgetNewsletter />
            </div>
            <div className="block-sidebar__item">
                <WidgetComments comments={dataBlogWidgetLatestComments.slice(0, 3)} />
            </div>
            <div className="block-sidebar__item">
                <WidgetTags />
            </div> */}
        </div>
    );
}

export default BlogSidebar;
