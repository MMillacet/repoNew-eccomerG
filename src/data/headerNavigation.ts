import { INav } from '../interfaces/menus/nav';

const header: INav = [
    {
        title: 'HERRAMIENTAS',
        url: '/shop/catalog?family=Herramientas',
        submenu: {
            type: 'megamenu',
            menu: {
                size: 'nl',
                columns: [
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Herramientas Manuales',
                                url: '/shop/catalog?category=Herramientas Manuales',
                                children: [
                                    { title: 'Destornilladores', url: '/shop/catalog?subcategory=Destornilladores' },
                                    { title: 'Llaves', url: '/shop/catalog?subcategory=Llaves' },
                                    { title: 'Bocallaves', url: '/shop/catalog?subcategory=Bocallaves' },
                                    { title: 'Dados', url: '/shop/catalog?subcategory=Dados' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Accesorios',
                                url: '/shop/catalog?category=Accesorios',
                                children: [
                                    { title: 'Lijas', url: '/shop/catalog?subcategory=Lijas' },
                                    { title: 'Discos', url: '/shop/catalog?subcategory=Discos' },
                                    { title: 'Hojas', url: '/shop/catalog?subcategory=Hojas' },
                                    { title: 'Mechas', url: '/shop/catalog?subcategory=Mechas' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Herramientas Eléctricas',
                                url: '/shop/catalog?category=Herramientas Eléctricas',
                                children: [
                                    { title: 'Sierras', url: '/shop/catalog?subcategory=Sierras' },
                                    { title: 'Mechas', url: '/shop/catalog?subcategory=Mechas' },
                                    { title: 'Discos', url: '/shop/catalog?subcategory=Discos' },
                                    { title: 'Amoladoras', url: '/shop/catalog?subcategory=Amoladoras' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Ferretería',
                                url: '/shop/catalog?category=Ferretería',
                                children: [
                                    { title: 'Candados', url: '/shop/catalog?subcategory=Candados' },
                                    { title: 'Tacos', url: '/shop/catalog?subcategory=Tacos' },
                                    { title: 'Remaches', url: '/shop/catalog?subcategory=Remaches' },
                                    { title: 'Cerraduras', url: '/shop/catalog?subcategory=Cerraduras' },
                                ],
                            },
                        ],
                    },
                ],
            },
        },
    },
    {
        title: 'FERRETERÍA',
        url: '/shop/catalog?family=Ferreteria',
        submenu: {
            type: 'megamenu',
            menu: {
                size: 'nl',
                columns: [
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Herraduras',
                                url: '/shop/catalog?category=Herraduras',
                                children: [{ title: 'Herram. P-herradores', url: '/shop/catalog?subcategory=Herram. P-herradores' }],
                            },
                        ],
                    },
                ],
            },
        },
    },
    { title: 'AGRO Y JARDIN', url: '/shop/catalog?family=Agro y Jardin', submenu: { type: 'megamenu', menu: { size: 'nl', columns: [] } } },
    {
        title: 'PINTURA',
        url: '/shop/catalog?family=Pintura',
        submenu: {
            type: 'megamenu',
            menu: {
                size: 'nl',
                columns: [
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Suvinil',
                                url: '/shop/catalog?category=Suvinil',
                                children: [
                                    { title: 'Madera y Metal', url: '/shop/catalog?subcategory=Madera y Metal' },
                                    { title: 'SelfColor', url: '/shop/catalog?subcategory=SelfColor' },
                                    { title: 'Compl+Otros', url: '/shop/catalog?subcategory=Compl+Otros' },
                                    { title: 'Acrílico RM', url: '/shop/catalog?subcategory=Acrílico RM' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Madera',
                                url: '/shop/catalog?category=Madera',
                                children: [
                                    { title: 'Esmaltes', url: '/shop/catalog?subcategory=Esmaltes' },
                                    { title: 'Pinturas para madera', url: '/shop/catalog?subcategory=Pinturas para madera' },
                                    { title: 'Tintas', url: '/shop/catalog?subcategory=Tintas' },
                                    { title: 'Barnices', url: '/shop/catalog?subcategory=Barnices' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Esmaltes Sinteticos',
                                url: '/shop/catalog?category=Esmaltes Sinteticos',
                                children: [{ title: 'Esmaltes', url: '/shop/catalog?subcategory=Esmaltes' }],
                            },
                        ],
                    },
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Esmalte Aerosol',
                                url: '/shop/catalog?category=Esmalte Aerosol',
                                children: [
                                    { title: 'Esmaltes', url: '/shop/catalog?subcategory=Esmaltes' },
                                    { title: 'Poliuretano', url: '/shop/catalog?subcategory=Poliuretano' },
                                    { title: 'Esmaltes Aerosol', url: '/shop/catalog?subcategory=Esmaltes Aerosol' },
                                    { title: 'Zincifications', url: '/shop/catalog?subcategory=Zincifications' },
                                ],
                            },
                        ],
                    },
                ],
            },
        },
    },
    {
        title: 'BAZAR',
        url: '/shop/catalog?family=Bazar',
        submenu: {
            type: 'megamenu',
            menu: {
                size: 'nl',
                columns: [
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Cocina y comedor',
                                url: '/shop/catalog?category=Cocina y comedor',
                                children: [
                                    { title: 'Cuchillos', url: '/shop/catalog?subcategory=Cuchillos' },
                                    { title: 'Cucharas', url: '/shop/catalog?subcategory=Cucharas' },
                                    { title: 'Cubiertos', url: '/shop/catalog?subcategory=Cubiertos' },
                                    { title: 'Sartenes', url: '/shop/catalog?subcategory=Sartenes' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Iluminación',
                                url: '/shop/catalog?category=Iluminación',
                                children: [
                                    { title: 'Lamparas', url: '/shop/catalog?subcategory=Lamparas' },
                                    { title: 'Linternas', url: '/shop/catalog?subcategory=Linternas' },
                                    { title: 'Reflectores', url: '/shop/catalog?subcategory=Reflectores' },
                                    { title: 'Tubos', url: '/shop/catalog?subcategory=Tubos' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Jardín',
                                url: '/shop/catalog?category=Jardín',
                                children: [
                                    { title: 'Reposeras', url: '/shop/catalog?subcategory=Reposeras' },
                                    { title: 'Piscinas', url: '/shop/catalog?subcategory=Piscinas' },
                                    { title: 'Sillas', url: '/shop/catalog?subcategory=Sillas' },
                                    { title: 'Dispensadores', url: '/shop/catalog?subcategory=Dispensadores' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Decoración',
                                url: '/shop/catalog?category=Decoración',
                                children: [
                                    { title: 'Relojes', url: '/shop/catalog?subcategory=Relojes' },
                                    { title: 'Macetas', url: '/shop/catalog?subcategory=Macetas' },
                                    { title: 'Repisas', url: '/shop/catalog?subcategory=Repisas' },
                                ],
                            },
                        ],
                    },
                ],
            },
        },
    },
    {
        title: 'ELECTRODOMÉSTICOS',
        url: '/shop/catalog?family=Electrodomesticos',
        submenu: {
            type: 'megamenu',
            menu: {
                size: 'nl',
                columns: [
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Electrodomésticos',
                                url: '/shop/catalog?category=Electrodomésticos',
                                children: [
                                    { title: 'Soportes', url: '/shop/catalog?subcategory=Soportes' },
                                    { title: 'Extractores', url: '/shop/catalog?subcategory=Extractores' },
                                    { title: 'Estufas', url: '/shop/catalog?subcategory=Estufas' },
                                    { title: 'Licuadoras', url: '/shop/catalog?subcategory=Licuadoras' },
                                ],
                            },
                        ],
                    },
                ],
            },
        },
    },
];

