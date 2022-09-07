// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
import { IProductPromoSelected, IPromoLine } from '../../interfaces/product';
import { IPromo } from '../../interfaces/promo';
import PromoCheckout from './PromoCheckout';
import PromoConfirm from './PromoConfirm';
import PromoListProducts from './PromoListProducts';

export type ProductsViewLayout = 'grid' | 'grid-with-features' | 'list';

export type ProductsViewGrid = 'grid-3-sidebar' | 'grid-4-full' | 'grid-5-full';

export interface IPromoProducts {
    products: IPromoLine[];
    promo: IPromo;
}

export default function PromoProducts({ products, promo }: IPromoProducts) {
    const [view, setView] = useState<string>('view1');
    const [productsSelected, setProductsSelected] = useState<IProductPromoSelected[]>([]);

    useEffect(() => {
        const newProductsSelecetd: IProductPromoSelected[] = [];
        const generatedProducts = async () => {
            await products.forEach((product: IPromoLine) => {
                const newItem = {
                    product,
                    quantity: 0,
                };
                newProductsSelecetd.push(newItem);
            });
            setProductsSelected(newProductsSelecetd);
        };
        generatedProducts();
    }, [products]);

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
                        <img src={promo.u_Banner}></img>
                    </div>
                    <div className="product-promo-discount row">
                        <div className="product-promo-discount-col col-12 col-lg-10">{promo.u_Descrip}</div>
                    </div>
                    {view === 'view1' && (
                        <div className="products-view__list products-list">
                            <PromoListProducts
                                productsSelected={productsSelected}
                                setView={setView}
                                promo={promo}
                                setProductsSelected={setProductsSelected}
                            />
                        </div>
                    )}
                    {view === 'view2' && (
                        <div className="products-view__list products-list" data-layout={'list'} data-with-features={'false'}>
                            <PromoCheckout setView={setView} productsSelected={productsSelected} />
                        </div>
                    )}
                    {view === 'view3' && <PromoConfirm setView={setView} productsSelected={productsSelected} />}
                </div>
            </div>
        </div>
    );
}
