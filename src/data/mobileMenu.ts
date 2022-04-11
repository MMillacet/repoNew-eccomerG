import { IMobileMenu } from '../interfaces/menus/mobile-menu';

const dataMobileMenu: IMobileMenu = [
    {
        type: 'link',
        title: 'HERRAMIENTAS',
        url: '/shop/catalog?family=Herramientas',
        children: [
            {
                type: 'link',
                title: 'Herramientas Manuales',
                url: '/shop/catalog?category=Herramientas Manuales',
                children: [
                    { type: 'link', title: 'Destornilladores', url: '/shop/catalog?subcategory=Destornilladores' },
                    { type: 'link', title: 'Llaves', url: '/shop/catalog?subcategory=Llaves' },
                    { type: 'link', title: 'Bocallaves', url: '/shop/catalog?subcategory=Bocallaves' },
                    { type: 'link', title: 'Dados', url: '/shop/catalog?subcategory=Dados' },
                ],
            },
            {
                type: 'link',
                title: 'Accesorios',
                url: '/shop/catalog?category=Accesorios',
                children: [
                    { type: 'link', title: 'Lijas', url: '/shop/catalog?subcategory=Lijas' },
                    { type: 'link', title: 'Discos', url: '/shop/catalog?subcategory=Discos' },
                    { type: 'link', title: 'Hojas', url: '/shop/catalog?subcategory=Hojas' },
                    { type: 'link', title: 'Mechas', url: '/shop/catalog?subcategory=Mechas' },
                ],
            },
            {
                type: 'link',
                title: 'Herramientas Eléctricas',
                url: '/shop/catalog?category=Herramientas Eléctricas',
                children: [
                    { type: 'link', title: 'Sierras', url: '/shop/catalog?subcategory=Sierras' },
                    { type: 'link', title: 'Mechas', url: '/shop/catalog?subcategory=Mechas' },
                    { type: 'link', title: 'Discos', url: '/shop/catalog?subcategory=Discos' },
                    { type: 'link', title: 'Amoladoras', url: '/shop/catalog?subcategory=Amoladoras' },
                ],
            },
            {
                type: 'link',
                title: 'Ferretería',
                url: '/shop/catalog?category=Ferretería',
                children: [
                    { type: 'link', title: 'Candados', url: '/shop/catalog?subcategory=Candados' },
                    { type: 'link', title: 'Tacos', url: '/shop/catalog?subcategory=Tacos' },
                    { type: 'link', title: 'Remaches', url: '/shop/catalog?subcategory=Remaches' },
                    { type: 'link', title: 'Cerraduras', url: '/shop/catalog?subcategory=Cerraduras' },
                ],
            },
        ],
    },
    {
        type: 'link',
        title: 'FERRETERÍA',
        url: '/shop/catalog?family=Ferreteria',
        children: [
            {
                type: 'link',
                title: 'Herraduras',
                url: '/shop/catalog?category=Herraduras',
                children: [{ type: 'link', title: 'Herram. P-herradores', url: '/shop/catalog?subcategory=Herram. P-herradores' }],
            },
        ],
    },
    { type: 'link', title: 'AGRO Y JARDIN', url: '/shop/catalog?family=Agro y Jardin', children: [] },
    {
        type: 'link',
        title: 'PINTURA',
        url: '/shop/catalog?family=Pintura',
        children: [
            {
                type: 'link',
                title: 'Suvinil',
                url: '/shop/catalog?category=Suvinil',
                children: [
                    { type: 'link', title: 'Madera y Metal', url: '/shop/catalog?subcategory=Madera y Metal' },
                    { type: 'link', title: 'SelfColor', url: '/shop/catalog?subcategory=SelfColor' },
                    { type: 'link', title: 'Compl+Otros', url: '/shop/catalog?subcategory=Compl+Otros' },
                    { type: 'link', title: 'Acrílico RM', url: '/shop/catalog?subcategory=Acrílico RM' },
                ],
            },
            {
                type: 'link',
                title: 'Madera',
                url: '/shop/catalog?category=Madera',
                children: [
                    { type: 'link', title: 'Esmaltes', url: '/shop/catalog?subcategory=Esmaltes' },
                    { type: 'link', title: 'Pinturas para madera', url: '/shop/catalog?subcategory=Pinturas para madera' },
                    { type: 'link', title: 'Tintas', url: '/shop/catalog?subcategory=Tintas' },
                    { type: 'link', title: 'Barnices', url: '/shop/catalog?subcategory=Barnices' },
                ],
            },
            {
                type: 'link',
                title: 'Esmaltes Sinteticos',
                url: '/shop/catalog?category=Esmaltes Sinteticos',
                children: [{ type: 'link', title: 'Esmaltes', url: '/shop/catalog?subcategory=Esmaltes' }],
            },
            {
                type: 'link',
                title: 'Esmalte Aerosol',
                url: '/shop/catalog?category=Esmalte Aerosol',
                children: [
                    { type: 'link', title: 'Esmaltes', url: '/shop/catalog?subcategory=Esmaltes' },
                    { type: 'link', title: 'Poliuretano', url: '/shop/catalog?subcategory=Poliuretano' },
                    { type: 'link', title: 'Esmaltes Aerosol', url: '/shop/catalog?subcategory=Esmaltes Aerosol' },
                    { type: 'link', title: 'Zincifications', url: '/shop/catalog?subcategory=Zincifications' },
                ],
            },
        ],
    },
    {
        type: 'link',
        title: 'BAZAR',
        url: '/shop/catalog?family=Bazar',
        children: [
            {
                type: 'link',
                title: 'Cocina y comedor',
                url: '/shop/catalog?category=Cocina y comedor',
                children: [
                    { type: 'link', title: 'Cuchillos', url: '/shop/catalog?subcategory=Cuchillos' },
                    { type: 'link', title: 'Cucharas', url: '/shop/catalog?subcategory=Cucharas' },
                    { type: 'link', title: 'Cubiertos', url: '/shop/catalog?subcategory=Cubiertos' },
                    { type: 'link', title: 'Sartenes', url: '/shop/catalog?subcategory=Sartenes' },
                ],
            },
            {
                type: 'link',
                title: 'Iluminación',
                url: '/shop/catalog?category=Iluminación',
                children: [
                    { type: 'link', title: 'Lamparas', url: '/shop/catalog?subcategory=Lamparas' },
                    { type: 'link', title: 'Linternas', url: '/shop/catalog?subcategory=Linternas' },
                    { type: 'link', title: 'Reflectores', url: '/shop/catalog?subcategory=Reflectores' },
                    { type: 'link', title: 'Tubos', url: '/shop/catalog?subcategory=Tubos' },
                ],
            },
            {
                type: 'link',
                title: 'Jardín',
                url: '/shop/catalog?category=Jardín',
                children: [
                    { type: 'link', title: 'Reposeras', url: '/shop/catalog?subcategory=Reposeras' },
                    { type: 'link', title: 'Piscinas', url: '/shop/catalog?subcategory=Piscinas' },
                    { type: 'link', title: 'Sillas', url: '/shop/catalog?subcategory=Sillas' },
                    { type: 'link', title: 'Dispensadores', url: '/shop/catalog?subcategory=Dispensadores' },
                ],
            },
            {
                type: 'link',
                title: 'Decoración',
                url: '/shop/catalog?category=Decoración',
                children: [
                    { type: 'link', title: 'Relojes', url: '/shop/catalog?subcategory=Relojes' },
                    { type: 'link', title: 'Macetas', url: '/shop/catalog?subcategory=Macetas' },
                    { type: 'link', title: 'Repisas', url: '/shop/catalog?subcategory=Repisas' },
                ],
            },
        ],
    },
    {
        type: 'link',
        title: 'ELECTRODOMÉSTICOS',
        url: '/shop/catalog?family=Electrodomesticos',
        children: [
            {
                type: 'link',
                title: 'Electrodomésticos',
                url: '/shop/catalog?category=Electrodomésticos',
                children: [
                    { type: 'link', title: 'Soportes', url: '/shop/catalog?subcategory=Soportes' },
                    { type: 'link', title: 'Extractores', url: '/shop/catalog?subcategory=Extractores' },
                    { type: 'link', title: 'Estufas', url: '/shop/catalog?subcategory=Estufas' },
                    { type: 'link', title: 'Licuadoras', url: '/shop/catalog?subcategory=Licuadoras' },
                ],
            },
        ],
    },
];

export default dataMobileMenu;