// const dataHeaderNavigation: INav = [
// {
//     title: 'Home',
//     url: '/',
//     submenu: {
//         type: 'menu',
//         menu: [
//             { title: 'Home 1', url: '/home-one' },
//             { title: 'Home 2', url: '/' },
//         ],
//     },
// },
// {
//     title: 'Megamenu',
//     url: '',
//     submenu: {
//         type: 'megamenu',
//         menu: {
//             size: 'nl',
//             columns: [
//                 {
//                     size: 6,
//                     links: [
//                         {
//                             title: 'Power Tools',
//                             url: '',
//                             children: [
//                                 { title: 'Engravers', url: '' },
//                                 { title: 'Wrenches', url: '' },
//                                 { title: 'Wall Chaser', url: '' },
//                                 { title: 'Pneumatic Tools', url: '' },
//                             ],
//                         },
//                     ],
//                 },
//                 {
//                     size: 6,
//                     links: [
//                         {
//                             title: 'Machine Tools',
//                             url: '',
//                             children: [
//                                 { title: 'Thread Cutting', url: '' },
//                                 { title: 'Chip Blowers', url: '' },
//                                 { title: 'Sharpening Machines', url: '' },
//                                 { title: 'Pipe Cutters', url: '' },
//                                 { title: 'Slotting machines', url: '' },
//                                 { title: 'Lathes', url: '' },
//                             ],
//                         },
//                     ],
//                 },
//                 {
//                     size: 6,
//                     links: [
//                         {
//                             title: 'Hand Tools',
//                             url: '',
//                             children: [
//                                 { title: 'Screwdrivers', url: '' },
//                                 { title: 'Handsaws', url: '' },
//                                 { title: 'Knives', url: '' },
//                                 { title: 'Axes', url: '' },
//                                 { title: 'Multitools', url: '' },
//                                 { title: 'Paint Tools', url: '' },
//                             ],
//                         },
//                     ],
//                 },
//                 {
//                     size: 6,
//                     links: [
//                         {
//                             title: 'Garden Equipment',
//                             url: '',
//                             children: [
//                                 { title: 'Motor Pumps', url: '' },
//                                 { title: 'Chainsaws', url: '' },
//                                 { title: 'Electric Saws', url: '' },
//                                 { title: 'Brush Cutters', url: '' },
//                             ],
//                         },
//                     ],
//                 },
//             ],
//         },
//     },
// },

