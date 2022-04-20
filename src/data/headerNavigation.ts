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
                                title: 'Manuales',
                                url: '/shop/catalog?category=Manuales',
                                children: [
                                    { title: 'Bocallaves y accesorios', url: '/shop/catalog?subcategory=Bocallaves y accesorios' },
                                    { title: 'Llaves', url: '/shop/catalog?subcategory=Llaves' },
                                    { title: 'Destornilladores', url: '/shop/catalog?subcategory=Destornilladores' },
                                    { title: 'Limas y escofinas', url: '/shop/catalog?subcategory=Limas y escofinas' },
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
                                    { title: 'Mechas', url: '/shop/catalog?subcategory=Mechas' },
                                    { title: 'Puntas y cinceles', url: '/shop/catalog?subcategory=Puntas y cinceles' },
                                    { title: 'Hojas de sierra circular', url: '/shop/catalog?subcategory=Hojas de sierra circular' },
                                    { title: 'Sierra sable', url: '/shop/catalog?subcategory=Sierra sable' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Electricas',
                                url: '/shop/catalog?category=Electricas',
                                children: [
                                    { title: 'Hidrolavadoras y accesorios', url: '/shop/catalog?subcategory=Hidrolavadoras y accesorios' },
                                    {
                                        title: 'Equipos de soldar y accesorios',
                                        url: '/shop/catalog?subcategory=Equipos de soldar y accesorios',
                                    },
                                    { title: 'Sierras', url: '/shop/catalog?subcategory=Sierras' },
                                    { title: 'Amoladoras', url: '/shop/catalog?subcategory=Amoladoras' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 6,
                        links: [
                            {
                                title: 'A bateria',
                                url: '/shop/catalog?category=A bateria',
                                children: [
                                    { title: 'Baterias y cargadores', url: '/shop/catalog?subcategory=Baterias y cargadores' },
                                    { title: 'Taladros', url: '/shop/catalog?subcategory=Taladros' },
                                    { title: 'Llaves de impacto', url: '/shop/catalog?subcategory=Llaves de impacto' },
                                    { title: 'Amoladoras', url: '/shop/catalog?subcategory=Amoladoras' },
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
                                title: 'Proteccion',
                                url: '/shop/catalog?category=Proteccion',
                                children: [
                                    { title: 'Zapatos de seguridad', url: '/shop/catalog?subcategory=Zapatos de seguridad' },
                                    { title: 'Guantes', url: '/shop/catalog?subcategory=Guantes' },
                                    { title: 'Gafas', url: '/shop/catalog?subcategory=Gafas' },
                                    { title: 'Eslingas', url: '/shop/catalog?subcategory=Eslingas' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Consumibles',
                                url: '/shop/catalog?category=Consumibles',
                                children: [
                                    { title: 'Fijacion', url: '/shop/catalog?subcategory=Fijacion' },
                                    { title: 'Remachees', url: '/shop/catalog?subcategory=Remachees' },
                                    {
                                        title: 'Aceites, grasas y lubricantes',
                                        url: '/shop/catalog?subcategory=Aceites, grasas y lubricantes',
                                    },
                                    { title: 'Precintos', url: '/shop/catalog?subcategory=Precintos' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Abrasivos',
                                url: '/shop/catalog?category=Abrasivos',
                                children: [
                                    { title: 'Discos c/velcro', url: '/shop/catalog?subcategory=Discos c/velcro' },
                                    { title: 'Discos flap', url: '/shop/catalog?subcategory=Discos flap' },
                                    { title: 'Lijas en banda', url: '/shop/catalog?subcategory=Lijas en banda' },
                                    { title: 'Lijas al agua', url: '/shop/catalog?subcategory=Lijas al agua' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Varios',
                                url: '/shop/catalog?category=Varios',
                                children: [
                                    { title: 'Lonas', url: '/shop/catalog?subcategory=Lonas' },
                                    { title: 'Cuerdas', url: '/shop/catalog?subcategory=Cuerdas' },
                                    { title: 'Sillas de playa', url: '/shop/catalog?subcategory=Sillas de playa' },
                                    { title: 'Felpudos', url: '/shop/catalog?subcategory=Felpudos' },
                                ],
                            },
                        ],
                    },
                ],
            },
        },
    },
    {
        title: 'AGRO Y JARDIN',
        url: '/shop/catalog?family=Agro y Jardin',
        submenu: {
            type: 'megamenu',
            menu: {
                size: 'nl',
                columns: [
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Accesorios',
                                url: '/shop/catalog?category=Accesorios',
                                children: [
                                    { title: 'Cadenas', url: '/shop/catalog?subcategory=Cadenas' },
                                    { title: 'Espadas', url: '/shop/catalog?subcategory=Espadas' },
                                    { title: 'Carretes', url: '/shop/catalog?subcategory=Carretes' },
                                    { title: 'Tanzas', url: '/shop/catalog?subcategory=Tanzas' },
                                ],
                            },
                        ],
                    },
                    { size: 6, links: [{ title: 'Herraduras y clavos', url: '/shop/catalog?category=Herraduras y clavos', children: [] }] },
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Riego',
                                url: '/shop/catalog?category=Riego',
                                children: [
                                    { title: 'Mangueras', url: '/shop/catalog?subcategory=Mangueras' },
                                    { title: 'Pistolas', url: '/shop/catalog?subcategory=Pistolas' },
                                    { title: 'Acople rapido', url: '/shop/catalog?subcategory=Acople rapido' },
                                    { title: 'Uniones', url: '/shop/catalog?subcategory=Uniones' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Herramientas',
                                url: '/shop/catalog?category=Herramientas',
                                children: [
                                    { title: 'Tijeras de podar', url: '/shop/catalog?subcategory=Tijeras de podar' },
                                    { title: 'Machetes', url: '/shop/catalog?subcategory=Machetes' },
                                    { title: 'Escobillas', url: '/shop/catalog?subcategory=Escobillas' },
                                    { title: 'Rastrillos', url: '/shop/catalog?subcategory=Rastrillos' },
                                ],
                            },
                        ],
                    },
                ],
            },
        },
    },
    {
        title: 'PINTURA',
        url: '/shop/catalog?family=Pinturas',
        submenu: {
            type: 'megamenu',
            menu: {
                size: 'nl',
                columns: [
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Paredes',
                                url: '/shop/catalog?category=Paredes',
                                children: [
                                    { title: 'Base agua', url: '/shop/catalog?subcategory=Base agua' },
                                    { title: 'Sistema selfcolors', url: '/shop/catalog?subcategory=Sistema selfcolors' },
                                    { title: 'Especiales', url: '/shop/catalog?subcategory=Especiales' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Madera y metal',
                                url: '/shop/catalog?category=Madera y metal',
                                children: [
                                    { title: 'Esmaltes', url: '/shop/catalog?subcategory=Esmaltes' },
                                    { title: 'Sistema selfcolors', url: '/shop/catalog?subcategory=Sistema selfcolors' },
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
                                    { title: 'Pinceles', url: '/shop/catalog?subcategory=Pinceles' },
                                    { title: 'Rodillos', url: '/shop/catalog?subcategory=Rodillos' },
                                    { title: 'Pinceletas', url: '/shop/catalog?subcategory=Pinceletas' },
                                    { title: 'Bandejas', url: '/shop/catalog?subcategory=Bandejas' },
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
                                    { title: 'Barniz', url: '/shop/catalog?subcategory=Barniz' },
                                    { title: 'Protectores', url: '/shop/catalog?subcategory=Protectores' },
                                    { title: 'Lacas y plastificantes', url: '/shop/catalog?subcategory=Lacas y plastificantes' },
                                    { title: 'Protectores (base agua)', url: '/shop/catalog?subcategory=Protectores (base agua)' },
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
                                title: 'Ollas, sartenes, planchas',
                                url: '/shop/catalog?category=Ollas, sartenes, planchas',
                                children: [
                                    { title: 'Acero inoxidable', url: '/shop/catalog?subcategory=Acero inoxidable' },
                                    { title: 'Antiadherente paris', url: '/shop/catalog?subcategory=Antiadherente paris' },
                                    { title: 'Hierro', url: '/shop/catalog?subcategory=Hierro' },
                                    { title: 'Antiadherente', url: '/shop/catalog?subcategory=Antiadherente' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Cubiertos, cuchillos y tijeras',
                                url: '/shop/catalog?category=Cubiertos, cuchillos y tijeras',
                                children: [
                                    { title: 'Cuchillas', url: '/shop/catalog?subcategory=Cuchillas' },
                                    { title: 'Cubierto acero inoxidable', url: '/shop/catalog?subcategory=Cubierto acero inoxidable' },
                                    {
                                        title: 'Cubierto mango polipropileno',
                                        url: '/shop/catalog?subcategory=Cubierto mango polipropileno',
                                    },
                                    { title: 'Cubierto mango madera', url: '/shop/catalog?subcategory=Cubierto mango madera' },
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
                                    { title: 'Cocina', url: '/shop/catalog?subcategory=Cocina' },
                                    { title: 'Utensilios', url: '/shop/catalog?subcategory=Utensilios' },
                                    { title: 'Varios', url: '/shop/catalog?subcategory=Varios' },
                                    { title: 'Vino & bar', url: '/shop/catalog?subcategory=Vino & bar' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Vajilla',
                                url: '/shop/catalog?category=Vajilla',
                                children: [
                                    { title: 'Vidrio', url: '/shop/catalog?subcategory=Vidrio' },
                                    { title: 'Ceramica', url: '/shop/catalog?subcategory=Ceramica' },
                                    { title: 'Te y cafe de vidrio', url: '/shop/catalog?subcategory=Te y cafe de vidrio' },
                                    { title: 'Porcelana', url: '/shop/catalog?subcategory=Porcelana' },
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
                                title: 'Cocina',
                                url: '/shop/catalog?category=Cocina',
                                children: [
                                    { title: 'Anafes', url: '/shop/catalog?subcategory=Anafes' },
                                    { title: 'Freidoras', url: '/shop/catalog?subcategory=Freidoras' },
                                    { title: 'Microondas', url: '/shop/catalog?subcategory=Microondas' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Soportes',
                                url: '/shop/catalog?category=Soportes',
                                children: [
                                    { title: 'Tv', url: '/shop/catalog?subcategory=Tv' },
                                    { title: 'Electrodomesticos', url: '/shop/catalog?subcategory=Electrodomesticos' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Desayuno',
                                url: '/shop/catalog?category=Desayuno',
                                children: [
                                    { title: 'Jarras electricas', url: '/shop/catalog?subcategory=Jarras electricas' },
                                    { title: 'Cafeteras', url: '/shop/catalog?subcategory=Cafeteras' },
                                    { title: 'Tostadora', url: '/shop/catalog?subcategory=Tostadora' },
                                    { title: 'Sandwicheras', url: '/shop/catalog?subcategory=Sandwicheras' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Calefaccion',
                                url: '/shop/catalog?category=Calefaccion',
                                children: [
                                    { title: 'Estufas', url: '/shop/catalog?subcategory=Estufas' },
                                    { title: 'Caloventiladores', url: '/shop/catalog?subcategory=Caloventiladores' },
                                    { title: 'Calienta camas', url: '/shop/catalog?subcategory=Calienta camas' },
                                ],
                            },
                        ],
                    },
                ],
            },
        },
    },
];

export default header;
