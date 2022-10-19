// react
import { Fragment } from 'react';

// third-party
import classNames from 'classnames';
import { useUser } from '@auth0/nextjs-auth0';

// application
import AppLink from '../shared/AppLink';
import AsyncAction from '../shared/AsyncAction';
import Cart16Svg from '../../svg/cart-16.svg';
import CurrencyFormat from '../shared/CurrencyFormat';
import url from '../../services/url';
import { IProduct } from '../../interfaces/product';
import { useCartAddItem } from '../../store/cart/cartHooks';

export interface SuggestionsProps {
    context: 'header' | 'mobile-header' | 'indicator';
    className?: string;
    products: IProduct[];
}

function Suggestions(props: SuggestionsProps) {
    const { context, className, products } = props;
    const rootClasses = classNames(`suggestions suggestions--location--${context}`, className);
    const cartAddItem = useCartAddItem();

    const { user } = useUser();

    const isUserActivated = user && user.cardcode;

    const list =
        products &&
        products.map((product) => (
            <li key={product.id} className="suggestions__item">
                {product.images && product.images.length > 0 && (
                    <div className="suggestions__item-image product-image">
                        <div className="product-image__body">
                            <img className="product-image__img" src={product.images[0].url} alt="" />
                        </div>
                    </div>
                )}
                <div className="suggestions__item-info">
                    <AppLink href={url.product(product)} className="suggestions__item-name">
                        {product.title}
                    </AppLink>
                    <div className="suggestions__item-meta"> {product.category} </div>
                </div>

                {isUserActivated && (
                    <div className="suggestions__item-price">
                        {product.compareAtPrice && (
                            <Fragment>
                                <span className="suggestions__item-price-new">
                                    <CurrencyFormat value={product.price} currency={product.currency} />
                                </span>{' '}
                                <span className="suggestions__item-price-old">
                                    <CurrencyFormat value={product.compareAtPrice} currency={product.currency} />
                                </span>
                            </Fragment>
                        )}

                        {!product.compareAtPrice && <CurrencyFormat value={product.price} currency={product.currency} />}
                    </div>
                )}

                {isUserActivated && context === 'header' && (
                    <div className="suggestions__item-actions">
                        <AsyncAction
                            action={() => cartAddItem(product)}
                            render={({ run, loading }) => (
                                <button
                                    type="button"
                                    onClick={run}
                                    title="Agregar al carro"
                                    className={classNames('btn btn-primary btn-sm btn-svg-icon', {
                                        'btn-loading': loading,
                                    })}
                                >
                                    <Cart16Svg />
                                </button>
                            )}
                        />
                    </div>
                )}
            </li>
        ));

    return (
        <div className={rootClasses}>
            <ul className="suggestions__list">{list}</ul>
        </div>
    );
}

export default Suggestions;
