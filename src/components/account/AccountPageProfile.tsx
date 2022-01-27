// third-party
import Head from 'next/head';
import { useState } from 'react';
import { toast } from 'react-toastify';

// data stubs
import { IUser } from '../../interfaces/user';

export interface AccountPageProfileProps {
    user: IUser;
}

export default function AccountPageProfile(props: AccountPageProfileProps) {
    const { user } = props;

    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState(user?.name);
    const [phone, setPhone] = useState(user?.phone);

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        setIsLoading(true);
        const res = await fetch('/api/user/update', {
            body: JSON.stringify({
                name: event.target.name.value,
                phone: event.target.phone.value,
            }),
            headers: { 'Content-Type': 'application/json' },
            method: 'PATCH',
        });

        await res.json();
        setIsLoading(false);

        if (res.status === 200) {
            toast.success('Perfil actualizado correctamente', { theme: 'colored' });
        } else {
            toast.error('Error al actualizar perfil', { theme: 'colored' });
        }
    };

    return (
        <div className="card">
            <Head>
                <title>{`Profile — ${user?.name}`}</title>
            </Head>

            <div className="card-header">
                <h5>Editar Perfil</h5>
            </div>
            <div className="card-divider" />
            <form className="card-body" onSubmit={handleSubmit}>
                <div className="row no-gutters">
                    <div className="col-12 col-lg-7 col-xl-6">
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input id="name" type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" className="form-control" value={user?.email} readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Telefono</label>
                            <input
                                id="phone"
                                type="text"
                                className="form-control"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cardcode">Codigo cliente</label>
                            <input id="cardcode" type="text" className="form-control" value={user?.cardcode} readOnly />
                        </div>
                        <div className="form-group mt-5 mb-0">
                            <button type="submit" className={`btn btn-primary ${isLoading ? 'btn-loading' : ''}`}>
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
