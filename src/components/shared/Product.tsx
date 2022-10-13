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
    const [rtProduct, setrtProduct] = useState<any>();
    const [quantity, setQuantity] = useState<number>(product.unitMult);

    const { user } = useUser();
    const isUserActivated = user && !!user.cardcode;
    const cardcode = user && (user.cardcode as string);

    // const cardcode = user && (user.cardcode as string);
    // // http://app.goldfarb.com.uy/PruebasMain/api/web/productlookup?itemcodes=3452&cardcode=4001335&withDesc=true
    // const { data } = useSWR(`/api/web/productlookup?itemcodes=${product.id}&cardcode=${cardcode}&withDesc=true`, (url: any) =>
    //     fetch(url).then((res) => res.json()),
    // );

    // const {
    //     products: [rtProduct],
    // } = data ?? { products: [null] };

    const fetchPrpduct = () => {
        const aux = async () => {
            const data = await fetch(
                `http://app.goldfarb.com.uy/PruebasMain/api/web/productlookup?itemcodes=${product.code}&cardcode=${cardcode}&withDesc=true`,
            ).then((res) => res.json());
            setrtProduct(data.products[0]);
        };
        aux();
    };

    useEffect(() => {
        try {
            if (cardcode) {
                fetchPrpduct();
            }
        } catch (error) {
            console.log({ error });
        }
    }, [cardcode]);

    const cartAddItem = useCartAddItem();
    const wishlistAddItem = useWishlistAddItem();
    const compareAddItem = useCompareAddItem();

    const addToCart = () => {
        if (typeof quantity === 'string') {
            return Promise.resolve();
        }

        return cartAddItem(rtProduct, [], quantity);
    };

    const handleChangeQuantity = (_quantity: string | number) => {
        const quantity = typeof _quantity === 'string' ? parseFloat(_quantity) : _quantity;
        setQuantity(quantity);
    };

    let prices;

    if (rtProduct && rtProduct.price > 0) {
        if (rtProduct.discount > 0) {
            const oldPrice = rtProduct.price;
            const newPrice = rtProduct.price - rtProduct.price * (rtProduct.discount / 100);

            prices = (
                <Fragment>
                    <CurrencyFormat value={newPrice} currency={rtProduct?.currency} />
                    <span className="product__old-price" style={{ marginLeft: '15px' }}>
                        <CurrencyFormat value={oldPrice} currency={rtProduct.currency} />
                    </span>
                    <span className="product__discount">{`(Descuento del ${rtProduct.discount}%)`}</span>
                </Fragment>
            );
        } else {
            prices = <CurrencyFormat value={rtProduct?.price} currency={rtProduct?.currency} />;
        }
    }

    let pvp;

    if (rtProduct && rtProduct.pvp) {
        pvp = (
            <Fragment>
                <h5 className="d-flex" style={{ alignItems: 'baseline' }}>
                    PVP:{' '}
                    <div className="pvp__prices ">
                        {rtProduct.pvpCur}
                        {rtProduct.pvp}
                    </div>
                </h5>
            </Fragment>
        );
    }

    return (
        <div className={`product product--layout--${layout}`}>
            <div className="product__content">
                <ProductGallery
                    documents={rtProduct?.documents ?? []}
                    layout={layout}
                    images={rtProduct?.images ?? []}
                    videos={rtProduct?.videoLinks ?? []}
                />

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
                    <h1 className="product__name">{rtProduct?.title}</h1>
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

                    <div className="product__description">
                        {rtProduct &&
                            rtProduct.description &&
                            rtProduct.description.split('<br/>').map((line: string, i: number) => {
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
                            })}
                    </div>
                    <ul className="product__meta">
                        {isUserActivated && (
                            <li className="product__meta-availability">
                                Disponibilidad:{' '}
                                {rtProduct?.hasStock ? (
                                    <span className="text-success">En stock</span>
                                ) : (
                                    <span className="text-muted">Sin stock</span>
                                )}
                            </li>
                        )}
                        <li>
                            Marca: <AppLink href="/">{rtProduct?.brand}</AppLink>
                        </li>
                        <li>
                            Unidad venta: <AppLink href="/">{rtProduct?.unitsPerItem}</AppLink>
                        </li>
                        <li>Codigo: {product?.id}</li>
                    </ul>
                </div>

                <div className="product__sidebar">
                    <div className="product__availability">
                        Disponibilidad: <span className="text-success">En stock</span>
                    </div>

                    {rtProduct && <div className="product__prices">{prices}</div>}

                    {pvp && <div className="product__name">{pvp}</div>}

                    {isUserActivated && rtProduct && rtProduct.price > 0 && (
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
                                            min={rtProduct?.unitMult}
                                            step={rtProduct?.unitMult}
                                            value={quantity}
                                            onChange={(quantity) => handleChangeQuantity(quantity)}
                                        />
                                    </div>
                                    <div style={{ marginLeft: '20px' }} className="product__actions-item product__actions-item--addtocart">
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
                                <br />
                                <label htmlFor="product-tax" className="product__option-label">
                                    Impuestos: {rtProduct?.tax}%
                                </label>

                                {rtProduct?.documents && rtProduct.documents.length > 0 && (
                                    <Fragment>
                                        <br />
                                        <br />
                                        <label htmlFor="product-docs" className="product__option-label">
                                            Documentos
                                        </label>
                                        <ul className="product__meta">
                                            {rtProduct.documents.map((document: string, i: number) => (
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
