import Head from 'next/head';
import { useState } from 'react';

function Page() {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        setIsLoading(true);
        const s = await (await fetch(`/api/documents/servicestatus?docNum=${event.target.docnum.value}`)).text();

        setIsLoading(false);
        setStatus(s);
    };
    return (
        <div className="block">
            <Head>
                <title>Consultar por servicio</title>
            </Head>
            <div className="container">
                <br />
                <br />
                <br />
                <div className="row justify-content-center">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="docnum">Número de servicio</label>
                            <input id="docnum" type="text" className="form-control" />
                        </div>
                        <button type="submit" className={`btn btn-primary ${isLoading ? 'btn-loading' : ''}`}>
                            Consultar
                        </button>
                    </form>
                </div>
                <div className="row justify-content-center">{status}</div>
            </div>
        </div>
    );
}

export default Page;
