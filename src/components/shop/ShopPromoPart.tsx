import { Fragment } from 'react';
import AppLink from '../shared/AppLink';
import CurrencyFormat from '../shared/CurrencyFormat';
import { IPromoWeb, IPromWebLine } from '../../interfaces/promo';

export interface IPromoProducts {
    promo: IPromoWeb;
}

export default function PromoCheckout({ promo }: IPromoProducts) {
    const { idPromo, description, lines } = promo;

    const getPriceItem = (product: IPromWebLine) => {
        let price = (product.price - product.price * (product.finalDiscount / 100)) * product.quantity;
        if (product.factorQty) {
            price *= product.factorQty;
        }
        return price;
    };

    const cartItems = lines.map((product: IPromWebLine, index: number) => {
        const image = (
            <div className="product-image">
                <AppLink className="product-image__body">
                    <img
                        className="product-image__img"
                        src={`https://goldfarb.blob.core.windows.net/goldfarb/imagenes/${product.itemCode}.jpg`}
                        alt=""
                    />
                </AppLink>
            </div>
        );

        return (
            <tr key={index} className="cart-table__row">
                <td className="cart-table__column cart-table__column--code" data-title="Code">
                    {product.itemCode}
                </td>
                <td className="cart-table__column cart-table__column--image">{image}</td>
                <td className="cart-table__column cart-table__column--product">
                    <AppLink className="cart-table__product-name">{product.itemName}</AppLink>
                </td>
                <td className="cart-table__column cart-table__column--price" data-title="Price">
                    <CurrencyFormat value={product.price} currency={product.currency} />
                </td>
                <td className="cart-table__column cart-table__column--quantity" data-title="Quantity">
                    {product.quantity}
                </td>
                <td className="cart-table__column cart-table__column--discount" data-title="Discount">
                    {product.finalDiscount ? `${product.finalDiscount}%` : ''}
                </td>
                <td className="cart-table__column cart-table__column--total" data-title="Total">
                    <CurrencyFormat value={getPriceItem(product)} currency={product.currency} />
                </td>
            </tr>
        );
    });

    const content = (
        <table className="cart__table cart-table">
            <thead className="cart-table__head">
                <tr className="cart-table__row">
                    <th className="cart-table__column cart-table__column--code">Codigo</th>
                    <th className="cart-table__column cart-table__column--image">Imagen</th>
                    <th className="cart-table__column cart-table__column--product">Producto</th>
                    <th className="cart-table__column cart-table__column--price">Precio</th>
                    <th className="cart-table__column cart-table__column--quantity">Cantidad</th>
                    <th className="cart-table__column cart-table__column--discount">Descuento</th>
                    <th className="cart-table__column cart-table__column--total">Total</th>
                </tr>
            </thead>
            <tbody className="cart-table__body">{cartItems}</tbody>
        </table>
    );

    return (
        <div className="promo-list-cart">
            <div className="promo-list-cart-title">Promoción {idPromo}</div>
            <div> {description}</div>
            {content}
        </div>
    );
}
