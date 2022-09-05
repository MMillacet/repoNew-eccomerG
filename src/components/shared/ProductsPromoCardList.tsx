// react
import { memo } from 'react';

import AppLink from './AppLink';

import CurrencyFormat from './CurrencyFormat';

export type ProductCardLayout = 'grid-sm' | 'grid-nl' | 'grid-lg' | 'list' | 'horizontal';

export interface ProductCardProps {
    item: any;
    layout?: ProductCardLayout;
}

function ProductsPromoCardList(props: ProductCardProps) {
    const { item } = props;
    let image;
    let price;

    if (item.product.itemCode) {
        image = (
            <div className="product-card__image product-image">
                <AppLink className="product-image__body">
                    <img
                        className="product-image__img"
                        src={`https://goldfarb.blob.core.windows.net/goldfarb/imagenes/${item.product.itemCode}.jpg`}
                        alt=""
                    />
                </AppLink>
            </div>
        );
    }

    if (item.product && item.product.price > 0 && item.product.u_Porcentaje > 0) {
        const oldPrice = item.product.price;
        const newPrice = item.product.price - item.product.price * (item.product.u_Porcentaje / 100);
        price = (
            <div className="product-card__prices row">
                <div className="col-12 d-flex">
                    <CurrencyFormat value={newPrice} currency={item.product.currency} />
                    <div className="product-card__grey-text">with </div>
                    <div className="product-card__discount">{item.product.u_Porcentaje}% </div>
                </div>
                <span className="col-12 product-card__old-price promo-products__price-old">
                    <CurrencyFormat value={oldPrice} currency={item.product.currency} />
                </span>
            </div>
        );
    } else if (item.product && item.product.price > 0) {
        price = (
            <div className="product-card__prices">
                <CurrencyFormat value={item.product.price} currency={item.product.currency} />
            </div>
        );
    }

    return (
        <div className={'product-card product-card--layout--list'}>
            {image}
            <div className="promo-checkout-name product-card__info">
                <div className=" product-card__name">
                    <AppLink>{item.product.itemName}</AppLink>
                </div>
            </div>
            <div className="promo-products__price-row product-card__actions row">
                <div className=" promo-product-price">{price}</div>
            </div>
            <div className="promo-products__price-row product-card__actions row promo-checkout-quantity">
                <div className="product-card__name promo-checkout-quantity-text">Quantity: </div>
                <div> {item.quantity}</div>
            </div>
        </div>
    );
}

export default memo(ProductsPromoCardList);
