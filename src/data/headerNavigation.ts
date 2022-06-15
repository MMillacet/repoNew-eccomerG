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
                                url: '/shop/catalog?family=Herramientas&category=Manuales',
                                children: [
                                    {
                                        title: 'Bocallaves y accesorios',
                                        url: '/shop/catalog?family=Herramientas&category=Manuales&subcategory=Bocallaves y accesorios',
                                    },
                                    { title: 'Llaves', url: '/shop/catalog?family=Herramientas&category=Manuales&subcategory=Llaves' },
                                    {
                                        title: 'Destornilladores',
                                        url: '/shop/catalog?family=Herramientas&category=Manuales&subcategory=Destornilladores',
                                    },
                                    {
                                        title: 'Limas y escofinas',
                                        url: '/shop/catalog?family=Herramientas&category=Manuales&subcategory=Limas y escofinas',
                                    },
                                    { title: 'Alicates', url: '/shop/catalog?family=Herramientas&category=Manuales&subcategory=Alicates' },
                                    {
                                        title: 'Destonilladores',
                                        url: '/shop/catalog?family=Herramientas&category=Manuales&subcategory=Destonilladores',
                                    },
                                    {
                                        title: 'Martillos',
                                        url: '/shop/catalog?family=Herramientas&category=Manuales&subcategory=Martillos',
                                    },
                                    {
                                        title: 'Espatulas',
                                        url: '/shop/catalog?family=Herramientas&category=Manuales&subcategory=Espatulas',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Accesorios',
                                url: '/shop/catalog?family=Herramientas&category=Accesorios',
                                children: [
                                    { title: 'Mechas', url: '/shop/catalog?family=Herramientas&category=Accesorios&subcategory=Mechas' },
                                    {
                                        title: 'Puntas y cinceles',
                                        url: '/shop/catalog?family=Herramientas&category=Accesorios&subcategory=Puntas y cinceles',
                                    },
                                    {
                                        title: 'Hojas de sierra circular',
                                        url: '/shop/catalog?family=Herramientas&category=Accesorios&subcategory=Hojas de sierra circular',
                                    },
                                    {
                                        title: 'Sierra sable',
                                        url: '/shop/catalog?family=Herramientas&category=Accesorios&subcategory=Sierra sable',
                                    },
                                    {
                                        title: 'Adaptadores',
                                        url: '/shop/catalog?family=Herramientas&category=Accesorios&subcategory=Adaptadores',
                                    },
                                    {
                                        title: 'Hojas p/multifincion',
                                        url: '/shop/catalog?family=Herramientas&category=Accesorios&subcategory=Hojas p/multifincion',
                                    },
                                    { title: 'Coronas', url: '/shop/catalog?family=Herramientas&category=Accesorios&subcategory=Coronas' },
                                    {
                                        title: 'Hojas de sierra',
                                        url: '/shop/catalog?family=Herramientas&category=Accesorios&subcategory=Hojas de sierra',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Electricas',
                                url: '/shop/catalog?family=Herramientas&category=Electricas',
                                children: [
                                    {
                                        title: 'Hidrolavadoras y accesorios',
                                        url: '/shop/catalog?family=Herramientas&category=Electricas&subcategory=Hidrolavadoras y accesorios',
                                    },
                                    {
                                        title: 'Equipos de soldar y accesorios',
                                        url: '/shop/catalog?family=Herramientas&category=Electricas&subcategory=Equipos de soldar y accesorios',
                                    },
                                    { title: 'Sierras', url: '/shop/catalog?family=Herramientas&category=Electricas&subcategory=Sierras' },
                                    {
                                        title: 'Amoladoras',
                                        url: '/shop/catalog?family=Herramientas&category=Electricas&subcategory=Amoladoras',
                                    },
                                    {
                                        title: 'Taladros',
                                        url: '/shop/catalog?family=Herramientas&category=Electricas&subcategory=Taladros',
                                    },
                                    {
                                        title: 'Compresores',
                                        url: '/shop/catalog?family=Herramientas&category=Electricas&subcategory=Compresores',
                                    },
                                    { title: 'Bombas', url: '/shop/catalog?family=Herramientas&category=Electricas&subcategory=Bombas' },
                                    {
                                        title: 'Lijadoras',
                                        url: '/shop/catalog?family=Herramientas&category=Electricas&subcategory=Lijadoras',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'A bateria',
                                url: '/shop/catalog?family=Herramientas&category=A bateria',
                                children: [
                                    {
                                        title: 'Baterias y cargadores',
                                        url: '/shop/catalog?family=Herramientas&category=A bateria&subcategory=Baterias y cargadores',
                                    },
                                    { title: 'Taladros', url: '/shop/catalog?family=Herramientas&category=A bateria&subcategory=Taladros' },
                                    {
                                        title: 'Llaves de impacto',
                                        url: '/shop/catalog?family=Herramientas&category=A bateria&subcategory=Llaves de impacto',
                                    },
                                    {
                                        title: 'Amoladoras',
                                        url: '/shop/catalog?family=Herramientas&category=A bateria&subcategory=Amoladoras',
                                    },
                                    { title: 'Sierras', url: '/shop/catalog?family=Herramientas&category=A bateria&subcategory=Sierras' },
                                    { title: 'Sierra', url: '/shop/catalog?family=Herramientas&category=A bateria&subcategory=Sierra' },
                                    { title: 'Varios', url: '/shop/catalog?family=Herramientas&category=A bateria&subcategory=Varios' },
                                    {
                                        title: 'Rotomartillos',
                                        url: '/shop/catalog?family=Herramientas&category=A bateria&subcategory=Rotomartillos',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Medicion',
                                url: '/shop/catalog?family=Herramientas&category=Medicion',
                                children: [
                                    { title: 'Niveles', url: '/shop/catalog?family=Herramientas&category=Medicion&subcategory=Niveles' },
                                    {
                                        title: 'Cintas metricas',
                                        url: '/shop/catalog?family=Herramientas&category=Medicion&subcategory=Cintas metricas',
                                    },
                                    {
                                        title: 'Escuadras',
                                        url: '/shop/catalog?family=Herramientas&category=Medicion&subcategory=Escuadras',
                                    },
                                    { title: 'Otros', url: '/shop/catalog?family=Herramientas&category=Medicion&subcategory=Otros' },
                                    { title: 'Laser', url: '/shop/catalog?family=Herramientas&category=Medicion&subcategory=Laser' },
                                    { title: 'Reglas', url: '/shop/catalog?family=Herramientas&category=Medicion&subcategory=Reglas' },
                                    { title: 'Galgas', url: '/shop/catalog?family=Herramientas&category=Medicion&subcategory=Galgas' },
                                    { title: 'Metros', url: '/shop/catalog?family=Herramientas&category=Medicion&subcategory=Metros' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'A combustion',
                                url: '/shop/catalog?family=Herramientas&category=A combustion',
                                children: [
                                    {
                                        title: 'Generadores',
                                        url: '/shop/catalog?family=Herramientas&category=A combustion&subcategory=Generadores',
                                    },
                                    {
                                        title: 'Motobombas',
                                        url: '/shop/catalog?family=Herramientas&category=A combustion&subcategory=Motobombas',
                                    },
                                    {
                                        title: 'Hidrolavadoras y accesorios',
                                        url: '/shop/catalog?family=Herramientas&category=A combustion&subcategory=Hidrolavadoras y accesorios',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Varios',
                                url: '/shop/catalog?family=Herramientas&category=Varios',
                                children: [
                                    {
                                        title: 'Convertidor de voltaje',
                                        url: '/shop/catalog?family=Herramientas&category=Varios&subcategory=Convertidor de voltaje',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Mechas',
                                url: '/shop/catalog?family=Herramientas&category=Mechas',
                                children: [
                                    {
                                        title: 'Hojas p/multifincion',
                                        url: '/shop/catalog?family=Herramientas&category=Mechas&subcategory=Hojas p/multifincion',
                                    },
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
                size: 'xl',
                columns: [
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Proteccion',
                                url: '/shop/catalog?family=Ferreteria&category=Proteccion',
                                children: [
                                    {
                                        title: 'Zapatos de seguridad',
                                        url: '/shop/catalog?family=Ferreteria&category=Proteccion&subcategory=Zapatos de seguridad',
                                    },
                                    { title: 'Guantes', url: '/shop/catalog?family=Ferreteria&category=Proteccion&subcategory=Guantes' },
                                    { title: 'Gafas', url: '/shop/catalog?family=Ferreteria&category=Proteccion&subcategory=Gafas' },
                                    { title: 'Eslingas', url: '/shop/catalog?family=Ferreteria&category=Proteccion&subcategory=Eslingas' },
                                    { title: 'Caretas', url: '/shop/catalog?family=Ferreteria&category=Proteccion&subcategory=Caretas' },
                                    {
                                        title: 'Equipos de lluvia',
                                        url: '/shop/catalog?family=Ferreteria&category=Proteccion&subcategory=Equipos de lluvia',
                                    },
                                    { title: 'Botas', url: '/shop/catalog?family=Ferreteria&category=Proteccion&subcategory=Botas' },
                                    {
                                        title: 'Respiratoria',
                                        url: '/shop/catalog?family=Ferreteria&category=Proteccion&subcategory=Respiratoria',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Consumibles',
                                url: '/shop/catalog?family=Ferreteria&category=Consumibles',
                                children: [
                                    { title: 'Fijacion', url: '/shop/catalog?family=Ferreteria&category=Consumibles&subcategory=Fijacion' },
                                    {
                                        title: 'Remachees',
                                        url: '/shop/catalog?family=Ferreteria&category=Consumibles&subcategory=Remachees',
                                    },
                                    {
                                        title: 'Aceites, grasas y lubricantes',
                                        url: '/shop/catalog?family=Ferreteria&category=Consumibles&subcategory=Aceites, grasas y lubricantes',
                                    },
                                    {
                                        title: 'Precintos',
                                        url: '/shop/catalog?family=Ferreteria&category=Consumibles&subcategory=Precintos',
                                    },
                                    {
                                        title: 'Aprietacables',
                                        url: '/shop/catalog?family=Ferreteria&category=Consumibles&subcategory=Aprietacables',
                                    },
                                    {
                                        title: 'Grilletes',
                                        url: '/shop/catalog?family=Ferreteria&category=Consumibles&subcategory=Grilletes',
                                    },
                                    {
                                        title: 'Cables de acero',
                                        url: '/shop/catalog?family=Ferreteria&category=Consumibles&subcategory=Cables de acero',
                                    },
                                    {
                                        title: 'Mosquetones',
                                        url: '/shop/catalog?family=Ferreteria&category=Consumibles&subcategory=Mosquetones',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Abrasivos',
                                url: '/shop/catalog?family=Ferreteria&category=Abrasivos',
                                children: [
                                    {
                                        title: 'Discos c/velcro',
                                        url: '/shop/catalog?family=Ferreteria&category=Abrasivos&subcategory=Discos c/velcro',
                                    },
                                    {
                                        title: 'Discos flap',
                                        url: '/shop/catalog?family=Ferreteria&category=Abrasivos&subcategory=Discos flap',
                                    },
                                    {
                                        title: 'Lijas en banda',
                                        url: '/shop/catalog?family=Ferreteria&category=Abrasivos&subcategory=Lijas en banda',
                                    },
                                    {
                                        title: 'Lijas al agua',
                                        url: '/shop/catalog?family=Ferreteria&category=Abrasivos&subcategory=Lijas al agua',
                                    },
                                    {
                                        title: 'Lijas en rollo',
                                        url: '/shop/catalog?family=Ferreteria&category=Abrasivos&subcategory=Lijas en rollo',
                                    },
                                    { title: 'Lijas', url: '/shop/catalog?family=Ferreteria&category=Abrasivos&subcategory=Lijas' },
                                    {
                                        title: 'Lijas p/madera',
                                        url: '/shop/catalog?family=Ferreteria&category=Abrasivos&subcategory=Lijas p/madera',
                                    },
                                    {
                                        title: 'Tela esmeril',
                                        url: '/shop/catalog?family=Ferreteria&category=Abrasivos&subcategory=Tela esmeril',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Varios',
                                url: '/shop/catalog?family=Ferreteria&category=Varios',
                                children: [
                                    { title: 'Lonas', url: '/shop/catalog?family=Ferreteria&category=Varios&subcategory=Lonas' },
                                    { title: 'Cuerdas', url: '/shop/catalog?family=Ferreteria&category=Varios&subcategory=Cuerdas' },
                                    {
                                        title: 'Sillas de playa',
                                        url: '/shop/catalog?family=Ferreteria&category=Varios&subcategory=Sillas de playa',
                                    },
                                    { title: 'Felpudos', url: '/shop/catalog?family=Ferreteria&category=Varios&subcategory=Felpudos' },
                                    {
                                        title: 'Mallas electrosoldadas',
                                        url: '/shop/catalog?family=Ferreteria&category=Varios&subcategory=Mallas electrosoldadas',
                                    },
                                    { title: 'Tendederos', url: '/shop/catalog?family=Ferreteria&category=Varios&subcategory=Tendederos' },
                                    { title: 'Escobas', url: '/shop/catalog?family=Ferreteria&category=Varios&subcategory=Escobas' },
                                    { title: 'Baldes', url: '/shop/catalog?family=Ferreteria&category=Varios&subcategory=Baldes' },
                                ],
                            },
                        ],
                    },
                    { size: 3, links: [{ title: 'Candados', url: '/shop/catalog?family=Ferreteria&category=Candados', children: [] }] },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Discos de corte y desbaste',
                                url: '/shop/catalog?family=Ferreteria&category=Discos de corte y desbaste',
                                children: [],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Escaleras',
                                url: '/shop/catalog?family=Ferreteria&category=Escaleras',
                                children: [
                                    { title: 'Aluminio', url: '/shop/catalog?family=Ferreteria&category=Escaleras&subcategory=Aluminio' },
                                    { title: 'Madera', url: '/shop/catalog?family=Ferreteria&category=Escaleras&subcategory=Madera' },
                                    {
                                        title: 'Accesorios',
                                        url: '/shop/catalog?family=Ferreteria&category=Escaleras&subcategory=Accesorios',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Herramientas',
                                url: '/shop/catalog?family=Ferreteria&category=Herramientas',
                                children: [
                                    { title: 'Palas', url: '/shop/catalog?family=Ferreteria&category=Herramientas&subcategory=Palas' },
                                    {
                                        title: 'Cucharas de albañil',
                                        url: '/shop/catalog?family=Ferreteria&category=Herramientas&subcategory=Cucharas de albañil',
                                    },
                                    { title: 'Mangos', url: '/shop/catalog?family=Ferreteria&category=Herramientas&subcategory=Mangos' },
                                    {
                                        title: 'Arcos de sierra',
                                        url: '/shop/catalog?family=Ferreteria&category=Herramientas&subcategory=Arcos de sierra',
                                    },
                                    { title: 'Escobas', url: '/shop/catalog?family=Ferreteria&category=Herramientas&subcategory=Escobas' },
                                    { title: 'Hachas', url: '/shop/catalog?family=Ferreteria&category=Herramientas&subcategory=Hachas' },
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
                                url: '/shop/catalog?family=Agro y Jardin&category=Accesorios',
                                children: [
                                    { title: 'Cadenas', url: '/shop/catalog?family=Agro y Jardin&category=Accesorios&subcategory=Cadenas' },
                                    { title: 'Espadas', url: '/shop/catalog?family=Agro y Jardin&category=Accesorios&subcategory=Espadas' },
                                    {
                                        title: 'Carretes',
                                        url: '/shop/catalog?family=Agro y Jardin&category=Accesorios&subcategory=Carretes',
                                    },
                                    { title: 'Tanzas', url: '/shop/catalog?family=Agro y Jardin&category=Accesorios&subcategory=Tanzas' },
                                    {
                                        title: 'Podadoras',
                                        url: '/shop/catalog?family=Agro y Jardin&category=Accesorios&subcategory=Podadoras',
                                    },
                                    {
                                        title: 'Corta cercos',
                                        url: '/shop/catalog?family=Agro y Jardin&category=Accesorios&subcategory=Corta cercos',
                                    },
                                    { title: 'Brocas', url: '/shop/catalog?family=Agro y Jardin&category=Accesorios&subcategory=Brocas' },
                                    { title: 'Arnes', url: '/shop/catalog?family=Agro y Jardin&category=Accesorios&subcategory=Arnes' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Herraduras y clavos',
                                url: '/shop/catalog?family=Agro y Jardin&category=Herraduras y clavos',
                                children: [],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Riego',
                                url: '/shop/catalog?family=Agro y Jardin&category=Riego',
                                children: [
                                    { title: 'Mangueras', url: '/shop/catalog?family=Agro y Jardin&category=Riego&subcategory=Mangueras' },
                                    { title: 'Pistolas', url: '/shop/catalog?family=Agro y Jardin&category=Riego&subcategory=Pistolas' },
                                    {
                                        title: 'Acople rapido',
                                        url: '/shop/catalog?family=Agro y Jardin&category=Riego&subcategory=Acople rapido',
                                    },
                                    { title: 'Uniones', url: '/shop/catalog?family=Agro y Jardin&category=Riego&subcategory=Uniones' },
                                    {
                                        title: 'Adaptadores',
                                        url: '/shop/catalog?family=Agro y Jardin&category=Riego&subcategory=Adaptadores',
                                    },
                                    { title: 'Regador', url: '/shop/catalog?family=Agro y Jardin&category=Riego&subcategory=Regador' },
                                    { title: 'Regaderas', url: '/shop/catalog?family=Agro y Jardin&category=Riego&subcategory=Regaderas' },
                                    {
                                        title: 'Aspersores',
                                        url: '/shop/catalog?family=Agro y Jardin&category=Riego&subcategory=Aspersores',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Herramientas',
                                url: '/shop/catalog?family=Agro y Jardin&category=Herramientas',
                                children: [
                                    {
                                        title: 'Tijeras de podar',
                                        url: '/shop/catalog?family=Agro y Jardin&category=Herramientas&subcategory=Tijeras de podar',
                                    },
                                    {
                                        title: 'Machetes',
                                        url: '/shop/catalog?family=Agro y Jardin&category=Herramientas&subcategory=Machetes',
                                    },
                                    {
                                        title: 'Escobillas',
                                        url: '/shop/catalog?family=Agro y Jardin&category=Herramientas&subcategory=Escobillas',
                                    },
                                    {
                                        title: 'Rastrillos',
                                        url: '/shop/catalog?family=Agro y Jardin&category=Herramientas&subcategory=Rastrillos',
                                    },
                                    { title: 'Hoces', url: '/shop/catalog?family=Agro y Jardin&category=Herramientas&subcategory=Hoces' },
                                    { title: 'Azadas', url: '/shop/catalog?family=Agro y Jardin&category=Herramientas&subcategory=Azadas' },
                                    {
                                        title: 'Horquillas',
                                        url: '/shop/catalog?family=Agro y Jardin&category=Herramientas&subcategory=Horquillas',
                                    },
                                    { title: 'Kits', url: '/shop/catalog?family=Agro y Jardin&category=Herramientas&subcategory=Kits' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Motosierras',
                                url: '/shop/catalog?family=Agro y Jardin&category=Motosierras',
                                children: [
                                    {
                                        title: 'A nafta',
                                        url: '/shop/catalog?family=Agro y Jardin&category=Motosierras&subcategory=A nafta',
                                    },
                                    {
                                        title: 'A bateria',
                                        url: '/shop/catalog?family=Agro y Jardin&category=Motosierras&subcategory=A bateria',
                                    },
                                    {
                                        title: 'Electricas',
                                        url: '/shop/catalog?family=Agro y Jardin&category=Motosierras&subcategory=Electricas',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Desmalezadoras',
                                url: '/shop/catalog?family=Agro y Jardin&category=Desmalezadoras',
                                children: [
                                    {
                                        title: 'A nafta',
                                        url: '/shop/catalog?family=Agro y Jardin&category=Desmalezadoras&subcategory=A nafta',
                                    },
                                    {
                                        title: 'A bateria',
                                        url: '/shop/catalog?family=Agro y Jardin&category=Desmalezadoras&subcategory=A bateria',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Grasas y aceites',
                                url: '/shop/catalog?family=Agro y Jardin&category=Grasas y aceites',
                                children: [],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Sopladores',
                                url: '/shop/catalog?family=Agro y Jardin&category=Sopladores',
                                children: [
                                    { title: 'A nafta', url: '/shop/catalog?family=Agro y Jardin&category=Sopladores&subcategory=A nafta' },
                                    {
                                        title: 'A bateria',
                                        url: '/shop/catalog?family=Agro y Jardin&category=Sopladores&subcategory=A bateria',
                                    },
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
                                url: '/shop/catalog?family=Bazar&category=Ollas, sartenes, planchas',
                                children: [
                                    {
                                        title: 'Acero inoxidable',
                                        url: '/shop/catalog?family=Bazar&category=Ollas, sartenes, planchas&subcategory=Acero inoxidable',
                                    },
                                    {
                                        title: 'Antiadherente paris',
                                        url: '/shop/catalog?family=Bazar&category=Ollas, sartenes, planchas&subcategory=Antiadherente paris',
                                    },
                                    {
                                        title: 'Hierro',
                                        url: '/shop/catalog?family=Bazar&category=Ollas, sartenes, planchas&subcategory=Hierro',
                                    },
                                    {
                                        title: 'Antiadherente',
                                        url: '/shop/catalog?family=Bazar&category=Ollas, sartenes, planchas&subcategory=Antiadherente',
                                    },
                                    {
                                        title: 'Aluminio fundido con antiadherente',
                                        url: '/shop/catalog?family=Bazar&category=Ollas, sartenes, planchas&subcategory=Aluminio fundido con antiadherente',
                                    },
                                    {
                                        title: 'Esmaltada',
                                        url: '/shop/catalog?family=Bazar&category=Ollas, sartenes, planchas&subcategory=Esmaltada',
                                    },
                                    {
                                        title: 'Aluminio pulido',
                                        url: '/shop/catalog?family=Bazar&category=Ollas, sartenes, planchas&subcategory=Aluminio pulido',
                                    },
                                    {
                                        title: 'Acero pulido',
                                        url: '/shop/catalog?family=Bazar&category=Ollas, sartenes, planchas&subcategory=Acero pulido',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Cubiertos, cuchillos y tijeras',
                                url: '/shop/catalog?family=Bazar&category=Cubiertos, cuchillos y tijeras',
                                children: [
                                    {
                                        title: 'Cuchillas',
                                        url: '/shop/catalog?family=Bazar&category=Cubiertos, cuchillos y tijeras&subcategory=Cuchillas',
                                    },
                                    {
                                        title: 'Cubierto acero inoxidable',
                                        url: '/shop/catalog?family=Bazar&category=Cubiertos, cuchillos y tijeras&subcategory=Cubierto acero inoxidable',
                                    },
                                    {
                                        title: 'Cubierto mango polipropileno',
                                        url: '/shop/catalog?family=Bazar&category=Cubiertos, cuchillos y tijeras&subcategory=Cubierto mango polipropileno',
                                    },
                                    {
                                        title: 'Cubierto mango madera',
                                        url: '/shop/catalog?family=Bazar&category=Cubiertos, cuchillos y tijeras&subcategory=Cubierto mango madera',
                                    },
                                    {
                                        title: 'Tijeras',
                                        url: '/shop/catalog?family=Bazar&category=Cubiertos, cuchillos y tijeras&subcategory=Tijeras',
                                    },
                                    {
                                        title: 'Trinchar - parrilla',
                                        url: '/shop/catalog?family=Bazar&category=Cubiertos, cuchillos y tijeras&subcategory=Trinchar - parrilla',
                                    },
                                    {
                                        title: 'Tacos',
                                        url: '/shop/catalog?family=Bazar&category=Cubiertos, cuchillos y tijeras&subcategory=Tacos',
                                    },
                                    {
                                        title: 'Cuchillos de monte',
                                        url: '/shop/catalog?family=Bazar&category=Cubiertos, cuchillos y tijeras&subcategory=Cuchillos de monte',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Accesorios',
                                url: '/shop/catalog?family=Bazar&category=Accesorios',
                                children: [
                                    { title: 'Cocina', url: '/shop/catalog?family=Bazar&category=Accesorios&subcategory=Cocina' },
                                    { title: 'Utensilios', url: '/shop/catalog?family=Bazar&category=Accesorios&subcategory=Utensilios' },
                                    { title: 'Varios', url: '/shop/catalog?family=Bazar&category=Accesorios&subcategory=Varios' },
                                    { title: 'Vino & bar', url: '/shop/catalog?family=Bazar&category=Accesorios&subcategory=Vino & bar' },
                                    { title: 'Espatulas', url: '/shop/catalog?family=Bazar&category=Accesorios&subcategory=Espatulas' },
                                    { title: 'Pinzas', url: '/shop/catalog?family=Bazar&category=Accesorios&subcategory=Pinzas' },
                                    {
                                        title: 'Chairas y afiladores',
                                        url: '/shop/catalog?family=Bazar&category=Accesorios&subcategory=Chairas y afiladores',
                                    },
                                    { title: 'Ralladores', url: '/shop/catalog?family=Bazar&category=Accesorios&subcategory=Ralladores' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Vajilla',
                                url: '/shop/catalog?family=Bazar&category=Vajilla',
                                children: [
                                    { title: 'Vidrio', url: '/shop/catalog?family=Bazar&category=Vajilla&subcategory=Vidrio' },
                                    { title: 'Ceramica', url: '/shop/catalog?family=Bazar&category=Vajilla&subcategory=Ceramica' },
                                    {
                                        title: 'Te y cafe de vidrio',
                                        url: '/shop/catalog?family=Bazar&category=Vajilla&subcategory=Te y cafe de vidrio',
                                    },
                                    { title: 'Porcelana', url: '/shop/catalog?family=Bazar&category=Vajilla&subcategory=Porcelana' },
                                    {
                                        title: 'Bols apilable de vidrio',
                                        url: '/shop/catalog?family=Bazar&category=Vajilla&subcategory=Bols apilable de vidrio',
                                    },
                                    {
                                        title: 'Acero inoxidable',
                                        url: '/shop/catalog?family=Bazar&category=Vajilla&subcategory=Acero inoxidable',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Horno',
                                url: '/shop/catalog?family=Bazar&category=Horno',
                                children: [
                                    { title: 'Antiadherente', url: '/shop/catalog?family=Bazar&category=Horno&subcategory=Antiadherente' },
                                    {
                                        title: 'Aluminio pulido',
                                        url: '/shop/catalog?family=Bazar&category=Horno&subcategory=Aluminio pulido',
                                    },
                                    { title: 'Vidrio', url: '/shop/catalog?family=Bazar&category=Horno&subcategory=Vidrio' },
                                    { title: 'Ceramica', url: '/shop/catalog?family=Bazar&category=Horno&subcategory=Ceramica' },
                                    {
                                        title: 'Acero inoxidable',
                                        url: '/shop/catalog?family=Bazar&category=Horno&subcategory=Acero inoxidable',
                                    },
                                    { title: 'Hierro', url: '/shop/catalog?family=Bazar&category=Horno&subcategory=Hierro' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Termos',
                                url: '/shop/catalog?family=Bazar&category=Termos',
                                children: [
                                    { title: 'Termo, mug', url: '/shop/catalog?family=Bazar&category=Termos&subcategory=Termo, mug' },
                                    { title: 'Jarra', url: '/shop/catalog?family=Bazar&category=Termos&subcategory=Jarra' },
                                    {
                                        title: 'Termo para comida',
                                        url: '/shop/catalog?family=Bazar&category=Termos&subcategory=Termo para comida',
                                    },
                                    { title: 'Tapones', url: '/shop/catalog?family=Bazar&category=Termos&subcategory=Tapones' },
                                    { title: 'Conservadoras', url: '/shop/catalog?family=Bazar&category=Termos&subcategory=Conservadoras' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Cristaleria, copas, vasos, jarras',
                                url: '/shop/catalog?family=Bazar&category=Cristaleria, copas, vasos, jarras',
                                children: [
                                    {
                                        title: 'Vasos vidrio',
                                        url: '/shop/catalog?family=Bazar&category=Cristaleria, copas, vasos, jarras&subcategory=Vasos vidrio',
                                    },
                                    {
                                        title: 'Copas vidrio',
                                        url: '/shop/catalog?family=Bazar&category=Cristaleria, copas, vasos, jarras&subcategory=Copas vidrio',
                                    },
                                    {
                                        title: 'Jarras vidrio',
                                        url: '/shop/catalog?family=Bazar&category=Cristaleria, copas, vasos, jarras&subcategory=Jarras vidrio',
                                    },
                                    {
                                        title: 'Cerveza',
                                        url: '/shop/catalog?family=Bazar&category=Cristaleria, copas, vasos, jarras&subcategory=Cerveza',
                                    },
                                ],
                            },
                        ],
                    },
                    { size: 3, links: [{ title: 'Tablas', url: '/shop/catalog?family=Bazar&category=Tablas', children: [] }] },
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
                                url: '/shop/catalog?family=Electrodomesticos&category=Cocina',
                                children: [
                                    { title: 'Anafes', url: '/shop/catalog?family=Electrodomesticos&category=Cocina&subcategory=Anafes' },
                                    {
                                        title: 'Freidoras',
                                        url: '/shop/catalog?family=Electrodomesticos&category=Cocina&subcategory=Freidoras',
                                    },
                                    {
                                        title: 'Microondas',
                                        url: '/shop/catalog?family=Electrodomesticos&category=Cocina&subcategory=Microondas',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Soportes',
                                url: '/shop/catalog?family=Electrodomesticos&category=Soportes',
                                children: [
                                    { title: 'Tv', url: '/shop/catalog?family=Electrodomesticos&category=Soportes&subcategory=Tv' },
                                    {
                                        title: 'Electrodomesticos',
                                        url: '/shop/catalog?family=Electrodomesticos&category=Soportes&subcategory=Electrodomesticos',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Desayuno',
                                url: '/shop/catalog?family=Electrodomesticos&category=Desayuno',
                                children: [
                                    {
                                        title: 'Jarras electricas',
                                        url: '/shop/catalog?family=Electrodomesticos&category=Desayuno&subcategory=Jarras electricas',
                                    },
                                    {
                                        title: 'Cafeteras',
                                        url: '/shop/catalog?family=Electrodomesticos&category=Desayuno&subcategory=Cafeteras',
                                    },
                                    {
                                        title: 'Tostadora',
                                        url: '/shop/catalog?family=Electrodomesticos&category=Desayuno&subcategory=Tostadora',
                                    },
                                    {
                                        title: 'Sandwicheras',
                                        url: '/shop/catalog?family=Electrodomesticos&category=Desayuno&subcategory=Sandwicheras',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Calefaccion',
                                url: '/shop/catalog?family=Electrodomesticos&category=Calefaccion',
                                children: [
                                    {
                                        title: 'Estufas',
                                        url: '/shop/catalog?family=Electrodomesticos&category=Calefaccion&subcategory=Estufas',
                                    },
                                    {
                                        title: 'Caloventiladores',
                                        url: '/shop/catalog?family=Electrodomesticos&category=Calefaccion&subcategory=Caloventiladores',
                                    },
                                    {
                                        title: 'Calienta camas',
                                        url: '/shop/catalog?family=Electrodomesticos&category=Calefaccion&subcategory=Calienta camas',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [{ title: 'Extractores', url: '/shop/catalog?family=Electrodomesticos&category=Extractores', children: [] }],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Ayudantes de cocina',
                                url: '/shop/catalog?family=Electrodomesticos&category=Ayudantes de cocina',
                                children: [
                                    {
                                        title: 'Mixers',
                                        url: '/shop/catalog?family=Electrodomesticos&category=Ayudantes de cocina&subcategory=Mixers',
                                    },
                                    {
                                        title: 'Picadoras de carne',
                                        url: '/shop/catalog?family=Electrodomesticos&category=Ayudantes de cocina&subcategory=Picadoras de carne',
                                    },
                                    {
                                        title: 'Cortadora de fiambre',
                                        url: '/shop/catalog?family=Electrodomesticos&category=Ayudantes de cocina&subcategory=Cortadora de fiambre',
                                    },
                                    {
                                        title: 'Exprimidores',
                                        url: '/shop/catalog?family=Electrodomesticos&category=Ayudantes de cocina&subcategory=Exprimidores',
                                    },
                                    {
                                        title: 'Multiprocesadores',
                                        url: '/shop/catalog?family=Electrodomesticos&category=Ayudantes de cocina&subcategory=Multiprocesadores',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [{ title: 'Batidoras', url: '/shop/catalog?family=Electrodomesticos&category=Batidoras', children: [] }],
                    },
                    {
                        size: 3,
                        links: [{ title: 'Licuadoras', url: '/shop/catalog?family=Electrodomesticos&category=Licuadoras', children: [] }],
                    },
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
                                url: '/shop/catalog?family=Pinturas&category=Paredes',
                                children: [
                                    { title: 'Base agua', url: '/shop/catalog?family=Pinturas&category=Paredes&subcategory=Base agua' },
                                    {
                                        title: 'Sistema selfcolors',
                                        url: '/shop/catalog?family=Pinturas&category=Paredes&subcategory=Sistema selfcolors',
                                    },
                                    { title: 'Especiales', url: '/shop/catalog?family=Pinturas&category=Paredes&subcategory=Especiales' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Madera y metal',
                                url: '/shop/catalog?family=Pinturas&category=Madera y metal',
                                children: [
                                    {
                                        title: 'Esmaltes',
                                        url: '/shop/catalog?family=Pinturas&category=Madera y metal&subcategory=Esmaltes',
                                    },
                                    {
                                        title: 'Sistema selfcolors',
                                        url: '/shop/catalog?family=Pinturas&category=Madera y metal&subcategory=Sistema selfcolors',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Accesorios',
                                url: '/shop/catalog?family=Pinturas&category=Accesorios',
                                children: [
                                    { title: 'Pinceles', url: '/shop/catalog?family=Pinturas&category=Accesorios&subcategory=Pinceles' },
                                    { title: 'Rodillos', url: '/shop/catalog?family=Pinturas&category=Accesorios&subcategory=Rodillos' },
                                    {
                                        title: 'Pinceletas',
                                        url: '/shop/catalog?family=Pinturas&category=Accesorios&subcategory=Pinceletas',
                                    },
                                    { title: 'Bandejas', url: '/shop/catalog?family=Pinturas&category=Accesorios&subcategory=Bandejas' },
                                    {
                                        title: 'Venda p/pared',
                                        url: '/shop/catalog?family=Pinturas&category=Accesorios&subcategory=Venda p/pared',
                                    },
                                    {
                                        title: 'Extensores',
                                        url: '/shop/catalog?family=Pinturas&category=Accesorios&subcategory=Extensores',
                                    },
                                    { title: 'Kits', url: '/shop/catalog?family=Pinturas&category=Accesorios&subcategory=Kits' },
                                    { title: 'Jarras', url: '/shop/catalog?family=Pinturas&category=Accesorios&subcategory=Jarras' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Madera',
                                url: '/shop/catalog?family=Pinturas&category=Madera',
                                children: [
                                    { title: 'Barniz', url: '/shop/catalog?family=Pinturas&category=Madera&subcategory=Barniz' },
                                    { title: 'Protectores', url: '/shop/catalog?family=Pinturas&category=Madera&subcategory=Protectores' },
                                    {
                                        title: 'Lacas y plastificantes',
                                        url: '/shop/catalog?family=Pinturas&category=Madera&subcategory=Lacas y plastificantes',
                                    },
                                    {
                                        title: 'Protectores (base agua)',
                                        url: '/shop/catalog?family=Pinturas&category=Madera&subcategory=Protectores (base agua)',
                                    },
                                    {
                                        title: 'Protectores (para deck)',
                                        url: '/shop/catalog?family=Pinturas&category=Madera&subcategory=Protectores (para deck)',
                                    },
                                    {
                                        title: 'Lacas y lastificante (base agua)',
                                        url: '/shop/catalog?family=Pinturas&category=Madera&subcategory=Lacas y lastificante (base agua)',
                                    },
                                    { title: 'Esmaltes', url: '/shop/catalog?family=Pinturas&category=Madera&subcategory=Esmaltes' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Aerosol',
                                url: '/shop/catalog?family=Pinturas&category=Aerosol',
                                children: [
                                    { title: 'Esmaltes', url: '/shop/catalog?family=Pinturas&category=Aerosol&subcategory=Esmaltes' },
                                    { title: 'Especiales', url: '/shop/catalog?family=Pinturas&category=Aerosol&subcategory=Especiales' },
                                    {
                                        title: 'Alta temperatura',
                                        url: '/shop/catalog?family=Pinturas&category=Aerosol&subcategory=Alta temperatura',
                                    },
                                    {
                                        title: 'Aceites, grasas y lubricantes',
                                        url: '/shop/catalog?family=Pinturas&category=Aerosol&subcategory=Aceites, grasas y lubricantes',
                                    },
                                    {
                                        title: 'Espuma poliuretano',
                                        url: '/shop/catalog?family=Pinturas&category=Aerosol&subcategory=Espuma poliuretano',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Complementos',
                                url: '/shop/catalog?family=Pinturas&category=Complementos',
                                children: [
                                    { title: 'Metal', url: '/shop/catalog?family=Pinturas&category=Complementos&subcategory=Metal' },
                                    { title: 'Madera', url: '/shop/catalog?family=Pinturas&category=Complementos&subcategory=Madera' },
                                    { title: 'Paredes', url: '/shop/catalog?family=Pinturas&category=Complementos&subcategory=Paredes' },
                                    {
                                        title: 'Restaurador y mateantes',
                                        url: '/shop/catalog?family=Pinturas&category=Complementos&subcategory=Restaurador y mateantes',
                                    },
                                    {
                                        title: 'Galvanizado',
                                        url: '/shop/catalog?family=Pinturas&category=Complementos&subcategory=Galvanizado',
                                    },
                                    { title: 'Epoxi', url: '/shop/catalog?family=Pinturas&category=Complementos&subcategory=Epoxi' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Metal',
                                url: '/shop/catalog?family=Pinturas&category=Metal',
                                children: [
                                    { title: 'Esmaltes', url: '/shop/catalog?family=Pinturas&category=Metal&subcategory=Esmaltes' },
                                    { title: 'Esmalte', url: '/shop/catalog?family=Pinturas&category=Metal&subcategory=Esmalte' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Entonadores',
                                url: '/shop/catalog?family=Pinturas&category=Entonadores',
                                children: [
                                    { title: 'Madera', url: '/shop/catalog?family=Pinturas&category=Entonadores&subcategory=Madera' },
                                    { title: 'Base agua', url: '/shop/catalog?family=Pinturas&category=Entonadores&subcategory=Base agua' },
                                    { title: 'Universal', url: '/shop/catalog?family=Pinturas&category=Entonadores&subcategory=Universal' },
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