// {
//     title: 'Shop',
//     url: '/shop/category-grid-3-columns-sidebar',
//     submenu: {
//         type: 'menu',
//         menu: [
//             {
//                 title: 'Shop Grid',
//                 url: '/shop/category-grid-3-columns-sidebar',
//                 children: [
//                     {
//                         title: '3 Columns Sidebar',
//                         url: '/shop/category-grid-3-columns-sidebar',
//                     },
//                     { title: '4 Columns Full', url: '/shop/category-grid-4-columns-full' },
//                     { title: '5 Columns Full', url: '/shop/category-grid-5-columns-full' },
//                 ],
//             },
//             { title: 'Shop List', url: '/shop/category-list' },
//             { title: 'Shop Right Sidebar', url: '/shop/category-right-sidebar' },
//             {
//                 title: 'Product',
//                 url: '/shop/product-standard',
//                 children: [
//                     { title: 'Product', url: '/shop/product-standard' },
//                     { title: 'Product Alt', url: '/shop/product-columnar' },
//                     { title: 'Product Sidebar', url: '/shop/product-sidebar' },
//                 ],
//             },
//             { title: 'Cart', url: '/shop/cart' },
//             { title: 'Checkout', url: '/shop/checkout' },
//             { title: 'Order Success', url: '/shop/checkout/success' },
//             { title: 'Wishlist', url: '/shop/wishlist' },
//             { title: 'Compare', url: '/shop/compare' },
//             { title: 'Track Order', url: '/shop/track-order' },
//         ],
//     },
// },
// {
//     title: 'Account',
//     url: '/account/login',
//     submenu: {
//         type: 'menu',
//         menu: [
//             { title: 'Iniciar sesión', url: '/account/login' },
//             { title: 'Dashboard', url: '/account/dashboard' },
//             { title: 'Editar Perfil', url: '/account/profile' },
//             { title: 'Historial pedidos', url: '/account/orders' },
//             {
//                 title: 'Order Details',
//                 url: {
//                     href: '/account/orders/[orderId]',
//                     as: '/account/orders/5',
//                     prefetch: false,
//                 },
//             },
//             { title: 'Address Book', url: '/account/addresses' },
//             {
//                 title: 'Edit Address',
//                 url: {
//                     href: '/account/addresses/[addressId]',
//                     as: '/account/addresses/5',
//                     prefetch: false,
//                 },
//             },
//             { title: 'Change Password', url: '/account/password' },
//         ],
//     },
// },
// {
//     title: 'Blog',
//     url: '/blog/category-classic',
//     submenu: {
//         type: 'menu',
//         menu: [
//             { title: 'Blog Classic', url: '/blog/category-classic' },
//             { title: 'Blog Grid', url: '/blog/category-grid' },
//             { title: 'Blog List', url: '/blog/category-list' },
//             { title: 'Blog Left Sidebar', url: '/blog/category-left-sidebar' },
//             { title: 'Post Page', url: '/blog/post-classic' },
//             { title: 'Post Without Sidebar', url: '/blog/post-full' },
//         ],
//     },
// },
// {
//     title: 'Pages',
//     url: '/site/about-us',
//     submenu: {
//         type: 'menu',
//         menu: [
//             { title: 'About Us', url: '/site/about-us' },
//             { title: 'Contact Us', url: '/site/contact-us' },
//             { title: 'Contact Us Alt', url: '/site/contact-us-alt' },
//             { title: '404', url: '/site/not-found' },
//             { title: 'Terms And Conditions', url: '/site/terms' },
//             { title: 'FAQ', url: '/site/faq' },
//             { title: 'Components', url: '/site/components' },
//             { title: 'Typography', url: '/site/typography' },
//         ],
//     },
// },
//     {
//         title: 'HERRAMIENTAS',
//         url: '/shop/catalog/herramientas',
//     },
//     {
//         title: 'HOGAR',
//         url: '/shop/catalog/hogar',
//     },
//     {
//         title: 'PINTURAS',
//         url: '/shop/catalog/pinturas',
//     },
//     {
//         title: 'CÓMO COMPRAR',
//         url: '/site/how-to-purchase',
//     },
// ];

export default header;
