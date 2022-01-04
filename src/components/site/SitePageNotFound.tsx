// third-party
import Head from 'next/head';

// application
import AppLink from '../shared/AppLink';
import url from '../../services/url';

// data stubs
import theme from '../../data/theme';

function SitePageNotFound() {
    return (
        <div className="block">
            <Head>
                <title>{`404 Page Not Found — ${theme.name}`}</title>
            </Head>

            <div className="container">
                <div className="not-found">
                    <div className="not-found__404">Oops! Error 404</div>

                    <div className="not-found__content">
                        <h1 className="not-found__title">Pagina no encontrada</h1>

                        <p className="not-found__text">
                            Ir a la pagina principal para empezar de nuevo.
                        </p>

                        <AppLink href={url.home()} className="btn btn-secondary btn-sm">
                            Pagina principal
                        </AppLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SitePageNotFound;
