import { useState } from 'react';
import { IProduct } from '../../interfaces/product';
import ProductPromoCard from '../shared/ProductPromoCard';
import { ItemsSelected } from './Promo';

export interface IPromoProducts {
    products: IProduct[];
    productsSelected: any;
    setView: Function;
    setProductsSelected: Function;
    promo: any;
}

export default function PromoListProducts({ products, productsSelected, setView, promo, setProductsSelected }: IPromoProducts) {
    const [error, setError] = useState<string>('');

    const handleAddItem = ({ product, quantity }: ItemsSelected) => {
        let productInside: any;
        if (productsSelected.length > 0) {
            productInside = productsSelected.find((item: any) => item.product.itemCode === product.itemCode);
        }
        if (productInside) {
            const newProductsSelected: any[] = productsSelected.map((item: any) => {
                if (item.product.itemCode === productInside.product.itemCode) {
                    return {
                        product,
                        quantity,
                    };
                }
                return item;
            });
            setProductsSelected(newProductsSelected);
        } else {
            setProductsSelected([...productsSelected, { product, quantity }]);
        }
    };

    const handleCheckPromo = () => {
        let productsQuantity: number = 0;
        productsSelected.forEach((item: any) => {
            productsQuantity += item.quantity;
        });
        console.log({ a: productsQuantity, b: promo.u_Cantidad });
        if (productsQuantity > promo.u_Cantidad) {
            setView('view2');
        } else {
            setError('Condición de promoción no alcanzada');
        }
    };
    return (
        <div>
            <div className="products-list__body row promo-product-row">
                {products.map((product, index) => (
                    <div key={index} className="products-list__item col-12 col-sm-6 col-md-6 col-lg-4 ">
                        <ProductPromoCard product={product} handleAddItem={handleAddItem} />
                    </div>
                ))}
            </div>
            <div className="product-promo-btn-sg">
                <button onClick={handleCheckPromo} className="btn btn-primary btn-lg">
                    {' '}
                    Seguir a carro de compras
                </button>
            </div>
            <div className="condition-error"> {error}</div>
        </div>
    );
}
