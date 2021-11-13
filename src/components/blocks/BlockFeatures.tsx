// application
import Payment48Svg from '../../svg/usp-credit-card.svg';
import Delivery48Svg from '../../svg/usp-camion.svg';
import Security48Svg from '../../svg/usp-seguridad.svg';

export type BlockFeaturesLayout = 'classic' | 'boxed';

export interface BlockFeaturesProps {
    layout?: BlockFeaturesLayout;
}

function BlockFeatures(props: BlockFeaturesProps) {
    const { layout = 'classic' } = props;

    return (
        <div className={`block block-features block-features--layout--${layout}`}>
            <div className="container">
                <div className="block-features__list">
                    <div className="block-features__item">
                        <div className="block-features__icon">
                            <Delivery48Svg />
                        </div>
                        <div className="block-features__content">
                            <div className="block-features__title">Envíos a todo el país</div>
                            <div className="block-features__subtitle"></div>
                        </div>
                    </div>
                    <div className="block-features__divider" />
                    <div className="block-features__item">
                        <div className="block-features__icon">
                            <Security48Svg />
                        </div>
                        <div className="block-features__content">
                            <div className="block-features__title">Respaldo y garantía</div>
                            <div className="block-features__subtitle"></div>
                        </div>
                    </div>
                    <div className="block-features__divider" />
                    <div className="block-features__item">
                        <div className="block-features__icon">
                            <Payment48Svg />
                        </div>
                        <div className="block-features__content">
                            <div className="block-features__title">Todos los medios de pago</div>
                            <div className="block-features__subtitle"></div>
                        </div>
                    </div>
                    {/* <div className="block-features__divider" />
                    <div className="block-features__item">
                        <div className="block-features__icon">
                            <FiTag48Svg />
                        </div>
                        <div className="block-features__content">
                            <div className="block-features__title">Hot Offers</div>
                            <div className="block-features__subtitle">Discounts up to 90%</div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default BlockFeatures;
