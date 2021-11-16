// third-party
import Head from 'next/head';

// data stubs
import { IUser } from '../../interfaces/user';

export interface AccountPageProfileProps {
    user: IUser
}

export default function AccountPageProfile(props: AccountPageProfileProps) {

    const updateUser = async (event: any) => {
        event.preventDefault();
        
        const res = await fetch('/api/user/update', {
            body: JSON.stringify({
                id: props.user.id,
                name: event.target.name.value,
                phone: event.target.phone.value,
            }),
            headers: {
                'Content-Type': 'application/json'
              },
            method: 'PATCH'
        });

        const result = await res.json()
        console.log({result});
    }
  


    const { user } = props;

    return (
        <div className="card">
            <Head>
                <title>{`Profile — ${user.name}`}</title>
            </Head>

            <div className="card-header">
                <h5>Editar Perfil</h5>
            </div>
            <div className="card-divider" />
            <form className="card-body" onSubmit={updateUser}>
                <div className="row no-gutters">
                    <div className="col-12 col-lg-7 col-xl-6">
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input
                                id="name"
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                className="form-control"
                                value={user.email}
                                readOnly
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Telefono</label>
                            <input
                                id="phone"
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cardcode">Codigo cliente</label>
                            <input
                                id="cardcode"
                                type="text"
                                className="form-control"
                                value={user.cardcode}
                                readOnly
                            />
                        </div>
                        <div className="form-group mt-5 mb-0">
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
