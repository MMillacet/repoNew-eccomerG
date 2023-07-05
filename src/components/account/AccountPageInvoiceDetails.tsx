// react
import { Fragment, useState } from 'react';

// third-party
import Head from 'next/head';

// application
import AppLink from '../shared/AppLink';
import url from '../../services/url';
import CurrencyFormat from '../shared/CurrencyFormat';
import { IGoldfarbInvoice, IGoldfarbInvoiceLine } from '../../interfaces/invoice';
import axios from 'axios';
import { toast } from 'react-toastify';

export interface AccountInvoiceDetailProps {
    invoice: IGoldfarbInvoice;
    isReturn: boolean;
}

export default function AccountPageInvoiceDetails(props: AccountInvoiceDetailProps) {
    const { invoice, isReturn } = props;

    const title = isReturn ? 'Nota de credito' : 'Factura';

    const invoiceLines = invoice.lines.map((line: IGoldfarbInvoiceLine) => (
        <tr key={line.itemcode}>
            <td>{line.itemcode}</td>
            <td>{line.description}</td>
            <td>{line.quantity}</td>
            <td>{line.currency}</td>
            <td>{<CurrencyFormat value={line.price} currency={line.currency} />}</td>
            <td>{`${line.discount} %`}</td>
            <td>{<CurrencyFormat value={line.total} currency={line.currency} />}</td>
        </tr>
    ));    
    const [loading, setLoading] = useState(false);
    const SendCFE = async (/* event: FormEvent<HTMLButtonElement> */) => {        
        setLoading(true);        
        try {
            const res = await axios.post('/api/documents/send', { invoice });
            console.log(res);            
            toast.success(`Copia enviada correctamente`, { theme: 'colored' });            
        } catch (error) {            
            toast.error('Hubo un problema para procesar su solicitud. Por favor vuelva a intentar.', { theme: 'colored' });
        }
        setLoading(false);        
    };

    return (
        <Fragment>
            <Head>
                <title>{title}</title>
            </Head>

            <div className="card">
                <div className="order-header">
                    <div className="order-header__actions">
                        <AppLink href={url.accountStatus()} className="btn btn-xs btn-secondary">
                            Volver a estado de cuenta
                        </AppLink><br/>
                        <button  onClick={SendCFE} className={`btn  btn-xs btn-primary ${loading ? 'btn-loading' : ''}`} disabled={loading}>
                            Enviar copia
                        </button>                        
                    </div>
                    <h5 className="order-header__title">{title}</h5>
                    <div className="order-header__subtitle">
                        Cliente: <mark className="order-header__status">{invoice.cardName}</mark>
                    </div>
                    <div className="order-header__subtitle">
                        Codigo: <mark className="order-header__status">{invoice.cardName}</mark>
                    </div>
                    <div className="order-header__subtitle">
                        Folio:{' '}
                        <mark className="order-header__status">
                            {invoice.folioPref} {invoice.folioNum}
                        </mark>
                    </div>
                    <div className="order-header__subtitle">
                        Fiscal: <mark className="order-header__status">{invoice.address1}</mark>
                    </div>
                    <div className="order-header__subtitle">
                        Entrega: <mark className="order-header__status">{invoice.address2}</mark>
                    </div>
                    <div className="order-header__subtitle">
                        Fecha: <mark className="order-header__status">{invoice.docDate}</mark>
                    </div>
                    <div className="order-header__subtitle">
                        Moneda: <mark className="order-header__status">{invoice.currency}</mark>
                    </div>
                </div>
                <div className="card-divider" />
                <div className="card-table">
                    <div className="table-responsive-sm">
                        <table>
                            <thead>
                                <tr>
                                    <th>Codigo</th>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Moneda</th>
                                    <th>Precio</th>
                                    <th>Descuento</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody className="card-table__body card-table__body--merge-rows">{invoiceLines}</tbody>
                            <tbody className="card-table__body card-table__body--merge-rows">
                                {/* <tr>
                                    <th>Descuento %</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>{invoice.discountPorcentage} %</td>
                                    <td></td>
                                </tr> */}
                                <tr>
                                    <th>Descuento</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <CurrencyFormat value={invoice.discountTotal} currency={invoice.currency} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Subtotal</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <CurrencyFormat value={invoice.preTotal} currency={invoice.currency} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>IVA</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <CurrencyFormat value={invoice.iva} currency={invoice.currency} />
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Total</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <CurrencyFormat value={invoice.total} currency={invoice.currency} />
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
