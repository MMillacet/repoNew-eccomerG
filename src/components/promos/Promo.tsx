// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import { IProduct } from '../../interfaces/product';
import PromoCheckout from './PromoCheckout';
import PromoListProducts from './PromoListProducts';

export type ProductsViewLayout = 'grid' | 'grid-with-features' | 'list';

export type ProductsViewGrid = 'grid-3-sidebar' | 'grid-4-full' | 'grid-5-full';

export interface IPromoProducts {
    products: IProduct[];
    promo: any;
}

export interface ItemsSelected {
    product: any;
    quantity: number;
}

export default function PromoProducts({ products, promo }: IPromoProducts) {
    console.log({ products, promo });
    const [view, setView] = useState<string>('view1');
    const [productsSelected, setProductsSelected] = useState<any[]>([]);

    if (products.length < 1) {
        return (
            <React.Fragment>
                <div className="products-view__empty">
                    <div className="products-view__empty-title">No se encontraron productos</div>
                </div>
            </React.Fragment>
        );
    }

    return (
        <div className="cart block">
            <div className="container">
                <div className="products-view__list products-list">
                    <div className="products-view__empty-title product-promo-banner">
                        <img src={promo.u_Banner}></img>
                    </div>
                    <div className="product-promo-discount row">
                        <div className="product-promo-discount-col col-12 col-lg-10">{promo.u_Descrip}</div>
                    </div>
                    {view === 'view1' && (
                        <PromoListProducts
                            products={products}
                            productsSelected={productsSelected}
                            setView={setView}
                            promo={promo}
                            setProductsSelected={setProductsSelected}
                        />
                    )}
                    {view === 'view2' && <PromoCheckout />}
                    {view === 'view3' && <PromoCheckout />}
                </div>
            </div>
        </div>
    );
}
