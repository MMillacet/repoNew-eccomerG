// react
import { Fragment, useEffect, useState } from 'react';

// third-party
import Head from 'next/head';

// application
import useSWR from 'swr';
import PageHeader from '../shared/PageHeader';
import Product from '../shared/Product';
import ProductTabs from './ProductTabs';
import url from '../../services/url';
import { IProduct } from '../../interfaces/product';
import { IShopCategory } from '../../interfaces/category';

// blocks
import BlockProductsCarousel from '../blocks/BlockProductsCarousel';

// widgets
import WidgetCategories from '../widgets/WidgetCategories';

// data stubs
import theme from '../../data/theme';

export type ShopPageProductLayout = 'standard' | 'sidebar' | 'columnar';

export type ShopPageProductSidebarPosition = 'start' | 'end';

export interface ShopPageProductProps {
    layout?: ShopPageProductLayout;
    sidebarPosition?: ShopPageProductSidebarPosition;
    // data
    product: IProduct;
    categories: IShopCategory[];
}

function ShopPageProduct(props: ShopPageProductProps) {
    const { product, layout = 'standard', sidebarPosition = 'start' } = props;
    const [categories, setCategories] = useState<IShopCategory[]>([]);
    const [relatedProducts, setRelatedProducts] = useState<any[]>([]);

    let { data } = useSWR(`/api/products/lookup?itemcodes=${[`${product.id}`]}`, (url: any) => fetch(url).then((res) => res.json()));

    const {
        products: [rtProduct],
    } = data ?? { products: [null] };

    const relatedItems = rtProduct?.relatedItems?.filter((item: any) => !!item) || [];

    ({ data } = useSWR(relatedItems?.length > 0 ? `/api/products/lookup?itemcodes=${relatedItems}` : null, (url) =>
        fetch(url).then((res) => res.json()),
    ));

    useEffect(() => {
        if (data) {
            setRelatedProducts([]);
            product.relatedItems.forEach((id: any) => {
                const prod = data.products.find((prod: { itemCode: any }) => prod.itemCode === id);
                if (prod) setRelatedProducts((prevState) => [...prevState, prod]);
            });
        }
    }, [data]);

    // Load categories.
    useEffect(() => {
        if (layout !== 'sidebar') {
            setCategories([]);
        } else {
            setCategories(props.categories);
        }
    }, [layout]);

    const breadcrumb = [
        { title: 'Inicio', url: url.home() },
        { title: 'Comprar', url: url.catalog() },
        { title: product?.title, url: url.product(product) },
    ];

    let content;

    if (layout === 'sidebar') {
        const sidebar = (
            <div className="shop-layout__sidebar">
                <div className="block block-sidebar">
                    <div className="block-sidebar__item">
                        <WidgetCategories categories={categories} location="shop" />
                    </div>
                </div>
            </div>
        );

        content = (
            <div className="container">
                <div className={`shop-layout shop-layout--sidebar--${sidebarPosition}`}>
                    {sidebarPosition === 'start' && sidebar}
                    <div className=" shop-layout__content">
                        <div className=" block">
                            <Product product={product} layout={layout} />
                            <ProductTabs withSidebar />
                        </div>

                        {relatedProducts.length > 0 && (
                            <BlockProductsCarousel title="Related Products" layout="grid-4-sm" products={relatedProducts} withSidebar />
                        )}
                    </div>
                    {sidebarPosition === 'end' && sidebar}
                </div>
            </div>
        );
    } else {
        content = (
            <Fragment>
                <div className="block">
                    <div className="container">
                        <Product product={product} layout={layout} />
                        <ProductTabs />
                    </div>
                </div>

                {relatedProducts.length > 0 && (
                    <BlockProductsCarousel title="Productos relacionados" layout="grid-5" products={relatedProducts} />
                )}
            </Fragment>
        );
    }

    return (
        <Fragment>
            <Head>
                <title>{`${product.title} — ${theme.name}`}</title>
            </Head>

            <PageHeader breadcrumb={breadcrumb} />

            {content}
        </Fragment>
    );
}

export default ShopPageProduct;
