// react
import { ChangeEvent, useState } from 'react';

// third-party
import Head from 'next/head';
import { toast } from 'react-toastify';
import axios from 'axios';

// application
import { useUser } from '@auth0/nextjs-auth0';
import Check9x7Svg from '../../svg/check-9x7.svg';

import AppLink from '../shared/AppLink';
import { useCart } from '../../store/cart/cartHooks';
import url from '../../services/url';
import InputNumber from '../shared/InputNumber';

function AccountPageCatalog() {
    const cart = useCart();
    const [isLoading, setIsLoading] = useState(false);
    const [columns, setColumns] = useState(2);
    const [price, setPrice] = useState(true);
    const [iva, setIva] = useState(true);
    const [multiplier, setMultiplier] = useState(1);
    const { user } = useUser();

    const handleColumnsChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setColumns(Number(event.target.value));
    };

    const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPrice(event.target.checked);
    };

    const handleIvaChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIva(event.target.checked);
    };

    const handleMultiplierChange = (_mult: string | number) => {
        const mult = Number(_mult.toString().slice(0, 3));
        setMultiplier(mult);
    };

    const handleCreateCatalog = async () => {
        setIsLoading(true);
        const res = await axios.post('/api/products/catalog', {
            email: user?.email,
            columns,
            price,
            iva,
            multiplier,
            itemcodes: cart.cartWeb.items.map((item) => item.product.code),
        });
        setIsLoading(false);
        if (res.status === 200) {
            toast.success(`Catalogo enviado a ${user?.email}`, { theme: 'colored' });
        } else {
            toast.error('Error al enviar el catalogo', { theme: 'colored' });
        }
    };

    const itemsList = cart.cartWeb.items?.map((item: any, i: number) => (
        <tr key={i}>
            <td>{item?.product.code}</td>
            <td>
                <div className="product-image">
                    <AppLink href={url.product(item.product)} className="product-image__body">
                        <img className="product-image__img" src={item.product.images[0].url} alt="" />
                    </AppLink>
                </div>
            </td>
            <td>{item.product.title}</td>
        </tr>
    ));

    return (
        <div className="card">
            <Head>
                <title>{`Estado de cuenta`}</title>
            </Head>

            <div className="card-header">
                <h5>Crear catalogo</h5>
                <br />
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="select-columns">Columnas</label>
                            <select id="select-columns" className="form-control" value={columns} onChange={handleColumnsChange}>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={6}>6</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <div className="form-check">
                                <span className="form-check-input input-check">
                                    <span className="input-check__body">
                                        <input
                                            id="price"
                                            className="input-check__input"
                                            type="checkbox"
                                            checked={price}
                                            onChange={handlePriceChange}
                                        />
                                        <span className="input-check__box" />
                                        <Check9x7Svg className="input-check__icon" />
                                    </span>
                                </span>
                                <label htmlFor="price">Precio</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <div className="form-check">
                                <span className="form-check-input input-check">
                                    <span className="input-check__body">
                                        <input
                                            id="iva"
                                            className="input-check__input"
                                            type="checkbox"
                                            checked={iva}
                                            onChange={handleIvaChange}
                                        />
                                        <span className="input-check__box" />
                                        <Check9x7Svg className="input-check__icon" />
                                    </span>
                                </span>
                                <label htmlFor="iva">IVA</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="multiplier">Multiplicador</label>
                            <InputNumber
                                id="multiplier"
                                min={0}
                                max={3}
                                step={0.1}
                                value={multiplier}
                                onChange={handleMultiplierChange}
                            ></InputNumber>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-divider" />
            <div className="card-table">
                <div className="table-responsive-sm">
                    <table>
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Imagen</th>
                                <th>Producto</th>
                            </tr>
                        </thead>
                        <tbody>{itemsList}</tbody>
                    </table>
                </div>
            </div>
            <div className="card-divider" />
            <button type="submit" className={`btn btn-primary ${isLoading ? 'btn-loading' : ''}`} onClick={handleCreateCatalog}>
                Crear catalogo
            </button>
        </div>
    );
}

export default AccountPageCatalog;
