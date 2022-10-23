// react
import { ReactNode } from 'react';

// application
import ArrowRoundedRight6x9Svg from '../../svg/arrow-rounded-right-6x9.svg';
import { ILink } from '../../interfaces/menus/link';

export interface PageHeaderProps {
    header?: ReactNode;
    breadcrumb: ILink[];
    setView: Function;
}

const views = ['view1', 'view2', 'view3'];

function PromoHeader(props: PageHeaderProps) {
    const { setView, header, breadcrumb = [] } = props;
    let headerElement;
    let breadcrumbElement;

    const handleChangeView = (index: number) => {
        setView(views[index]);
    };

    if (header) {
        headerElement = (
            <div className="page-header__title">
                <h1>{header}</h1>
            </div>
        );
    }

    if (breadcrumb.length > 0) {
        const lastIndex = breadcrumb.length - 1;

        breadcrumbElement = breadcrumb.map((item, index) => {
            let link;

            if (lastIndex === index) {
                link = (
                    <li key={index} className="breadcrumb-item active" aria-current="page">
                        {item.title}
                    </li>
                );
            } else {
                link = (
                    <li key={index} className="breadcrumb-item">
                        <div className="breadcrum-promo-item" onClick={() => handleChangeView(index)} {...item.props}>
                            {item.title}
                        </div>
                        <ArrowRoundedRight6x9Svg className="breadcrumb-arrow" />
                    </li>
                );
            }

            return link;
        });

        breadcrumbElement = (
            <div className="page-header__breadcrumb">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">{breadcrumbElement}</ol>
                </nav>
            </div>
        );
    }

    return (
        <div className="page-header">
            <div className="page-header__container container">
                {breadcrumbElement}
                {headerElement}
            </div>
        </div>
    );
}

export default PromoHeader;
