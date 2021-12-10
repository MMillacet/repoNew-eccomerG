// react
import { Fragment } from 'react';

export interface CurrencyFormatProps {
    value?: number;
    currency?: string;
}

function CurrencyFormat(props: CurrencyFormatProps) {
    const { value = 0, currency = '$' } = props;

    return <Fragment>{`${currency}${value.toFixed(2)}`}</Fragment>;
}

export default CurrencyFormat;
