import classNames from 'classnames';
import { useUser } from '@auth0/nextjs-auth0';
import AppLink from '../shared/AppLink';
import CurrencyFormat from '../shared/CurrencyFormat';
import Cross12Svg from '../../svg/cross-12.svg';
import AsyncAction from '../shared/AsyncAction';
import { useCart, useCartRemovePromo } from '../../store/cart/cartHooks';
import { removePromo } from '../../api/helpers/cart';

export interface IPromoProducts {
    promo: any;
}

export default function PromoCheckout({ promo }: IPromoProducts) {
    const { idPromo, description, lines } = promo;
    const { user } = useUser();
    const cart = useCart();

    const cartRemovePromo = useCartRemovePromo();

    const handleRemovePromo = async () => {
        await removePromo(idPromo, cart, user);
        await cartRemovePromo(idPromo);
    };

    const cartItems = lines.map((item: any, index: number) => {
        const image = (
            <div className="product-image">
                <AppLink className="product-image__body">
                    <img
                        className="product-image__img"
                        src={`https://goldfarb.blob.core.windows.net/goldfarb/imagenes/${item.product.itemCode}.jpg`}
                        alt=""
                    />
                </AppLink>
            </div>
        );

        return (
            <tr key={index} className="cart-table__row">
                <td className="cart-table__column cart-table__column--code" data-title="Code">
                    {item.product.itemCode}
                </td>
                <td className="cart-table__column cart-table__column--image">{image}</td>
                <td className="cart-table__column cart-table__column--product">
                    <AppLink className="cart-table__product-name">{item.product.itemName}</AppLink>
                </td>
                <td className="cart-table__column cart-table__column--price" data-title="Price">
                    <CurrencyFormat value={item.product.price} currency={item.product.currency} />
                </td>
                <td className="cart-table__column cart-table__column--quantity" data-title="Quantity">
                    {item.quantity}
                </td>
                <td className="cart-table__column cart-table__column--discount" data-title="Discount">
                    {item.product.finalDiscount ? `${item.product.finalDiscount}%` : `${item.product.discount}%`}
                </td>
                <td className="cart-table__column cart-table__column--total" data-title="Total">
                    <CurrencyFormat value={item.total} currency={item.product.currency} />
                </td>
            </tr>
        );
    });

    const removeButton = (
        <AsyncAction
            action={() => handleRemovePromo()}
            render={({ run, loading }) => {
                const classes = classNames('btn btn-light btn-sm btn-svg-icon', {
                    'btn-loading': loading,
                });

                return (
                    <button type="button" onClick={run} className={classes}>
                        <Cross12Svg />
                    </button>
                );
            }}
        />
    );

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
            <div className="promo-list-cart-description-container">
                <div className="promo-list-cart-description"> {description}</div>
                <div className="promo-list-cart-remove-container">
                    <div className="promo-list-cart-remove">Remover Promoción</div>
                    {removeButton}
                </div>
            </div>
            {content}
        </div>
    );
}
