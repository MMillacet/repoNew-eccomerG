// react
import { memo, useState } from 'react';

// third-party
import { useUser } from '@auth0/nextjs-auth0';
import classNames from 'classnames';

// application
import AppLink from './AppLink';
// import Compare16Svg from '../../svg/compare-16.svg';
import CurrencyFormat from './CurrencyFormat';
// import Rating from './Rating';
import url from '../../services/url';
// import Wishlist16Svg from '../../svg/wishlist-16.svg';
// import { useCompareAddItem } from '../../store/compare/compareHooks';
// import { useWishlistAddItem } from '../../store/wishlist/wishlistHooks';
import InputNumber from './InputNumber';
import Rating from './Rating';

export type ProductCardLayout = 'grid-sm' | 'grid-nl' | 'grid-lg' | 'list' | 'horizontal';

export interface ProductCardProps {
    product: any;
    layout?: ProductCardLayout;
    handleAddItem: Function;
    productQuantity: number;
}

function ProductPromoCard(props: ProductCardProps) {
    const { product, layout, handleAddItem, productQuantity } = props;

    const [quantity, setQuantity] = useState<number>(productQuantity);

    const { user } = useUser();
    const isUserActivated = user && !!user.cardcode;

    const containerClasses = classNames('product-card', {
        noauth: !isUserActivated,
        'product-card--layout--grid product-card--size--sm': layout === 'grid-sm',
        'product-card--layout--grid product-card--size--nl': layout === 'grid-nl',
        'product-card--layout--grid product-card--size--lg': layout === 'grid-lg',
        'product-card--layout--list': layout === 'list',
        'product-card--layout--horizontal': layout === 'horizontal',
    });

    product.badges = ['new'];

    const badges: any[] = [];
    let image;
    let price;
    let features;

    if (product.badges.includes('sale')) {
        badges.push(
            <div key="sale" className="product-card__badge product-card__badge--sale">
                Sale
            </div>,
        );
    }
    if (product.badges.includes('hot')) {
        badges.push(
            <div key="hot" className="product-card__badge product-card__badge--hot">
                Hot
            </div>,
        );
    }
    if (product.badges.includes('new')) {
        badges.push(
            <div key="new" className="product-card__badge product-card__badge--new">
                {product.itemCode}
            </div>,
        );
    }

    if (product.itemCode) {
        image = (
            <div className="product-card__image product-image">
                <AppLink href={url.product(product)} className="product-image__body">
                    <img
                        className="product-image__img"
                        src={`https://goldfarb.blob.core.windows.net/goldfarb/imagenes/${product.itemCode}.jpg`}
                        alt=""
                    />
                </AppLink>
            </div>
        );
    }

    if (product && product.price > 0 && product.u_Porcentaje > 0) {
        const oldPrice = product.price;
        const newPrice = product.price - product.price * (product.u_Porcentaje / 100);
        price = (
            <div className="product-card__prices row">
                <div className="col-12 d-flex">
                    <CurrencyFormat value={newPrice} currency={product.currency} />
                    <div className="product-card__grey-text">with </div>
                    <div className="product-card__discount">{product.u_Porcentaje}% </div>
                </div>
                <span className="col-12 product-card__old-price promo-products__price-old">
                    <CurrencyFormat value={oldPrice} currency={product.currency} />
                </span>
            </div>
        );
    } else if (product && product.price > 0) {
        price = (
            <div className="product-card__prices">
                <CurrencyFormat value={product.price} currency={product.currency} />
            </div>
        );
    }

    const handleChangeQuantity = (_quantity: string | number) => {
        const quantity = typeof _quantity === 'string' ? parseFloat(_quantity) : _quantity;
        setQuantity(quantity);
        handleAddItem({ product, quantity });
    };

    return (
        <div className={containerClasses}>
            {badges.length > 0 && <div className="product-card__badges-list">{badges}</div>}
            {image}
            <div className="product-card__info">
                <div className="product-card__name">
                    <AppLink href={url.product(product)}>{product.itemName}</AppLink>
                </div>
                <div className="product-card__rating">
                    <Rating value={product.rating} />
                    <div className=" product-card__rating-legend">{`${product.reviews} Reviews`}</div>
                </div>
                {features}
            </div>
            <div className=" product-card__actions row promo-card-row">
                <div className="product-promo-price col-7 col-sm-12 col-md-12 col-lg-12 col-xl-7 promo-product-price">{price}</div>

                <div className="justify-content-c promo-product__buttons col-5 col-sm-12 col-md-12  col-lg-12 col-xl-5 ">
                    <div className="product__actions-item">
                        <InputNumber
                            id="product-quantity"
                            aria-label="Quantity"
                            className="product__quantity"
                            size="lg"
                            min={product.unitMult}
                            step={product.unitMult}
                            value={quantity}
                            onChange={(quantity) => handleChangeQuantity(quantity)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(ProductPromoCard);
