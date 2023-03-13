// application
import { getSession } from '@auth0/nextjs-auth0';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useState } from 'react';
// import oldUsers from '../../data/users.json';
import auth0Api from '../../api/auth0';
import { transformUser } from '../../services/user';
import goldfarbApi from '../../api/goldfarb';

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const { req, res } = context;

    const session = await getSession(req, res);

    if (session) {
        const user = await auth0Api.info(session?.accessToken);
        const transformedUser = transformUser(user);

        if (!transformedUser.cardcode) {
            console.log('User sin cardcode');
        } else {
            const isClientValid = await goldfarbApi.isClientValid(transformedUser.cardcode);
            if (isClientValid) {
                res.writeHead(302, {
                    Location: '/',
                });
                res.end();
            } else {
                console.log('User is not valid');
                const response = await auth0Api.patch(user.sub, { cardcode: undefined }, session.accessToken);
                console.log(JSON.stringify(response));
                res.writeHead(302, {
                    Location: '/account/activate',
                });
                res.end();
            }
        }
    } else {
        console.error('User not found in session');
    }
    return { props: {} };
};

function Page() {
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        setIsLoading(true);
        try {
            await fetch(`/api/user/activate?cardcode=${event.target.cardcode.value}`);
            setStatus('Muchas gracias. Su solicitud ha sido enviada.');
            setIsDisabled(true);
        } catch (error) {
            setStatus('Ha ocurrido un Error. Por favor contactarse con contacto@goldfarb.com.uy');
        }

        setIsLoading(false);
    };

    return (
        <div className="block">
            <Head>
                <title>Activa tu usuario</title>
            </Head>
            <div className="container">
                <br />
                <br />
                <br />
                <h2>Active su usuario.</h2>
                <div className="row justify-content-center">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="docnum">Número de cliente</label>
                            <input id="cardcode" type="text" className="form-control" />
                        </div>
                        <button type="submit" disabled={isDisabled} className={`btn btn-primary ${isLoading ? 'btn-loading' : ''}`}>
                            Activar
                        </button>
                    </form>
                </div>
                <div className="row justify-content-center">{status}</div>
            </div>
        </div>
    );
}

export default Page;
