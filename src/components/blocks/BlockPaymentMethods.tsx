// application
import AppLink from '../shared/AppLink';
import GoldfarbSlick from '../shared/GoldfarbSlick';
import { SanityPaymentMethod } from '../../custom-sanity-types/paymentMethod';

const slickSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
    ],
};

export interface BlockPaymentMethodsProps {
    paymentMethods?: SanityPaymentMethod[];
}
export default function BlockPaymentMethods(props: BlockPaymentMethodsProps) {
    const paymentMethodsList = props.paymentMethods?.map((paymentMethod) => (
        <div key={paymentMethod?.id} className="block-payment-methods__item">
            <AppLink href="/">
                <img src={paymentMethod.logo?.url} alt="" />
            </AppLink>
        </div>
    ));

    return (
        <div className="block block-payment-methods">
            <div className="container">
                <div className="block-payment-methods__slider">
                    <GoldfarbSlick {...slickSettings}>{paymentMethodsList}</GoldfarbSlick>
                </div>
            </div>
        </div>
    );
}
