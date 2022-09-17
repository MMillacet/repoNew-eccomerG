// eslint-disable-next-line no-use-before-define
import React from 'react';
import { IPromo } from '../../interfaces/promo';
import PromoContainer from './hooks/PromoContainer';
import PromoCheckout from './PromoCheckout';
import PromoConfirm from './PromoConfirm';
import PromoListProducts from './PromoListProducts';

export type ProductsViewLayout = 'grid' | 'grid-with-features' | 'list';

export type ProductsViewGrid = 'grid-3-sidebar' | 'grid-4-full' | 'grid-5-full';

export interface IPromoProducts {
    promo: IPromo;
}

export default function PromoProducts({ promo }: IPromoProducts) {
    const products = promo.lines;
    const promoContainer = PromoContainer(promo);

    const { view } = promoContainer;

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
                <div className="products-view__content">
                    <div className="products-view__empty-title product-promo-banner">
                        <img style={{ maxWidth: '100%' }} src={promo.u_Banner}></img>
                    </div>
                    <div className="product-promo-discount row">
                        <div className="product-promo-discount-col col-12 col-lg-10">{promo.u_Descrip}</div>
                    </div>
                    {view === 'view1' && (
                        <div className="products-view__list products-list">
                            <PromoListProducts promoContainer={promoContainer} />
                        </div>
                    )}
                    {view === 'view2' && (
                        <div className="products-view__list products-list" data-layout={'list'} data-with-features={'false'}>
                            <PromoCheckout promoContainer={promoContainer} />
                        </div>
                    )}
                    {view === 'view3' && <PromoConfirm promoContainer={promoContainer} />}
                </div>
            </div>
        </div>
    );
}
