import { IMobileMenu } from '../interfaces/menus/mobile-menu';

const dataMobileMenu: IMobileMenu = [
    { type: 'link', title: 'HERRAMIENTAS', url: '/shop/catalog?family=Herramientas' },
    { type: 'link', title: 'FERRETERÍA', url: '/shop/catalog?family=Ferretería' },
    { type: 'link', title: 'AGRO Y JARDIN', url: '/shop/catalog?family=Agro y Jardín' },
    { type: 'link', title: 'PINTURA', url: '/shop/catalog?family=Pinturas' },
    { type: 'link', title: 'BAZAR', url: '/shop/catalog?family=Bazar' },
    { type: 'link', title: 'ELECTRODOMÉSTICOS', url: '/shop/catalog?family=Electrodomésticos' },
    { type: 'link', title: 'PROMOS', url: '/promos' },
    {
        type: 'link',
        title: 'SERVICIO TÉCNICO',
        url: '/site/contact-us',
    },
];

/*
   {
        type: 'link',
        title: 'SERVICIO TÉCNICO',
        url: '/site/contact-us',
    },
*/

export default dataMobileMenu;
