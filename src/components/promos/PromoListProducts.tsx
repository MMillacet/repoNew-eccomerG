import { useState } from 'react';
import { IProductPromoSelected } from '../../interfaces/product';
import { IPromo } from '../../interfaces/promo';
import ProductPromoCard from '../shared/ProductPromoCard';

export interface IPromoProducts {
    productsSelected: IProductPromoSelected[];
    setView: Function;
    setProductsSelected: Function;
    promo: IPromo;
}

export default function PromoListProducts({ productsSelected, setView, promo, setProductsSelected }: IPromoProducts) {
    const [error, setError] = useState<string>('');

    const handleAddItem = ({ product, quantity }: IProductPromoSelected) => {
        const newProductsSelected = productsSelected.map((item: IProductPromoSelected) => {
            if (item.product.itemCode === product.itemCode) {
                return { product: item.product, quantity };
            }

            return item;
        });
        setProductsSelected(newProductsSelected);
    };

    const handleCheckPromo = () => {
        if (promo.u_Tipo === 'MO') {
            let totalPrice: number = 0;
            productsSelected.forEach((item: IProductPromoSelected) => {
                if (item.quantity > 0) {
                    totalPrice += item.product.price * item.quantity;
                }
            });
            if (totalPrice > promo.u_Cantidad) {
                setView('view2');
            } else {
                setError('Condición de promoción no alcanzada');
            }
        } else if (promo.u_Tipo === 'CA') {
            let productsQuantity: number = 0;
            productsSelected.forEach((item: IProductPromoSelected) => {
                productsQuantity += item.quantity;
            });
            if (productsQuantity > promo.u_Cantidad) {
                setView('view2');
            } else {
                setError('Condición de promoción no alcanzada');
            }
        }
    };
    return (
        <div>
            <div className="products-list__body row promo-product-row">
                {productsSelected.map((item: IProductPromoSelected, index: number) => (
                    <div key={index} className="products-list__item col-12 col-sm-6 col-md-6 col-lg-4 ">
                        <ProductPromoCard productQuantity={item.quantity} product={item.product} handleAddItem={handleAddItem} />
                    </div>
                ))}
            </div>
            <div className="product-promo-btn-sg">
                <button onClick={handleCheckPromo} className="btn btn-primary btn-lg">
                    Verifica tu seleccion
                </button>
            </div>
            <div className="condition-error"> {error}</div>
        </div>
    );
}
