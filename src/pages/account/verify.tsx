import Head from 'next/head';

function Page() {
    return (
        <div className="block">
            <Head>
                <title>Verifica tu email</title>
            </Head>
            <div className="container">
                <br />
                <br />
                <br />
                <div className="row justify-content-center">
                    <h1>Verifica tu email</h1>
                </div>
                <br />
                <div className="row justify-content-center">
                    Le hemos enviado un correo de verificacion. Si no lo ha recibido por favor contactese con nosotros.
                </div>
            </div>
        </div>
    );
}
export default Page;
