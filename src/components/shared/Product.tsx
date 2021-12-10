// react
import { Fragment, useState } from 'react';

// third-party
import classNames from 'classnames';

// application
import AppLink from './AppLink';
import AsyncAction from './AsyncAction';
import Compare16Svg from '../../svg/compare-16.svg';
import CurrencyFormat from './CurrencyFormat';
import InputNumber from './InputNumber';
import ProductGallery from './ProductGallery';
import Rating from './Rating';
import Wishlist16Svg from '../../svg/wishlist-16.svg';
import { IProduct } from '../../interfaces/product';
import { useCompareAddItem } from '../../store/compare/compareHooks';
import { useWishlistAddItem } from '../../store/wishlist/wishlistHooks';
import { useCartAddItem } from '../../store/cart/cartHooks';
import useRealTimeProduct from '../../hooks/useRealTimeProduct';

export type ProductLayout = 'standard' | 'sidebar' | 'columnar' | 'quickview';

export interface ProductProps {
    product: IProduct;
    layout: ProductLayout;
}

function Product(props: ProductProps) {
    const { product, layout } = props;
    const { realTimeProduct } = useRealTimeProduct(product?.id);

    const [quantity, setQuantity] = useState<number | string>(1);
    const cartAddItem = useCartAddItem();
    const wishlistAddItem = useWishlistAddItem();
    const compareAddItem = useCompareAddItem();

    const addToCart = () => {
        if (typeof quantity === 'string') {
            return Promise.resolve();
        }

        return cartAddItem(product, [], quantity);
    };

    let prices;

    if (product.compareAtPrice) {
        prices = (
            <Fragment>
                <span className="product__new-price">
                    <CurrencyFormat value={realTimeProduct.price} currency={realTimeProduct.currency} />
                </span>{' '}
                <span className="product__old-price">
                    <CurrencyFormat value={product.compareAtPrice} currency={product.currency} />
                </span>
            </Fragment>
        );
    } else {
        prices = <CurrencyFormat value={realTimeProduct.price} currency={product.currency} />;
    }

    return (
        <div className={`product product--layout--${layout}`}>
            <div className="product__content">
                <ProductGallery layout={layout} images={product.images} />

                <div className="product__info">
                    <div className="product__wishlist-compare">
                        <AsyncAction
                            action={() => wishlistAddItem(product)}
                            render={({ run, loading }) => (
                                <button
                                    type="button"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Wishlist"
                                    onClick={run}
                                    className={classNames('btn btn-sm btn-light btn-svg-icon', {
                                        'btn-loading': loading,
                                    })}
                                >
                                    <Wishlist16Svg />
                                </button>
                            )}
                        />
                        <AsyncAction
                            action={() => compareAddItem(product)}
                            render={({ run, loading }) => (
                                <button
                                    type="button"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Compare"
                                    onClick={run}
                                    className={classNames('btn btn-sm btn-light btn-svg-icon', {
                                        'btn-loading': loading,
                                    })}
                                >
                                    <Compare16Svg />
                                </button>
                            )}
                        />
                    </div>
                    <h1 className="product__name">{product.title}</h1>
                    <div className="product__rating">
                        <div className="product__rating-stars">
                            <Rating value={product.rating} />
                        </div>
                        <div className="product__rating-legend">
                            <AppLink href="/">{`${product.reviews} Reviews`}</AppLink>
                            <span>/</span>
                            <AppLink href="/">Write A Review</AppLink>
                        </div>
                    </div>
                    <div className="product__description">
                        {realTimeProduct?.description || product.description}
                    </div>
                    <ul className="product__features">
                        <li>Speed: 750 RPM</li>
                        <li>Power Source: Cordless-Electric</li>
                        <li>Battery Cell Type: Lithium</li>
                        <li>Voltage: 20 Volts</li>
                        <li>Battery Capacity: 2 Ah</li>
                    </ul>
                    <ul className="product__meta">
                        <li className="product__meta-availability">
                            Disponibilidad:{' '}
                            {realTimeProduct?.hasStock ? (
                                <span className="text-success">En stock</span>
                            ) : (
                                <span className="text-muted">Sin stock</span>
                            )}
                        </li>
                        <li>
                            Brand: <AppLink href="/">{product.brand?.name}</AppLink>
                        </li>
                        <li>SKU: {product.id}</li>
                    </ul>
                </div>

                <div className="product__sidebar">
                    <div className="product__availability">
                        Disponibilidad: <span className="text-success">En stock</span>
                    </div>

                    {realTimeProduct && <div className="product__prices">{prices}</div>}

                    <form className="product__options">
                        <div className="form-group product__option">
                            <label htmlFor="product-quantity" className="product__option-label">
                                Cantidad
                            </label>
                            <div className="product__actions">
                                <div className="product__actions-item">
                                    <InputNumber
                                        id="product-quantity"
                                        aria-label="Quantity"
                                        className="product__quantity"
                                        size="lg"
                                        min={product.unitMult}
                                        step={product.unitMult}
                                        value={quantity}
                                        onChange={setQuantity}
                                    />
                                </div>
                                <div className="product__actions-item product__actions-item--addtocart">
                                    <AsyncAction
                                        action={() => addToCart()}
                                        render={({ run, loading }) => (
                                            <button
                                                type="button"
                                                onClick={run}
                                                disabled={!quantity}
                                                className={classNames('btn btn-primary btn-lg', {
                                                    'btn-loading': loading,
                                                })}
                                            >
                                                Agregar al carro
                                            </button>
                                        )}
                                    />
                                </div>
                                <div className="product__actions-item product__actions-item--wishlist">
                                    <AsyncAction
                                        action={() => wishlistAddItem(product)}
                                        render={({ run, loading }) => (
                                            <button
                                                type="button"
                                                data-toggle="tooltip"
                                                title="Wishlist"
                                                onClick={run}
                                                className={classNames(
                                                    'btn btn-secondary btn-svg-icon btn-lg',
                                                    {
                                                        'btn-loading': loading,
                                                    },
                                                )}
                                            >
                                                <Wishlist16Svg />
                                            </button>
                                        )}
                                    />
                                </div>
                                <div className="product__actions-item product__actions-item--compare">
                                    <AsyncAction
                                        action={() => compareAddItem(product)}
                                        render={({ run, loading }) => (
                                            <button
                                                type="button"
                                                data-toggle="tooltip"
                                                title="Compare"
                                                onClick={run}
                                                className={classNames(
                                                    'btn btn-secondary btn-svg-icon btn-lg',
                                                    {
                                                        'btn-loading': loading,
                                                    },
                                                )}
                                            >
                                                <Compare16Svg />
                                            </button>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="product__footer"></div>
            </div>
        </div>
    );
}

export default Product;
