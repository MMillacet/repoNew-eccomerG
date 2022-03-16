// application
import { getSession } from '@auth0/nextjs-auth0';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import oldUsers from '../../data/users.json';
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
            const oldUser = oldUsers.find((u) => u.email === transformedUser.email);
            if (oldUser) {
                console.log('User found in old database');
                const metadata = {
                    cardcode: oldUser.cardcode.toString(),
                    name: oldUser.name,
                };
                const response = await auth0Api.patch(user.sub, metadata, session.accessToken);
                if (response.status === 200) {
                    console.log('User was updated');
                    // After the user is updated, we can redirect to home
                    res.writeHead(302, {
                        Location: '/',
                    });
                    res.end();
                } else {
                    console.error(`Error updating user ${user.sub} metadata, status ${response.status}, ${response.statusText}`);
                }
            } else {
                console.log('User not found in old users database');
            }
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
    return (
        <div className="block">
            <Head>
                <title>Activa tu usuario</title>
            </Head>
            <div className="container">
                <br />
                <br />
                <br />
                <div className="row justify-content-center">
                    <h1>Activa tu usuario</h1>
                    <br />
                    La activacion de tu cuenta esta siendo procesada. Por favor envia un correo a contacto@goldfarb.com.uy con tu numero de
                    cliente.
                </div>
            </div>
        </div>
    );
}

export default Page;
