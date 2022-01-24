import { ImageAsset } from '@sanity/types';
import { SanityPaymentMethod } from './paymentMethod';

export interface SanityClientSection {
    subtitle: string;
    text: object[];
    image?: ImageAsset;
    payment?: { subtitle: string; text: object[] };
    paymentMethods?: SanityPaymentMethod[];
    whereToBuy?: { subtitle: string; text: object[] };
}
