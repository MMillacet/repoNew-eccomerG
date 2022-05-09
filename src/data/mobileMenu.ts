import { IMobileMenu } from '../interfaces/menus/mobile-menu';

const dataMobileMenu: IMobileMenu = [
    { type: 'link', title: 'HERRAMIENTAS', url: '/shop/catalog?family=Herramientas' },
    { type: 'link', title: 'FERRETERÍA', url: '/shop/catalog?family=Ferreteria' },
    { type: 'link', title: 'AGRO Y JARDIN', url: '/shop/catalog?family=Agro y Jardin' },
    { type: 'link', title: 'PINTURA', url: '/shop/catalog?family=Pinturas' },
    { type: 'link', title: 'BAZAR', url: '/shop/catalog?family=Bazar' },
    { type: 'link', title: 'ELECTRODOMÉSTICOS', url: '/shop/catalog?family=Electrodomesticos' },
];

export default [
    ...dataMobileMenu,
    {
        type: 'link',
        title: 'SERVICIO TÉCNICO',
        url: '/site/contact-us',
    },
];
