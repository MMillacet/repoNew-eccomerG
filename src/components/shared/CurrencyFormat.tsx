// react
import { Fragment } from 'react';

export interface CurrencyFormatProps {
    value?: number;
    currency?: string;
}

function CurrencyFormat(props: CurrencyFormatProps) {
    const value = props.value || 0;

    return <Fragment>{`${props.currency} ${value.toLocaleString('es-UY')}`}</Fragment>;
}

export default CurrencyFormat;
