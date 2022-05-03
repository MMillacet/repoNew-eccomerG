// react
import { Fragment, useEffect, useState } from 'react';

// third-party
import classNames from 'classnames';
import { useUser } from '@auth0/nextjs-auth0';

// application
import AppLink from './AppLink';
import AsyncAction from './AsyncAction';
import Compare16Svg from '../../svg/compare-16.svg';
import CurrencyFormat from './CurrencyFormat';
import InputNumber from './InputNumber';
import ProductGallery from './ProductGallery';
// import Rating from './Rating';
import Wishlist16Svg from '../../svg/wishlist-16.svg';
import { IProduct } from '../../interfaces/product';
import { useCompareAddItem } from '../../store/compare/compareHooks';
import { useWishlistAddItem } from '../../store/wishlist/wishlistHooks';
import { useCartAddItem } from '../../store/cart/cartHooks';

export type ProductLayout = 'standard' | 'sidebar' | 'columnar' | 'quickview';

export interface ProductProps {
    product: IProduct;
    layout: ProductLayout;
}

function Product(props: ProductProps) {
    const { product, layout } = props;

    // const { realTimeProduct } = useRealTimeProduct(product?.id);

    const [quantity, setQuantity] = useState<number>(product.unitMult);
    const [rtProduct, setRtProduct] = useState<IProduct>(product);
    const [description, setDescription] = useState<JSX.Element[]>();

    const { user } = useUser();
    const isUserActivated = user && !!user.cardcode;

    const rtProductChanged = (product: IProduct) => {
        setRtProduct(product);

        const d = product.description.split('<br/>').map((line, i) => {
            if (line.startsWith('-') || line.startsWith('*')) {
                return (
                    <li className="product_description_item" key={i}>
                        {line.substring(1)}
                    </li>
                );
            }
            return (
                <div key={i} className="product__description">
                    {line}
                </div>
            );
        });

        setDescription(d);
    };

    useEffect(() => {
        const realTimeProductRequest = async () => {
            const p = await (await fetch(`/api/products/${product.code}?desc=true`)).json();
            rtProductChanged(p);
        };

        realTimeProductRequest();
    }, [product]);

    const cartAddItem = useCartAddItem();
    const wishlistAddItem = useWishlistAddItem();
    const compareAddItem = useCompareAddItem();

    const addToCart = () => {
        if (typeof quantity === 'string') {
            return Promise.resolve();
        }

        return cartAddItem(product, [], quantity);
    };

    const handleChangeQuantity = (_quantity: string | number) => {
        const quantity = typeof _quantity === 'string' ? parseFloat(_quantity) : _quantity;
        setQuantity(quantity);
    };

    let prices;

    if (rtProduct && rtProduct.price > 0) {
        if (product.compareAtPrice) {
            prices = (
                <Fragment>
                    <span className="product__new-price">
                        <CurrencyFormat value={rtProduct?.price} currency={rtProduct?.currency} />
                    </span>{' '}
                    <span className="product__old-price">
                        <CurrencyFormat value={product.compareAtPrice} currency={product.currency} />
                    </span>
                </Fragment>
            );
        } else {
            prices = <CurrencyFormat value={rtProduct?.price} currency={rtProduct?.currency} />;
        }
    }

    // let description;
    // if (rtProduct && rtProduct.description) {
    //     description = rtProduct.description.split('<br/>').map((line, i) => {
    //         if (line.startsWith('-') || line.startsWith('*')) {
    //             return <li key={i}>{line.substring(1)}</li>;
    //         }

    //         return (
    //             <Fragment key={i}>
    //                 {line}
    //                 {/* <br /> */}
    //             </Fragment>
    //         );
    //     });
    // }

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
                    {/* <div className="product__rating">
                        <div className="product__rating-stars">
                            <Rating value={product.rating} />
                        </div>
                        <div className="product__rating-legend">
                            <AppLink href="/">{`${product.reviews} Reviews`}</AppLink>
                            <span>/</span>
                            <AppLink href="/">Write A Review</AppLink>
                        </div>
                    </div> */}

                    <div className="product__description">{description}</div>
                    <ul className="product__meta">
                        <li className="product__meta-availability">
                            Disponibilidad:{' '}
                            {rtProduct?.hasStock ? (
                                <span className="text-success">En stock</span>
                            ) : (
                                <span className="text-muted">Sin stock</span>
                            )}
                        </li>
                        <li>
                            Marca: <AppLink href="/">{product.brand?.name}</AppLink>
                        </li>
                        <li>Codigo: {product?.id}</li>
                    </ul>
                </div>

                <div className="product__sidebar">
                    <div className="product__availability">
                        Disponibilidad: <span className="text-success">En stock</span>
                    </div>

                    {rtProduct && <div className="product__prices">{prices}</div>}

                    {isUserActivated && (
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
                                            onChange={(quantity) => handleChangeQuantity(quantity)}
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
                                                    Agregar
                                                </button>
                                            )}
                                        />
                                    </div>
                                </div>
                                {product.documents.length > 0 && (
                                    <Fragment>
                                        <br />
                                        <br />
                                        <label htmlFor="product-docs" className="product__option-label">
                                            Documentos
                                        </label>
                                        <ul className="product__meta">
                                            {product.documents.map((document, i) => (
                                                <li key={i}>
                                                    <AppLink href={`${document}`}>{`Documento${i + 1}`}</AppLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </Fragment>
                                )}
                            </div>
                        </form>
                    )}
                </div>

                <div className="product__footer"></div>
            </div>
        </div>
    );
}

export default Product;
