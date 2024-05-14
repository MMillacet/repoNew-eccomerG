 // react
 import { Fragment } from 'react';

 // third-party
 import classNames from 'classnames';
 
 // application
 import { useUser } from '@auth0/nextjs-auth0';
 import AppLink from '../shared/AppLink';
 import AsyncAction from '../shared/AsyncAction';
 import Cart20Svg from '../../svg/cart-20.svg';
 import Cross10Svg from '../../svg/cross-10.svg';
 import CurrencyFormat from '../shared/CurrencyFormat';
 import Indicator from './Indicator';
 import url from '../../services/url';
 import { useCart, useCartRemoveItem, useCartRemovePromo } from '../../store/cart/cartHooks';
 import { saveRemoveItem } from '../../api/helpers/cart';
 import { CartItem } from '../../store/cart/cartTypes';
 
 const currencies = ['$', 'U$'];
 
 function IndicatorCart() {
     const cart = useCart();
     const { user } = useUser();
 
     const cartRemoveItem = useCartRemoveItem();
     const cartRemovePromo = useCartRemovePromo();
     let dropdown;
     let totals;
 
     const handleRemoveItem = async (item: CartItem) => {
         if (!(await saveRemoveItem(cart, item.product, user))) return Promise.resolve();
 
         return cartRemoveItem(item.id);
     };
 
    /* const getItemsCount = (): number => {
         let promoItemsCount: number = 0;
         cart.cartPromo?.promos.forEach((promo) => {
             promo.lines.forEach((item) => {
                 promoItemsCount += item.quantity;
             });
         });
         return promoItemsCount + cart.cartWeb?.quantity;
     };
     */
     const getItemsCount = (): number => {
        // Calcular la cantidad total de productos únicos en el carrito
        const uniqueWebItemsCount = cart.cartWeb?.items.length || 0;
        const uniquePromoItemsCount = cart.cartPromo?.promos.reduce((acc, promo) => acc + promo.lines.length, 0) || 0;
    
        // Sumar las cantidades de productos únicos en el carrito web y en las promociones
        return uniqueWebItemsCount + uniquePromoItemsCount;
    };
 
     if (cart.cartWeb?.totals.$.length > 0) {
         totals = currencies.map((currency: string) => (
             <Fragment key={currency}>
                 <tr>
                     <th>Total {currency}</th>
                     <td>
                         <CurrencyFormat value={cart.cartWeb.total[currency] + cart.cartPromo.total[currency]} currency={currency} />
                     </td>
                 </tr>
             </Fragment>
         ));
     }
 
     const items = cart.cartWeb?.items.map((item) => {
         let options;
         let image;
 
         if (item.options) {
             options = (
                 <ul className="dropcart__product-options">
                     {item.options.map((option, index) => (
                         <li key={index}>{`${option.optionTitle}: ${option.valueTitle}`}</li>
                     ))}
                 </ul>
             );
         }
 
         if (item.product.images.length) {
             image = (
                 <div className="product-image dropcart__product-image">
                     <AppLink href={url.product(item.product)} className="product-image__body">
                         <img className="product-image__img" src={item.product.images[0].url} alt="" />
                     </AppLink>
                 </div>
             );
         }
 
         const removeButton = (
             <AsyncAction
                 action={() => handleRemoveItem(item)}
                 render={({ run, loading }) => {
                     const classes = classNames('dropcart__product-remove btn btn-light btn-sm btn-svg-icon', {
                         'btn-loading': loading,
                     });
 
                     return (
                         <button type="button" onClick={run} className={classes}>
                             <Cross10Svg />
                         </button>
                     );
                 }}
             />
         );
 
         return (
             <div key={item.id} className="dropcart__product">
                 {image}
                 <div className="dropcart__product-info">
                     <div className="dropcart__product-name">
                         <AppLink href={url.product(item.product)}>{item.product.name}</AppLink>
                     </div>
                     {options}
                     <div className="dropcart__product-meta">
                         <span className="dropcart__product-quantity">{item.quantity}</span>
                         {' × '}
                         <span className="dropcart__product-price">
                             <CurrencyFormat value={item.price} currency={item.product.currency} />
                         </span>
                     </div>
                 </div>
                 {removeButton}
             </div>
         );
     });
 
     const itemsPromo = cart.cartPromo?.promos.map((promo) => {
         const items = promo.lines.map((item) => {
             const image = (
                 <div className="product-image dropcart__product-image">
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
                 <div key={item.id} className="dropcart__product">
                     {image}
                     <div className="dropcart__product-info">
                         <div className="dropcart__product-name">
                             <AppLink href={url.product(item.product)}>{item.product.name}</AppLink>
                         </div>
                         <div className="dropcart__product-meta">
                             <span className="dropcart__product-quantity">{item.quantity}</span>
                             {' × '}
                             <span className="dropcart__product-price">
                                 <CurrencyFormat value={item.price} currency={item.product.currency} />
                             </span>
                         </div>
                     </div>
                 </div>
             );
         });
 
         const removeButton = (
             <AsyncAction
                 action={() => cartRemovePromo(promo.idPromo)}
                 render={({ run, loading }) => {
                     const classes = classNames('dropcart__promo-remove btn btn-light btn-sm btn-svg-icon', {
                         'btn-loading': loading,
                     });
 
                     return (
                         <button type="button" onClick={run} className={classes}>
                             <Cross10Svg />
                         </button>
                     );
                 }}
             />
         );
 
         return (
             <div key={promo.idPromo}>
                 <div className="dropcart__promo-remove-container">
                     <div className="promo-list-cart-remove">Remover Promoción</div>
                     {removeButton}
                 </div>
                 {items}
             </div>
         );
     });
 
     if (cart.cartWeb?.quantity || cart.cartPromo?.promos.length > 0) {
         dropdown = (
             <div className="dropcart">
                 <div className="dropcart__products-list">
                     {items}
                     {itemsPromo}
                 </div>
 
                 <div className="dropcart__totals">
                     <table>
                         <tbody>{totals}</tbody>
                     </table>
                 </div>
 
                 <div className="dropcart__buttons">
                     <AppLink href={url.cart()} className="btn btn-secondary">
                         Ver Carro
                     </AppLink>
                     <AppLink href={url.checkout()} className="btn btn-primary">
                         Comprar
                     </AppLink>
                 </div>
             </div>
         );
     } else {
         dropdown = (
             <div className="dropcart_empty">
                 <div className="dropcart__buttons">
                     <AppLink href={url.cart()} className="btn btn-secondary">
                         Ver Carro
                     </AppLink>
                 </div>
             </div>
         );
     }
 
     return <Indicator url="/shop/cart" dropdown={dropdown} value={getItemsCount()} icon={<Cart20Svg />} />;
 }
 
 export default IndicatorCart;