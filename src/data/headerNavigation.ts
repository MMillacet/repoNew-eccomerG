import { INav } from '../interfaces/menus/nav';

const header: INav = [
    {
        title: 'HERRAMIENTAS',
        url: '/shop/catalog?family=Herramientas',
        submenu: {
            type: 'megamenu',
            menu: {
                size: 'xl',
                columns: [
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Manuales',
                                url: '/shop/catalog?category=Manuales',
                                children: [
                                    { title: 'Bocallaves y accesorios', url: '/shop/catalog?subcategory=Bocallaves y accesorios' },
                                    { title: 'Llaves', url: '/shop/catalog?subcategory=Llaves' },
                                    { title: 'Destornilladores', url: '/shop/catalog?subcategory=Destornilladores' },
                                    { title: 'Limas y escofinas', url: '/shop/catalog?subcategory=Limas y escofinas' },
                                    { title: 'Alicates', url: '/shop/catalog?subcategory=Alicates' },
                                    { title: 'Destonilladores', url: '/shop/catalog?subcategory=Destonilladores' },
                                    { title: 'Martillos', url: '/shop/catalog?subcategory=Martillos' },
                                    { title: 'Espatulas', url: '/shop/catalog?subcategory=Espatulas' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Accesorios',
                                url: '/shop/catalog?category=Accesorios',
                                children: [
                                    { title: 'Mechas', url: '/shop/catalog?subcategory=Mechas' },
                                    { title: 'Puntas y cinceles', url: '/shop/catalog?subcategory=Puntas y cinceles' },
                                    { title: 'Hojas de sierra circular', url: '/shop/catalog?subcategory=Hojas de sierra circular' },
                                    { title: 'Sierra sable', url: '/shop/catalog?subcategory=Sierra sable' },
                                    { title: 'Adaptadores', url: '/shop/catalog?subcategory=Adaptadores' },
                                    { title: 'Hojas p/multifincion', url: '/shop/catalog?subcategory=Hojas p/multifincion' },
                                    { title: 'Coronas', url: '/shop/catalog?subcategory=Coronas' },
                                    { title: 'Hojas de sierra', url: '/shop/catalog?subcategory=Hojas de sierra' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
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
                                    { title: 'Taladros', url: '/shop/catalog?subcategory=Taladros' },
                                    { title: 'Compresores', url: '/shop/catalog?subcategory=Compresores' },
                                    { title: 'Bombas', url: '/shop/catalog?subcategory=Bombas' },
                                    { title: 'Lijadoras', url: '/shop/catalog?subcategory=Lijadoras' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'A bateria',
                                url: '/shop/catalog?category=A bateria',
                                children: [
                                    { title: 'Baterias y cargadores', url: '/shop/catalog?subcategory=Baterias y cargadores' },
                                    { title: 'Taladros', url: '/shop/catalog?subcategory=Taladros' },
                                    { title: 'Llaves de impacto', url: '/shop/catalog?subcategory=Llaves de impacto' },
                                    { title: 'Amoladoras', url: '/shop/catalog?subcategory=Amoladoras' },
                                    { title: 'Sierras', url: '/shop/catalog?subcategory=Sierras' },
                                    { title: 'Sierra', url: '/shop/catalog?subcategory=Sierra' },
                                    { title: 'Varios', url: '/shop/catalog?subcategory=Varios' },
                                    { title: 'Rotomartillos', url: '/shop/catalog?subcategory=Rotomartillos' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Medicion',
                                url: '/shop/catalog?category=Medicion',
                                children: [
                                    { title: 'Niveles', url: '/shop/catalog?subcategory=Niveles' },
                                    { title: 'Cintas metricas', url: '/shop/catalog?subcategory=Cintas metricas' },
                                    { title: 'Escuadras', url: '/shop/catalog?subcategory=Escuadras' },
                                    { title: 'Otros', url: '/shop/catalog?subcategory=Otros' },
                                    { title: 'Laser', url: '/shop/catalog?subcategory=Laser' },
                                    { title: 'Reglas', url: '/shop/catalog?subcategory=Reglas' },
                                    { title: 'Galgas', url: '/shop/catalog?subcategory=Galgas' },
                                    { title: 'Metros', url: '/shop/catalog?subcategory=Metros' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'A combustion',
                                url: '/shop/catalog?category=A combustion',
                                children: [
                                    { title: 'Generadores', url: '/shop/catalog?subcategory=Generadores' },
                                    { title: 'Motobombas', url: '/shop/catalog?subcategory=Motobombas' },
                                    { title: 'Hidrolavadoras y accesorios', url: '/shop/catalog?subcategory=Hidrolavadoras y accesorios' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Varios',
                                url: '/shop/catalog?category=Varios',
                                children: [{ title: 'Convertidor de voltaje', url: '/shop/catalog?subcategory=Convertidor de voltaje' }],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Mechas',
                                url: '/shop/catalog?category=Mechas',
                                children: [{ title: 'Hojas p/multifincion', url: '/shop/catalog?subcategory=Hojas p/multifincion' }],
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
                size: 'xl',
                columns: [
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Proteccion',
                                url: '/shop/catalog?category=Proteccion',
                                children: [
                                    { title: 'Zapatos de seguridad', url: '/shop/catalog?subcategory=Zapatos de seguridad' },
                                    { title: 'Guantes', url: '/shop/catalog?subcategory=Guantes' },
                                    { title: 'Gafas', url: '/shop/catalog?subcategory=Gafas' },
                                    { title: 'Eslingas', url: '/shop/catalog?subcategory=Eslingas' },
                                    { title: 'Caretas', url: '/shop/catalog?subcategory=Caretas' },
                                    { title: 'Equipos de lluvia', url: '/shop/catalog?subcategory=Equipos de lluvia' },
                                    { title: 'Botas', url: '/shop/catalog?subcategory=Botas' },
                                    { title: 'Respiratoria', url: '/shop/catalog?subcategory=Respiratoria' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
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
                                    { title: 'Aprietacables', url: '/shop/catalog?subcategory=Aprietacables' },
                                    { title: 'Grilletes', url: '/shop/catalog?subcategory=Grilletes' },
                                    { title: 'Cables de acero', url: '/shop/catalog?subcategory=Cables de acero' },
                                    { title: 'Mosquetones', url: '/shop/catalog?subcategory=Mosquetones' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Abrasivos',
                                url: '/shop/catalog?category=Abrasivos',
                                children: [
                                    { title: 'Discos c/velcro', url: '/shop/catalog?subcategory=Discos c/velcro' },
                                    { title: 'Discos flap', url: '/shop/catalog?subcategory=Discos flap' },
                                    { title: 'Lijas en banda', url: '/shop/catalog?subcategory=Lijas en banda' },
                                    { title: 'Lijas al agua', url: '/shop/catalog?subcategory=Lijas al agua' },
                                    { title: 'Lijas en rollo', url: '/shop/catalog?subcategory=Lijas en rollo' },
                                    { title: 'Lijas', url: '/shop/catalog?subcategory=Lijas' },
                                    { title: 'Lijas p/madera', url: '/shop/catalog?subcategory=Lijas p/madera' },
                                    { title: 'Tela esmeril', url: '/shop/catalog?subcategory=Tela esmeril' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Varios',
                                url: '/shop/catalog?category=Varios',
                                children: [
                                    { title: 'Lonas', url: '/shop/catalog?subcategory=Lonas' },
                                    { title: 'Cuerdas', url: '/shop/catalog?subcategory=Cuerdas' },
                                    { title: 'Sillas de playa', url: '/shop/catalog?subcategory=Sillas de playa' },
                                    { title: 'Felpudos', url: '/shop/catalog?subcategory=Felpudos' },
                                    { title: 'Mallas electrosoldadas', url: '/shop/catalog?subcategory=Mallas electrosoldadas' },
                                    { title: 'Tendederos', url: '/shop/catalog?subcategory=Tendederos' },
                                    { title: 'Escobas', url: '/shop/catalog?subcategory=Escobas' },
                                    { title: 'Baldes', url: '/shop/catalog?subcategory=Baldes' },
                                ],
                            },
                        ],
                    },
                    { size: 3, links: [{ title: 'Candados', url: '/shop/catalog?category=Candados', children: [] }] },
                    {
                        size: 3,
                        links: [
                            { title: 'Discos de corte y desbaste', url: '/shop/catalog?category=Discos de corte y desbaste', children: [] },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Escaleras',
                                url: '/shop/catalog?category=Escaleras',
                                children: [
                                    { title: 'Aluminio', url: '/shop/catalog?subcategory=Aluminio' },
                                    { title: 'Madera', url: '/shop/catalog?subcategory=Madera' },
                                    { title: 'Accesorios', url: '/shop/catalog?subcategory=Accesorios' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Herramientas',
                                url: '/shop/catalog?category=Herramientas',
                                children: [
                                    { title: 'Palas', url: '/shop/catalog?subcategory=Palas' },
                                    { title: 'Cucharas de albañil', url: '/shop/catalog?subcategory=Cucharas de albañil' },
                                    { title: 'Mangos', url: '/shop/catalog?subcategory=Mangos' },
                                    { title: 'Arcos de sierra', url: '/shop/catalog?subcategory=Arcos de sierra' },
                                    { title: 'Escobas', url: '/shop/catalog?subcategory=Escobas' },
                                    { title: 'Hachas', url: '/shop/catalog?subcategory=Hachas' },
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
                size: 'xl',
                columns: [
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Accesorios',
                                url: '/shop/catalog?category=Accesorios',
                                children: [
                                    { title: 'Cadenas', url: '/shop/catalog?subcategory=Cadenas' },
                                    { title: 'Espadas', url: '/shop/catalog?subcategory=Espadas' },
                                    { title: 'Carretes', url: '/shop/catalog?subcategory=Carretes' },
                                    { title: 'Tanzas', url: '/shop/catalog?subcategory=Tanzas' },
                                    { title: 'Podadoras', url: '/shop/catalog?subcategory=Podadoras' },
                                    { title: 'Corta cercos', url: '/shop/catalog?subcategory=Corta cercos' },
                                    { title: 'Brocas', url: '/shop/catalog?subcategory=Brocas' },
                                    { title: 'Arnes', url: '/shop/catalog?subcategory=Arnes' },
                                ],
                            },
                        ],
                    },
                    { size: 3, links: [{ title: 'Herraduras y clavos', url: '/shop/catalog?category=Herraduras y clavos', children: [] }] },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Riego',
                                url: '/shop/catalog?category=Riego',
                                children: [
                                    { title: 'Mangueras', url: '/shop/catalog?subcategory=Mangueras' },
                                    { title: 'Pistolas', url: '/shop/catalog?subcategory=Pistolas' },
                                    { title: 'Acople rapido', url: '/shop/catalog?subcategory=Acople rapido' },
                                    { title: 'Uniones', url: '/shop/catalog?subcategory=Uniones' },
                                    { title: 'Adaptadores', url: '/shop/catalog?subcategory=Adaptadores' },
                                    { title: 'Regador', url: '/shop/catalog?subcategory=Regador' },
                                    { title: 'Regaderas', url: '/shop/catalog?subcategory=Regaderas' },
                                    { title: 'Aspersores', url: '/shop/catalog?subcategory=Aspersores' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Herramientas',
                                url: '/shop/catalog?category=Herramientas',
                                children: [
                                    { title: 'Tijeras de podar', url: '/shop/catalog?subcategory=Tijeras de podar' },
                                    { title: 'Machetes', url: '/shop/catalog?subcategory=Machetes' },
                                    { title: 'Escobillas', url: '/shop/catalog?subcategory=Escobillas' },
                                    { title: 'Rastrillos', url: '/shop/catalog?subcategory=Rastrillos' },
                                    { title: 'Hoces', url: '/shop/catalog?subcategory=Hoces' },
                                    { title: 'Azadas', url: '/shop/catalog?subcategory=Azadas' },
                                    { title: 'Horquillas', url: '/shop/catalog?subcategory=Horquillas' },
                                    { title: 'Kits', url: '/shop/catalog?subcategory=Kits' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Motosierras',
                                url: '/shop/catalog?category=Motosierras',
                                children: [
                                    { title: 'A nafta', url: '/shop/catalog?subcategory=A nafta' },
                                    { title: 'A bateria', url: '/shop/catalog?subcategory=A bateria' },
                                    { title: 'Electricas', url: '/shop/catalog?subcategory=Electricas' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Desmalezadoras',
                                url: '/shop/catalog?category=Desmalezadoras',
                                children: [
                                    { title: 'A nafta', url: '/shop/catalog?subcategory=A nafta' },
                                    { title: 'A bateria', url: '/shop/catalog?subcategory=A bateria' },
                                ],
                            },
                        ],
                    },
                    { size: 3, links: [{ title: 'Grasas y aceites', url: '/shop/catalog?category=Grasas y aceites', children: [] }] },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Sopladores',
                                url: '/shop/catalog?category=Sopladores',
                                children: [
                                    { title: 'A nafta', url: '/shop/catalog?subcategory=A nafta' },
                                    { title: 'A bateria', url: '/shop/catalog?subcategory=A bateria' },
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
                size: 'xl',
                columns: [
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Ollas, sartenes, planchas',
                                url: '/shop/catalog?category=Ollas, sartenes, planchas',
                                children: [
                                    { title: 'Acero inoxidable', url: '/shop/catalog?subcategory=Acero inoxidable' },
                                    { title: 'Antiadherente paris', url: '/shop/catalog?subcategory=Antiadherente paris' },
                                    { title: 'Hierro', url: '/shop/catalog?subcategory=Hierro' },
                                    { title: 'Antiadherente', url: '/shop/catalog?subcategory=Antiadherente' },
                                    {
                                        title: 'Aluminio fundido con antiadherente',
                                        url: '/shop/catalog?subcategory=Aluminio fundido con antiadherente',
                                    },
                                    { title: 'Esmaltada', url: '/shop/catalog?subcategory=Esmaltada' },
                                    { title: 'Aluminio pulido', url: '/shop/catalog?subcategory=Aluminio pulido' },
                                    { title: 'Acero pulido', url: '/shop/catalog?subcategory=Acero pulido' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
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
                                    { title: 'Tijeras', url: '/shop/catalog?subcategory=Tijeras' },
                                    { title: 'Trinchar - parrilla', url: '/shop/catalog?subcategory=Trinchar - parrilla' },
                                    { title: 'Tacos', url: '/shop/catalog?subcategory=Tacos' },
                                    { title: 'Cuchillos de monte', url: '/shop/catalog?subcategory=Cuchillos de monte' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Accesorios',
                                url: '/shop/catalog?category=Accesorios',
                                children: [
                                    { title: 'Cocina', url: '/shop/catalog?subcategory=Cocina' },
                                    { title: 'Utensilios', url: '/shop/catalog?subcategory=Utensilios' },
                                    { title: 'Varios', url: '/shop/catalog?subcategory=Varios' },
                                    { title: 'Vino & bar', url: '/shop/catalog?subcategory=Vino & bar' },
                                    { title: 'Espatulas', url: '/shop/catalog?subcategory=Espatulas' },
                                    { title: 'Pinzas', url: '/shop/catalog?subcategory=Pinzas' },
                                    { title: 'Chairas y afiladores', url: '/shop/catalog?subcategory=Chairas y afiladores' },
                                    { title: 'Ralladores', url: '/shop/catalog?subcategory=Ralladores' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Vajilla',
                                url: '/shop/catalog?category=Vajilla',
                                children: [
                                    { title: 'Vidrio', url: '/shop/catalog?subcategory=Vidrio' },
                                    { title: 'Ceramica', url: '/shop/catalog?subcategory=Ceramica' },
                                    { title: 'Te y cafe de vidrio', url: '/shop/catalog?subcategory=Te y cafe de vidrio' },
                                    { title: 'Porcelana', url: '/shop/catalog?subcategory=Porcelana' },
                                    { title: 'Bols apilable de vidrio', url: '/shop/catalog?subcategory=Bols apilable de vidrio' },
                                    { title: 'Acero inoxidable', url: '/shop/catalog?subcategory=Acero inoxidable' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Horno',
                                url: '/shop/catalog?category=Horno',
                                children: [
                                    { title: 'Antiadherente', url: '/shop/catalog?subcategory=Antiadherente' },
                                    { title: 'Aluminio pulido', url: '/shop/catalog?subcategory=Aluminio pulido' },
                                    { title: 'Vidrio', url: '/shop/catalog?subcategory=Vidrio' },
                                    { title: 'Ceramica', url: '/shop/catalog?subcategory=Ceramica' },
                                    { title: 'Acero inoxidable', url: '/shop/catalog?subcategory=Acero inoxidable' },
                                    { title: 'Hierro', url: '/shop/catalog?subcategory=Hierro' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Termos',
                                url: '/shop/catalog?category=Termos',
                                children: [
                                    { title: 'Termo, mug', url: '/shop/catalog?subcategory=Termo, mug' },
                                    { title: 'Jarra', url: '/shop/catalog?subcategory=Jarra' },
                                    { title: 'Termo para comida', url: '/shop/catalog?subcategory=Termo para comida' },
                                    { title: 'Tapones', url: '/shop/catalog?subcategory=Tapones' },
                                    { title: 'Conservadoras', url: '/shop/catalog?subcategory=Conservadoras' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Cristaleria, copas, vasos, jarras',
                                url: '/shop/catalog?category=Cristaleria, copas, vasos, jarras',
                                children: [
                                    { title: 'Vasos vidrio', url: '/shop/catalog?subcategory=Vasos vidrio' },
                                    { title: 'Copas vidrio', url: '/shop/catalog?subcategory=Copas vidrio' },
                                    { title: 'Jarras vidrio', url: '/shop/catalog?subcategory=Jarras vidrio' },
                                    { title: 'Cerveza', url: '/shop/catalog?subcategory=Cerveza' },
                                ],
                            },
                        ],
                    },
                    { size: 3, links: [{ title: 'Tablas', url: '/shop/catalog?category=Tablas', children: [] }] },
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
                size: 'xl',
                columns: [
                    {
                        size: 3,
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
                        size: 3,
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
                        size: 3,
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
                        size: 3,
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
                    { size: 3, links: [{ title: 'Extractores', url: '/shop/catalog?category=Extractores', children: [] }] },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Ayudantes de cocina',
                                url: '/shop/catalog?category=Ayudantes de cocina',
                                children: [
                                    { title: 'Mixers', url: '/shop/catalog?subcategory=Mixers' },
                                    { title: 'Picadoras de carne', url: '/shop/catalog?subcategory=Picadoras de carne' },
                                    { title: 'Cortadora de fiambre', url: '/shop/catalog?subcategory=Cortadora de fiambre' },
                                    { title: 'Exprimidores', url: '/shop/catalog?subcategory=Exprimidores' },
                                    { title: 'Multiprocesadores', url: '/shop/catalog?subcategory=Multiprocesadores' },
                                ],
                            },
                        ],
                    },
                    { size: 3, links: [{ title: 'Batidoras', url: '/shop/catalog?category=Batidoras', children: [] }] },
                    { size: 3, links: [{ title: 'Licuadoras', url: '/shop/catalog?category=Licuadoras', children: [] }] },
                ],
            },
        },
    },
    {
        title: 'PINTURAS',
        url: '/shop/catalog?family=Pinturas',
        submenu: {
            type: 'megamenu',
            menu: {
                size: 'xl',
                columns: [
                    {
                        size: 3,
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
                        size: 3,
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
                        size: 3,
                        links: [
                            {
                                title: 'Accesorios',
                                url: '/shop/catalog?category=Accesorios',
                                children: [
                                    { title: 'Pinceles', url: '/shop/catalog?subcategory=Pinceles' },
                                    { title: 'Rodillos', url: '/shop/catalog?subcategory=Rodillos' },
                                    { title: 'Pinceletas', url: '/shop/catalog?subcategory=Pinceletas' },
                                    { title: 'Bandejas', url: '/shop/catalog?subcategory=Bandejas' },
                                    { title: 'Venda p/pared', url: '/shop/catalog?subcategory=Venda p/pared' },
                                    { title: 'Extensores', url: '/shop/catalog?subcategory=Extensores' },
                                    { title: 'Kits', url: '/shop/catalog?subcategory=Kits' },
                                    { title: 'Jarras', url: '/shop/catalog?subcategory=Jarras' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Madera',
                                url: '/shop/catalog?category=Madera',
                                children: [
                                    { title: 'Barniz', url: '/shop/catalog?subcategory=Barniz' },
                                    { title: 'Protectores', url: '/shop/catalog?subcategory=Protectores' },
                                    { title: 'Lacas y plastificantes', url: '/shop/catalog?subcategory=Lacas y plastificantes' },
                                    { title: 'Protectores (base agua)', url: '/shop/catalog?subcategory=Protectores (base agua)' },
                                    { title: 'Protectores (para deck)', url: '/shop/catalog?subcategory=Protectores (para deck)' },
                                    {
                                        title: 'Lacas y lastificante (base agua)',
                                        url: '/shop/catalog?subcategory=Lacas y lastificante (base agua)',
                                    },
                                    { title: 'Esmaltes', url: '/shop/catalog?subcategory=Esmaltes' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Aerosol',
                                url: '/shop/catalog?category=Aerosol',
                                children: [
                                    { title: 'Esmaltes', url: '/shop/catalog?subcategory=Esmaltes' },
                                    { title: 'Especiales', url: '/shop/catalog?subcategory=Especiales' },
                                    { title: 'Alta temperatura', url: '/shop/catalog?subcategory=Alta temperatura' },
                                    {
                                        title: 'Aceites, grasas y lubricantes',
                                        url: '/shop/catalog?subcategory=Aceites, grasas y lubricantes',
                                    },
                                    { title: 'Espuma poliuretano', url: '/shop/catalog?subcategory=Espuma poliuretano' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Complementos',
                                url: '/shop/catalog?category=Complementos',
                                children: [
                                    { title: 'Metal', url: '/shop/catalog?subcategory=Metal' },
                                    { title: 'Madera', url: '/shop/catalog?subcategory=Madera' },
                                    { title: 'Paredes', url: '/shop/catalog?subcategory=Paredes' },
                                    { title: 'Restaurador y mateantes', url: '/shop/catalog?subcategory=Restaurador y mateantes' },
                                    { title: 'Galvanizado', url: '/shop/catalog?subcategory=Galvanizado' },
                                    { title: 'Epoxi', url: '/shop/catalog?subcategory=Epoxi' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Metal',
                                url: '/shop/catalog?category=Metal',
                                children: [
                                    { title: 'Esmaltes', url: '/shop/catalog?subcategory=Esmaltes' },
                                    { title: 'Esmalte', url: '/shop/catalog?subcategory=Esmalte' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Entonadores',
                                url: '/shop/catalog?category=Entonadores',
                                children: [
                                    { title: 'Madera', url: '/shop/catalog?subcategory=Madera' },
                                    { title: 'Base agua', url: '/shop/catalog?subcategory=Base agua' },
                                    { title: 'Universal', url: '/shop/catalog?subcategory=Universal' },
                                ],
                            },
                        ],
                    },
                ],
            },
        },
    },
];

export default [
    ...header,
    {
        title: 'SERVICIO TÉCNICO',
        url: '/site/contact-us',
    },
];
