// react
import { Fragment } from 'react';

export interface CurrencyFormatProps {
    value?: number;
    currency?: string;
}

function CurrencyFormat(props: CurrencyFormatProps) {
    const value = props.value || 0;
    const currency = props.currency || '$';

    return <Fragment>{`${currency} ${value.toLocaleString('es-UY', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}`}</Fragment>;
}

export default CurrencyFormat;
