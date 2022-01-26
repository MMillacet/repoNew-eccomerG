// react
import { Fragment } from 'react';

// third-party
import Head from 'next/head';

// application
import AppLink from '../shared/AppLink';
import url from '../../services/url';
import CurrencyFormat from '../shared/CurrencyFormat';
import { IGoldfarbReceipt } from '../../interfaces/invoice';

export interface AccountInvoiceReceiptProps {
    receipt: IGoldfarbReceipt;
}

export default function AccountPageReceiptDetails(props: AccountInvoiceReceiptProps) {
    const { receipt } = props;

    const receiptLines = receipt.recipe.map((r: any) => (
        <tr key={r.docNum}>
            <td>{r.cardName}</td>
            <td>{new Date(r.docDate).toLocaleDateString()}</td>
            <td>{r.docCurr}</td>
            <td>{r.docRate}</td>
            <td>{<CurrencyFormat value={r.total} currency={r.currency} />}</td>
        </tr>
    ));

    const checkLines = receipt.checks.map((c: any) => (
        <tr key={c.checkNum}>
            <td>{c.checkNum}</td>
            <td>{c.bankName}</td>
            <td>{new Date(c.dueDate).toLocaleDateString()}</td>
            <td>{c.currency}</td>
            <td>{<CurrencyFormat value={c.checkSum} currency={c.currency} />}</td>
        </tr>
    ));

    const checksTotal = receipt.checks.reduce((partialSum, check) => partialSum + check.checkSum, 0);

    const invoiceLines = receipt.invoices.map((i: any) => (
        <tr key={i.docNum}>
            <td>{i.docNum}</td>
            <td>{i.folioNum}</td>
            <td>{new Date(i.docDate).toLocaleDateString()}</td>
            <td>{i.docCur}</td>
            <td>{<CurrencyFormat value={i.total} currency={i.currency} />}</td>
        </tr>
    ));

    const invoicesSubTotal = receipt.invoices.reduce((partialSum, invoice) => partialSum + invoice.total, 0);
    const invoicesTotal = invoicesSubTotal + receipt.noApply;

    return (
        <Fragment>
            <Head>
                <title>Recibo</title>
            </Head>

            {receiptLines.length > 0 && (
                <Fragment>
                    <div className="card">
                        <div className="order-header">
                            <div className="order-header__actions">
                                <AppLink href={url.accountStatus()} className="btn btn-xs btn-secondary">
                                    Volver a estado de cuenta
                                </AppLink>
                            </div>
                            <h5 className="order-header__title">Recibo</h5>
                        </div>
                        <div className="card-divider" />
                        <div className="card-table">
                            <div className="table-responsive-sm">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Cliente</th>
                                            <th>Fecha</th>
                                            <th>Moneda</th>
                                            <th>Conversión</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody className="card-table__body card-table__body--merge-rows">{receiptLines}</tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
            <br />
            {checkLines.length > 0 && (
                <Fragment>
                    <div className="card">
                        <div className="order-header">
                            <h5 className="order-header__title">Cheques</h5>
                        </div>
                        <div className="card-divider" />
                        <div className="card-table">
                            <div className="table-responsive-sm">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Cheque</th>
                                            <th>Banco</th>
                                            <th>Vencimiento</th>
                                            <th>Moneda</th>
                                            <th>Importe</th>
                                        </tr>
                                    </thead>
                                    <tbody className="card-table__body card-table__body--merge-rows">{checkLines}</tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Total</th>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <CurrencyFormat value={checksTotal} currency={receipt.checks[0].currency} />
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
            <br />
            {invoiceLines.length > 0 && (
                <Fragment>
                    <div className="card">
                        <div className="order-header">
                            <h5 className="order-header__title">Facturas</h5>
                        </div>
                        <div className="card-divider" />
                        <div className="card-table">
                            <div className="table-responsive-sm">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Factura</th>
                                            <th>Folio</th>
                                            <th>Fecha</th>
                                            <th>Moneda</th>
                                            <th>Importe</th>
                                        </tr>
                                    </thead>
                                    <tbody className="card-table__body card-table__body--merge-rows">{invoiceLines}</tbody>
                                    <tbody className="card-table__body card-table__body--merge-rows">
                                        <tr>
                                            <th>Total asignado</th>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <CurrencyFormat value={invoicesSubTotal} currency={receipt.invoices[0].docCur} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Total no asignado</th>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <CurrencyFormat value={receipt.noApply} currency={receipt.invoices[0].docCur} />
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Total</th>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <CurrencyFormat value={invoicesTotal} currency={receipt.invoices[0].docCur} />
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
}
