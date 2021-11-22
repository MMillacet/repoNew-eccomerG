// react
import {
    ChangeEvent,
    KeyboardEvent,
    RefObject,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

// third-party
import classNames from 'classnames';
import { useRouter } from 'next/router';

// application
import Cross20Svg from '../../svg/cross-20.svg';
import Search20Svg from '../../svg/search-20.svg';
import Suggestions from './Suggestions';
import { IProduct } from '../../interfaces/product';
import goldfarbApi from '../../api/goldfarb';


export interface SearchProps {
    context: 'header' | 'mobile-header' | 'indicator';
    className?: string;
    inputRef?: RefObject<HTMLInputElement>;
    onClose?: () => void;
}

function Search(props: SearchProps) {
    const {
        context,
        className,
        inputRef,
        onClose,
    } = props;
    const [cancelFn, setCancelFn] = useState(() => () => {});
    const [suggestionsOpen, setSuggestionsOpen] = useState(false);
    const [hasSuggestions, setHasSuggestions] = useState(false);
    const [suggestedProducts, setSuggestedProducts] = useState<IProduct[]>([]);
    const [query, setQuery] = useState('');
    const wrapperRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const close = useCallback(() => {
        if (onClose) {
            onClose();
        }

        setSuggestionsOpen(false);
    }, [onClose]);

    // Close suggestions when the location has been changed.
    useEffect(() => close(), [close, router.asPath]);

    // Close suggestions when a click has been made outside component.
    useEffect(() => {
        const onGlobalClick = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as HTMLElement)) {
                close();
            }
        };

        document.addEventListener('mousedown', onGlobalClick);

        return () => document.removeEventListener('mousedown', onGlobalClick);
    }, [close]);

    // Cancel previous typing.
    useEffect(() => () => cancelFn(), [cancelFn]);

    const handleFocus = () => {
        setSuggestionsOpen(true);
    };


    const handleChangeQuery = (event: ChangeEvent<HTMLInputElement>) => {
        let canceled = false;
        let timer: ReturnType<typeof setTimeout>;

        const newCancelFn = () => {
            canceled = true;
            clearTimeout(timer);
        };

        const query = event.target.value;

        setQuery(query);

        if (query === '') {
            setHasSuggestions(false);
        } else {
            timer = setTimeout(() => {
                if( canceled) return;

                goldfarbApi.getProductsSearch({ term: query }).then(({products})  => {
                    
                    const top5codes = products.slice(0, 5).map((p: { code: string; }) => p.code);

                    goldfarbApi.getProductsLookup({ itemcodes: top5codes }).then(({ products }) => {
                        setSuggestedProducts(products);
                        setHasSuggestions(products.length > 0);
                        setSuggestionsOpen(true);
                    })                    
                });
            }, 250);
        }

        setCancelFn(() => newCancelFn);
    };

    const handleBlur = () => {
        setTimeout(() => {
            if (!document.activeElement || document.activeElement === document.body) {
                return;
            }

            // Close suggestions if the focus received an external element.
            if (wrapperRef.current && !wrapperRef.current.contains(document.activeElement)) {
                close();
            }
        }, 10);
    };

    // Close suggestions when the Escape key has been pressed.
    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        // Escape.
        if (event.which === 27) {
            close();
        }
    };

    const rootClasses = classNames(`search search--location--${context}`, className, {
        'search--suggestions-open': suggestionsOpen,
        'search--has-suggestions': hasSuggestions,
    });

    const closeButton = context !== 'mobile-header' ? '' : (
        <button className="search__button search__button--type--close" type="button" onClick={close}>
            <Cross20Svg />
        </button>
    );


    return (
        <div className={rootClasses} ref={wrapperRef} onBlur={handleBlur}>
            <div className="search__body">
                <form className="search__form" action="">
                    <input
                        ref={inputRef}
                        onChange={handleChangeQuery}
                        onFocus={handleFocus}
                        onKeyDown={handleKeyDown}
                        value={query}
                        className="search__input"
                        name="search"
                        placeholder="Producto o numero de articulo..."
                        aria-label="Buscador"
                        type="text"
                        autoComplete="off"
                    />
                    <button className="search__button search__button--type--submit" type="submit">
                        <Search20Svg />
                    </button>
                    {closeButton}
                    <div className="search__border" />
                </form>

                <Suggestions className="search__suggestions" context={context} products={suggestedProducts} />
            </div>
        </div>
    );
}

export default Search;
