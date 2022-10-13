// react
import { Fragment, memo, useEffect, useState } from 'react';

// third-party
import { useUser } from '@auth0/nextjs-auth0';
import classNames from 'classnames';

// application
import useSWR from 'swr';
import AppLink from './AppLink';
import AsyncAction from './AsyncAction';
// import Compare16Svg from '../../svg/compare-16.svg';
import CurrencyFormat from './CurrencyFormat';
// import Rating from './Rating';
import url from '../../services/url';
// import Wishlist16Svg from '../../svg/wishlist-16.svg';
import { IProduct } from '../../interfaces/product';
// import { useCompareAddItem } from '../../store/compare/compareHooks';
// import { useWishlistAddItem } from '../../store/wishlist/wishlistHooks';
import { useCartAddItem } from '../../store/cart/cartHooks';
import InputNumber from './InputNumber';
import goldfarb from '../../api/goldfarb';

export type ProductCardLayout = 'grid-sm' | 'grid-nl' | 'grid-lg' | 'list' | 'horizontal';

export interface ProductCardProps {
    product: IProduct;
    layout?: ProductCardLayout;
}

function ProductCard(props: ProductCardProps) {
    const { product, layout } = props;
    // const [dataa, setData] = useState();

    const [quantity, setQuantity] = useState<number>(product.unitMult);
    const [rtProduct, setrtProduct] = useState<any>();
    const { user } = useUser();
    const isUserActivated = user && !!user.cardcode;
    const cardcode = user && (user.cardcode as string);

    // const { data } = useSWR(`/api/web/productlookup?itemcodes=${product.id}&cardcode=${cardcode}&withDesc=true`, (url: any) =>
    //     fetch(url).then((res) => res.json()),
    // );

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await goldfarb.getProductLookup(product.code, cardcode, 'true');
            setrtProduct(response);
        };

        try {
            if (cardcode) {
                fetchProduct();
            }
        } catch (error) {
            console.log({ error });
        }
    }, [cardcode]);

    // const {
    //     products: [rtProduct],
    // } = dataa ?? { products: [null] };

    const containerClasses = classNames('product-card', {
        noauth: !isUserActivated,
        'product-card--layout--grid product-card--size--sm': layout === 'grid-sm',
        'product-card--layout--grid product-card--size--nl': layout === 'grid-nl',
        'product-card--layout--grid product-card--size--lg': layout === 'grid-lg',
        'product-card--layout--list': layout === 'list',
        'product-card--layout--horizontal': layout === 'horizontal',
    });
    const cartAddItem = useCartAddItem();
    // const wishlistAddItem = useWishlistAddItem();
    // const compareAddItem = useCompareAddItem();

    const addToCart = () => {
        if (typeof quantity === 'string') {
            return Promise.resolve();
        }

        return cartAddItem(rtProduct, [], quantity);
    };

    product.badges = ['new'];

    const badges: any[] = [];
    let image;
    let price;
    let features;
    let pvp;

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
                {product.code}
            </div>,
        );
    }

    if (product.id) {
        image = (
            <div className="product-card__image product-image">
                <AppLink href={url.product(product)} className="product-image__body">
                    <img
                        className="product-image__img"
                        src={`https://goldfarb.blob.core.windows.net/goldfarb/imagenes/${product.id}.jpg`}
                        alt=""
                    />
                </AppLink>
            </div>
        );
    }

    if (rtProduct && rtProduct.pvp) {
        <Fragment>
            <h5 className="d-flex" style={{ alignItems: 'baseline' }}>
                PVP:{' '}
                <div className="pvp__prices ">
                    {rtProduct.pvpCur} {rtProduct.pvp}
                </div>
            </h5>
        </Fragment>;
    }

    if (rtProduct && rtProduct.price > 0 && rtProduct.discount > 0) {
        const oldPrice = rtProduct.price;
        const newPrice = rtProduct.price - rtProduct.price * (rtProduct.discount / 100);
        price = (
            <div className="product-card__prices">
                <CurrencyFormat value={newPrice} currency={rtProduct.currency} />{' '}
                <span className="product-card__old-price">
                    <CurrencyFormat value={oldPrice} currency={rtProduct.currency} />
                </span>
            </div>
        );
    } else if (rtProduct && rtProduct.price > 0) {
        price = (
            <div className="product-card__prices">
                <CurrencyFormat value={rtProduct.price} currency={rtProduct.currency} />
            </div>
        );
    }
    if (product.pvp) {
        pvp = (
            <div className="product-card__prices">
                <CurrencyFormat value={product.pvp} currency={rtProduct.currency} />{' '}
            </div>
        );
    }

    const handleChangeQuantity = (_quantity: string | number) => {
        const quantity = typeof _quantity === 'string' ? parseFloat(_quantity) : _quantity;
        setQuantity(quantity);
    };

    return (
        <div className={containerClasses}>
            {badges.length > 0 && <div className="product-card__badges-list">{badges}</div>}
            {image}
            <div className="product-card__info">
                <div className="product-card__name">
                    <AppLink href={url.product(product)}>{product.title}</AppLink>
                </div>
                {/* <div className="product-card__rating">
                    <Rating value={product.rating} />
                    <div className=" product-card__rating-legend">{`${product.reviews} Reviews`}</div>
                </div> */}
                {features}
            </div>
            <div className="product-card__actions">
                {isUserActivated && (
                    <div className="product-card__availability">
                        Disponibilidad:
                        <span className="text-success">In Stock</span>
                    </div>
                )}
                {price}
                {pvp && <div className="product__name">{pvp}</div>}

                {isUserActivated && price && (
                    <div className="product-card__buttons">
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
                        <AsyncAction
                            action={() => addToCart()}
                            render={({ run, loading }) => (
                                <Fragment>
                                    <button
                                        type="button"
                                        onClick={run}
                                        disabled={!quantity}
                                        className={classNames('btn btn-primary product-card__addtocart', {
                                            'btn-loading': loading,
                                        })}
                                    >
                                        Agregar
                                    </button>
                                    <button
                                        type="button"
                                        disabled={!quantity}
                                        onClick={run}
                                        className={classNames('btn btn-secondary product-card__addtocart product-card__addtocart--list', {
                                            'btn-loading': loading,
                                        })}
                                    >
                                        Agregar
                                    </button>
                                </Fragment>
                            )}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default memo(ProductCard);
