// react
import { memo, useState } from 'react';

// third-party
import { useUser } from '@auth0/nextjs-auth0';
import classNames from 'classnames';

// application
import AppLink from './AppLink';
import CurrencyFormat from './CurrencyFormat';
import InputNumber from './InputNumber';
import { IPromoLine } from '../../interfaces/promo';

export type ProductCardLayout = 'grid-sm' | 'grid-nl' | 'grid-lg' | 'list' | 'horizontal';

export interface ProductCardProps {
    product: IPromoLine;
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

    let image;
    let price;
    if (product.itemCode) {
        image = (
            <div className="product-card__image product-image">
                <AppLink className="product-image__body">
                    <img
                        className="product-image__img"
                        src={`https://goldfarb.blob.core.windows.net/goldfarb/imagenes/${product.itemCode}.jpg`}
                        alt=""
                    />
                </AppLink>
            </div>
        );
    }

    if (product && product.price > 0 && product.finalDiscount > 0) {
        let oldPrice = product.price;
        let newPrice = product.price - product.price * (product.finalDiscount / 100);
        if (product.factorQty > 1) {
            oldPrice *= product.factorQty;
            newPrice *= product.factorQty;
            price = (
                <div className="product-card__prices row">
                    {/* <div className="col-12 promo-prod-box">Precio por caja de {product.factorQty}</div> */}
                    <div className="col-12 d-flex">
                        <div className="row ">
                            <span className="col-12" style={{ color: '#b3b3b3' }}>
                                <CurrencyFormat value={oldPrice} currency={product.currency} />
                            </span>

                            <div className="col-12 d-flex margin-t">
                                {product.discPrcnt > 0 && <div className="product-card__discPrcnt">- {product.discPrcnt}%</div>}
                                {product.u_Porcentaje > 0 && <div className="product-card__u_Porcentaje ">- {product.u_Porcentaje}%</div>}
                            </div>
                        </div>
                    </div>
                    <span className="col-12 margin-t promo-products__price-old">
                        <CurrencyFormat value={newPrice} currency={product.currency} />
                    </span>
                </div>
            );
        } else {
            price = (
                <div className="product-card__prices row">
                    <div className="col-12 d-flex">
                        <div className="row">
                            <span className="col-12" style={{ color: '#b3b3b3' }}>
                                <CurrencyFormat value={oldPrice} currency={product.currency} />
                            </span>
                            <div className="col-12 d-flex margin-t">
                                {product.discPrcnt > 0 && <div className="product-card__discPrcnt ">- {product.discPrcnt}%</div>}
                                {product.u_Porcentaje > 0 && <div className="product-card__u_Porcentaje ">- {product.u_Porcentaje}%</div>}
                            </div>
                        </div>
                    </div>
                    <span className="col-12 margin-t promo-products__price-old">
                        <CurrencyFormat value={newPrice} currency={product.currency} />
                    </span>
                </div>
            );
        }
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
            <div className="product-card__badges-list">
                <div key="new" className="product-card__badge product-card__badge--new">
                    {product.itemCode}
                </div>
                ,
            </div>

            {image}
            <div className="product-card__info">
                <div className="product-card__name">
                    <AppLink href={`/shop/products/${product.itemCode}`}>{product.itemName}</AppLink>
                </div>
            </div>
            {isUserActivated && (
                <div className=" product-card__actions row promo-card-row">
                    <div className="product-promo-price col-12 promo-product-price">{price}</div>
                    <div className="justify-content-c promo-product__buttons col-5 col-sm-12 col-md-12  col-lg-12 col-xl-12 ">
                        <div className="product__actions-item">
                            <InputNumber
                                id="product-quantity"
                                aria-label="Quantity"
                                className="product__quantity"
                                size="lg"
                                min={0}
                                value={quantity}
                                step={product.salPackUn}
                                onChange={(quantity) => handleChangeQuantity(quantity)}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default memo(ProductPromoCard);
