// react
import { Fragment } from 'react';

export interface CurrencyFormatProps {
    value?: number;
    currency?: string;
}

function CurrencyFormat(props: CurrencyFormatProps) {
    const currency = props.currency === 'U$' ? 'U$D' : '$';
    const value = props.value || 0;

    return <Fragment>{`${currency} ${value.toLocaleString('es-UY')}`}</Fragment>;
}

export default CurrencyFormat;
