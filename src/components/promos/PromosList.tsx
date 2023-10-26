import Link from 'next/link';
import { IPromo } from '../../interfaces/promo';
import url from '../../services/url';

export interface PromosListProps {
    promos: IPromo[];
}

export default function PromosList({ promos }: PromosListProps) {
    return (
        <div className="cart block">
            <div className="container">
                <div className="page-header__title">
                    <h1>Promociones</h1>
                </div>
                <div className="promo-list-container">
                    {promos.map((promo) => (
                        <Link key={promo.docEntry} href={url.promo(promo.docEntry).as!!}>
                            <div className="promo-list-row">
                                <div className="promo-list-img-container">
                                    <img width={300} src={promo.u_Banner}></img>
                                </div>
                                <div className="promo-list-id-desciption">{promo.u_Descrip}</div>
                                <div className="promo-list-id-number">{promo.docEntry}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
