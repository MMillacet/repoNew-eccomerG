// react

import { useUser } from '@auth0/nextjs-auth0';
import { Fragment, PropsWithChildren, useEffect } from 'react';
// Dep170823.2
// third-party
import { ToastContainer } from 'react-toastify';
import goldfarbApi from '../api/goldfarb';
import { IProductPromoSelected } from '../interfaces/promo';
import { useCartAddItems, useCartAddPromo, useCartEmpty } from '../store/cart/cartHooks';

// application
import Footer from './footer/Footer';
import Header, { HeaderLayout } from './header/Header';
import MobileHeader from './mobile/MobileHeader';
import MobileMenu from './mobile/MobileMenu';
import Quickview from './shared/Quickview';

import WhatsappFixed from './shared/WhatsappFixed';
import LiveAgentCHAT from './shared/LiveAgentCHAT';

export interface LayoutProps extends PropsWithChildren<{}> {
    headerLayout: HeaderLayout;
}

function Layout(props: LayoutProps) {
    const { children, headerLayout } = props;
    const { user } = useUser();
    const cartAddItems = useCartAddItems();
    const cartEmpty = useCartEmpty();
    const cartAddPromo = useCartAddPromo();

    const getProductsLines = (lines: any) => {
        const res: IProductPromoSelected[] = [];
        lines.forEach((item: any) => {
            res.push({ product: item, quantity: item.quantity });
        });
        return res;
    };

    useEffect(() => {
        const fetchCart = async () => {
            const { data } = await fetch(`/api/web/GetCart?cardcode=${String(user?.cardcode)}&email=${String(user?.email)}`).then((res) =>
                res.json(),
            );
            const cart = data;
            const allProductsToAdd = [];
            const allProductsQuanititiesToAdd = [];
            for (let index = 0; index < cart.lines.length; index += 1) {
                // eslint-disable-next-line no-await-in-loop
                const product = await goldfarbApi.getProducts(cart.lines[index].itemCode, user?.cardcode as number);
                allProductsToAdd.push(product);
                allProductsQuanititiesToAdd.push(Number(cart.lines[index].quantity));
            }
            await cartEmpty();
            await cartAddItems(allProductsToAdd, [], allProductsQuanititiesToAdd);

            for (let indexPromo = 0; indexPromo < cart.promos.length; indexPromo += 1) {
                cartAddPromo(
                    getProductsLines(cart.promos[indexPromo].lines),
                    cart.promos[indexPromo].idPromo,
                    cart.promos[indexPromo].description,
                );
            }
        };
        if (user) {
            fetchCart();
        }
    }, [user]);

    return (
        <Fragment>
            <ToastContainer autoClose={5000} hideProgressBar />

            <Quickview />

            <MobileMenu />

            <div className="site">
                <header className="site__header d-xl-none">
                    <MobileHeader />
                </header>

                <header className="site__header d-xl-block d-none">
                    <Header layout={headerLayout} />
                </header>

                <div className="site__body">
                    {children}
                    <WhatsappFixed />
                    <LiveAgentCHAT />
                </div>

                <footer className="site__footer">
                    <Footer />
                </footer>
            </div>
        </Fragment>
    );
}

export default Layout;
