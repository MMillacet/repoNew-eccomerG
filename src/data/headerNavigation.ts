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
                                title: 'Eléctricas',
                                url: '/shop/catalog?family=Herramientas&category=Eléctricas',
                                children: [
                                    {
                                        title: 'Amoladoras',
                                        url: '/shop/catalog?family=Herramientas&category=Eléctricas&subcategory=Amoladoras',
                                    },
                                    {
                                        title: 'Taladros',
                                        url: '/shop/catalog?family=Herramientas&category=Eléctricas&subcategory=Taladros',
                                    },
                                    {
                                        title: 'Atornilladores',
                                        url: '/shop/catalog?family=Herramientas&category=Eléctricas&subcategory=Atornilladores',
                                    },
                                    {
                                        title: 'Hormigoneras',
                                        url: '/shop/catalog?family=Herramientas&category=Eléctricas&subcategory=Hormigoneras',
                                    },
                                    {
                                        title: 'Lijadoras',
                                        url: '/shop/catalog?family=Herramientas&category=Eléctricas&subcategory=Lijadoras',
                                    },
                                    { title: 'Sierras', url: '/shop/catalog?family=Herramientas&category=Eléctricas&subcategory=Sierras' },
                                    {
                                        title: 'Compresores',
                                        url: '/shop/catalog?family=Herramientas&category=Eléctricas&subcategory=Compresores',
                                    },
                                    {
                                        title: 'Equipos de soldar',
                                        url: '/shop/catalog?family=Herramientas&category=Eléctricas&subcategory=Equipos de soldar',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'A batería',
                                url: '/shop/catalog?family=Herramientas&category=A batería',
                                children: [
                                    {
                                        title: 'Amoladoras',
                                        url: '/shop/catalog?family=Herramientas&category=A batería&subcategory=Amoladoras',
                                    },
                                    { title: 'Taladros', url: '/shop/catalog?family=Herramientas&category=A batería&subcategory=Taladros' },
                                    {
                                        title: 'Atornilladores',
                                        url: '/shop/catalog?family=Herramientas&category=A batería&subcategory=Atornilladores',
                                    },
                                    {
                                        title: 'Compresores',
                                        url: '/shop/catalog?family=Herramientas&category=A batería&subcategory=Compresores',
                                    },
                                    {
                                        title: 'Lijadoras',
                                        url: '/shop/catalog?family=Herramientas&category=A batería&subcategory=Lijadoras',
                                    },
                                    {
                                        title: 'Mezcladores',
                                        url: '/shop/catalog?family=Herramientas&category=A batería&subcategory=Mezcladores',
                                    },
                                    {
                                        title: 'Rotomartillos',
                                        url: '/shop/catalog?family=Herramientas&category=A batería&subcategory=Rotomartillos',
                                    },
                                    { title: 'Sierras', url: '/shop/catalog?family=Herramientas&category=A batería&subcategory=Sierras' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'A combustión',
                                url: '/shop/catalog?family=Herramientas&category=A combustión',
                                children: [
                                    {
                                        title: 'Generadores',
                                        url: '/shop/catalog?family=Herramientas&category=A combustión&subcategory=Generadores',
                                    },
                                    {
                                        title: 'Hidrolavadoras y accesorios',
                                        url: '/shop/catalog?family=Herramientas&category=A combustión&subcategory=Hidrolavadoras y accesorios',
                                    },
                                    {
                                        title: 'Motobombas',
                                        url: '/shop/catalog?family=Herramientas&category=A combustión&subcategory=Motobombas',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Manuales',
                                url: '/shop/catalog?family=Herramientas&category=Manuales',
                                children: [
                                    { title: 'Aparejos', url: '/shop/catalog?family=Herramientas&category=Manuales&subcategory=Aparejos' },
                                    {
                                        title: 'Arcos de sierra',
                                        url: '/shop/catalog?family=Herramientas&category=Manuales&subcategory=Arcos de sierra',
                                    },
                                    {
                                        title: 'Bocallaves y accesorios',
                                        url: '/shop/catalog?family=Herramientas&category=Manuales&subcategory=Bocallaves y accesorios',
                                    },
                                    { title: 'Cepillos', url: '/shop/catalog?family=Herramientas&category=Manuales&subcategory=Cepillos' },
                                    { title: 'Cinceles', url: '/shop/catalog?family=Herramientas&category=Manuales&subcategory=Cinceles' },
                                    { title: 'Cizallas', url: '/shop/catalog?family=Herramientas&category=Manuales&subcategory=Cizallas' },
                                    {
                                        title: 'Corta cerámica y porcelanato',
                                        url: '/shop/catalog?family=Herramientas&category=Manuales&subcategory=Corta cerámica y porcelanato',
                                    },
                                    {
                                        title: 'Corta tubos',
                                        url: '/shop/catalog?family=Herramientas&category=Manuales&subcategory=Corta tubos',
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
                                    {
                                        title: 'Adaptadores',
                                        url: '/shop/catalog?family=Herramientas&category=Accesorios&subcategory=Adaptadores',
                                    },
                                    {
                                        title: 'Aspiradoras',
                                        url: '/shop/catalog?family=Herramientas&category=Accesorios&subcategory=Aspiradoras',
                                    },
                                    {
                                        title: 'Banco sierra ingletadora',
                                        url: '/shop/catalog?family=Herramientas&category=Accesorios&subcategory=Banco sierra ingletadora',
                                    },
                                    { title: 'Bridas', url: '/shop/catalog?family=Herramientas&category=Accesorios&subcategory=Bridas' },
                                    {
                                        title: 'Cepillos',
                                        url: '/shop/catalog?family=Herramientas&category=Accesorios&subcategory=Cepillos',
                                    },
                                    {
                                        title: 'Cinceles',
                                        url: '/shop/catalog?family=Herramientas&category=Accesorios&subcategory=Cinceles',
                                    },
                                    { title: 'Coronas', url: '/shop/catalog?family=Herramientas&category=Accesorios&subcategory=Coronas' },
                                    {
                                        title: 'Crucetas',
                                        url: '/shop/catalog?family=Herramientas&category=Accesorios&subcategory=Crucetas',
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
        url: '/shop/catalog?family=Ferretería',
        submenu: {
            type: 'megamenu',
            menu: {
                size: 'xl',
                columns: [
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Almacenamiento',
                                url: '/shop/catalog?family=Ferretería&category=Almacenamiento',
                                children: [
                                    { title: 'Bolsas', url: '/shop/catalog?family=Ferretería&category=Almacenamiento&subcategory=Bolsas' },
                                    { title: 'Bolsos', url: '/shop/catalog?family=Ferretería&category=Almacenamiento&subcategory=Bolsos' },
                                    {
                                        title: 'Cajas p/herramientas',
                                        url: '/shop/catalog?family=Ferretería&category=Almacenamiento&subcategory=Cajas p/herramientas',
                                    },
                                    {
                                        title: 'Cajones',
                                        url: '/shop/catalog?family=Ferretería&category=Almacenamiento&subcategory=Cajones',
                                    },
                                    {
                                        title: 'Cinturones',
                                        url: '/shop/catalog?family=Ferretería&category=Almacenamiento&subcategory=Cinturones',
                                    },
                                    {
                                        title: 'Mochilas',
                                        url: '/shop/catalog?family=Ferretería&category=Almacenamiento&subcategory=Mochilas',
                                    },
                                    {
                                        title: 'Organizadores',
                                        url: '/shop/catalog?family=Ferretería&category=Almacenamiento&subcategory=Organizadores',
                                    },
                                    {
                                        title: 'Valijas',
                                        url: '/shop/catalog?family=Ferretería&category=Almacenamiento&subcategory=Valijas',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Fijación',
                                url: '/shop/catalog?family=Ferretería&category=Fijación',
                                children: [
                                    { title: 'Bulones', url: '/shop/catalog?family=Ferretería&category=Fijación&subcategory=Bulones' },
                                    { title: 'Clavos L', url: '/shop/catalog?family=Ferretería&category=Fijación&subcategory=Clavos L' },
                                    { title: 'Pitones', url: '/shop/catalog?family=Ferretería&category=Fijación&subcategory=Pitones' },
                                    { title: 'Tacos', url: '/shop/catalog?family=Ferretería&category=Fijación&subcategory=Tacos' },
                                    { title: 'Tornillos', url: '/shop/catalog?family=Ferretería&category=Fijación&subcategory=Tornillos' },
                                    { title: 'Varios', url: '/shop/catalog?family=Ferretería&category=Fijación&subcategory=Varios' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Grifería',
                                url: '/shop/catalog?family=Ferretería&category=Grifería',
                                children: [
                                    {
                                        title: 'Accesorios',
                                        url: '/shop/catalog?family=Ferretería&category=Grifería&subcategory=Accesorios',
                                    },
                                    { title: 'Colillas', url: '/shop/catalog?family=Ferretería&category=Grifería&subcategory=Colillas' },
                                    { title: 'Grifos', url: '/shop/catalog?family=Ferretería&category=Grifería&subcategory=Grifos' },
                                    { title: 'Juegos', url: '/shop/catalog?family=Ferretería&category=Grifería&subcategory=Juegos' },
                                    {
                                        title: 'Mezcladoras',
                                        url: '/shop/catalog?family=Ferretería&category=Grifería&subcategory=Mezcladoras',
                                    },
                                    {
                                        title: 'Monocomandos',
                                        url: '/shop/catalog?family=Ferretería&category=Grifería&subcategory=Monocomandos',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Lijas',
                                url: '/shop/catalog?family=Ferretería&category=Lijas',
                                children: [
                                    { title: 'Banda', url: '/shop/catalog?family=Ferretería&category=Lijas&subcategory=Banda' },
                                    { title: 'Discos', url: '/shop/catalog?family=Ferretería&category=Lijas&subcategory=Discos' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Limpieza',
                                url: '/shop/catalog?family=Ferretería&category=Limpieza',
                                children: [
                                    { title: 'Baldes', url: '/shop/catalog?family=Ferretería&category=Limpieza&subcategory=Baldes' },
                                    {
                                        title: 'Bolsas de residuo',
                                        url: '/shop/catalog?family=Ferretería&category=Limpieza&subcategory=Bolsas de residuo',
                                    },
                                    { title: 'Cabos', url: '/shop/catalog?family=Ferretería&category=Limpieza&subcategory=Cabos' },
                                    { title: 'Cepillos', url: '/shop/catalog?family=Ferretería&category=Limpieza&subcategory=Cepillos' },
                                    { title: 'Escobas', url: '/shop/catalog?family=Ferretería&category=Limpieza&subcategory=Escobas' },
                                    {
                                        title: 'Escobillones',
                                        url: '/shop/catalog?family=Ferretería&category=Limpieza&subcategory=Escobillones',
                                    },
                                    { title: 'Esponjas', url: '/shop/catalog?family=Ferretería&category=Limpieza&subcategory=Esponjas' },
                                    { title: 'Felpudos', url: '/shop/catalog?family=Ferretería&category=Limpieza&subcategory=Felpudos' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Medición',
                                url: '/shop/catalog?family=Ferretería&category=Medición',
                                children: [
                                    { title: 'Calibres', url: '/shop/catalog?family=Ferretería&category=Medición&subcategory=Calibres' },
                                    {
                                        title: 'Cintas métricas',
                                        url: '/shop/catalog?family=Ferretería&category=Medición&subcategory=Cintas métricas',
                                    },
                                    { title: 'Escuadras', url: '/shop/catalog?family=Ferretería&category=Medición&subcategory=Escuadras' },
                                    { title: 'Galgas', url: '/shop/catalog?family=Ferretería&category=Medición&subcategory=Galgas' },
                                    { title: 'Laser', url: '/shop/catalog?family=Ferretería&category=Medición&subcategory=Laser' },
                                    { title: 'Metros', url: '/shop/catalog?family=Ferretería&category=Medición&subcategory=Metros' },
                                    {
                                        title: 'Micrómetros',
                                        url: '/shop/catalog?family=Ferretería&category=Medición&subcategory=Micrómetros',
                                    },
                                    { title: 'Niveles', url: '/shop/catalog?family=Ferretería&category=Medición&subcategory=Niveles' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Protección',
                                url: '/shop/catalog?family=Ferretería&category=Protección',
                                children: [
                                    {
                                        title: 'Accesorios',
                                        url: '/shop/catalog?family=Ferretería&category=Protección&subcategory=Accesorios',
                                    },
                                    {
                                        title: 'Antiparras',
                                        url: '/shop/catalog?family=Ferretería&category=Protección&subcategory=Antiparras',
                                    },
                                    { title: 'Arnés', url: '/shop/catalog?family=Ferretería&category=Protección&subcategory=Arnés' },
                                    { title: 'Auditivo', url: '/shop/catalog?family=Ferretería&category=Protección&subcategory=Auditivo' },
                                    { title: 'Botas', url: '/shop/catalog?family=Ferretería&category=Protección&subcategory=Botas' },
                                    { title: 'Caretas', url: '/shop/catalog?family=Ferretería&category=Protección&subcategory=Caretas' },
                                    { title: 'Cascos', url: '/shop/catalog?family=Ferretería&category=Protección&subcategory=Cascos' },
                                    {
                                        title: 'Cinturones',
                                        url: '/shop/catalog?family=Ferretería&category=Protección&subcategory=Cinturones',
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
                                url: '/shop/catalog?family=Ferretería&category=Varios',
                                children: [
                                    { title: 'Alambres', url: '/shop/catalog?family=Ferretería&category=Varios&subcategory=Alambres' },
                                    { title: 'Baldes', url: '/shop/catalog?family=Ferretería&category=Varios&subcategory=Baldes' },
                                    {
                                        title: 'Chicote de arranque',
                                        url: '/shop/catalog?family=Ferretería&category=Varios&subcategory=Chicote de arranque',
                                    },
                                    {
                                        title: 'Cofre de seguridad',
                                        url: '/shop/catalog?family=Ferretería&category=Varios&subcategory=Cofre de seguridad',
                                    },
                                    {
                                        title: 'Discos p/afilar',
                                        url: '/shop/catalog?family=Ferretería&category=Varios&subcategory=Discos p/afilar',
                                    },
                                    { title: 'Ganchos', url: '/shop/catalog?family=Ferretería&category=Varios&subcategory=Ganchos' },
                                    { title: 'Infladores', url: '/shop/catalog?family=Ferretería&category=Varios&subcategory=Infladores' },
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
        url: '/shop/catalog?family=Agro y Jardín',
        submenu: {
            type: 'megamenu',
            menu: {
                size: 'xl',
                columns: [
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Bordeadoras y desmalezadoras',
                                url: '/shop/catalog?family=Agro y Jardín&category=Bordeadoras y desmalezadoras',
                                children: [
                                    {
                                        title: 'A batería',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Bordeadoras y desmalezadoras&subcategory=A batería',
                                    },
                                    {
                                        title: 'A nafta',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Bordeadoras y desmalezadoras&subcategory=A nafta',
                                    },
                                    {
                                        title: 'Eléctricas',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Bordeadoras y desmalezadoras&subcategory=Eléctricas',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Motosierras',
                                url: '/shop/catalog?family=Agro y Jardín&category=Motosierras',
                                children: [
                                    {
                                        title: 'A batería',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Motosierras&subcategory=A batería',
                                    },
                                    {
                                        title: 'A nafta',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Motosierras&subcategory=A nafta',
                                    },
                                    {
                                        title: 'Eléctricas',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Motosierras&subcategory=Eléctricas',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Cortadoras de césped',
                                url: '/shop/catalog?family=Agro y Jardín&category=Cortadoras de césped',
                                children: [
                                    {
                                        title: 'A batería',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Cortadoras de césped&subcategory=A batería',
                                    },
                                    {
                                        title: 'A nafta',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Cortadoras de césped&subcategory=A nafta',
                                    },
                                    {
                                        title: 'Eléctricas',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Cortadoras de césped&subcategory=Eléctricas',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Cortacercos y sopladores',
                                url: '/shop/catalog?family=Agro y Jardín&category=Cortacercos y sopladores',
                                children: [
                                    {
                                        title: 'A batería',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Cortacercos y sopladores&subcategory=A batería',
                                    },
                                    {
                                        title: 'A nafta',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Cortacercos y sopladores&subcategory=A nafta',
                                    },
                                    {
                                        title: 'Eléctricos',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Cortacercos y sopladores&subcategory=Eléctricos',
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
                                url: '/shop/catalog?family=Agro y Jardín&category=Herramientas',
                                children: [
                                    { title: 'Azadas', url: '/shop/catalog?family=Agro y Jardín&category=Herramientas&subcategory=Azadas' },
                                    {
                                        title: 'Escardillos',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Herramientas&subcategory=Escardillos',
                                    },
                                    {
                                        title: 'Escobillas',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Herramientas&subcategory=Escobillas',
                                    },
                                    { title: 'Hoces', url: '/shop/catalog?family=Agro y Jardín&category=Herramientas&subcategory=Hoces' },
                                    {
                                        title: 'Horquillas',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Herramientas&subcategory=Horquillas',
                                    },
                                    { title: 'Kits', url: '/shop/catalog?family=Agro y Jardín&category=Herramientas&subcategory=Kits' },
                                    {
                                        title: 'Machetes',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Herramientas&subcategory=Machetes',
                                    },
                                    {
                                        title: 'Rastrillos',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Herramientas&subcategory=Rastrillos',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Riego',
                                url: '/shop/catalog?family=Agro y Jardín&category=Riego',
                                children: [
                                    {
                                        title: 'Acople rápido',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Riego&subcategory=Acople rápido',
                                    },
                                    {
                                        title: 'Adaptadores',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Riego&subcategory=Adaptadores',
                                    },
                                    {
                                        title: 'Aspersores',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Riego&subcategory=Aspersores',
                                    },
                                    { title: 'Boquillas', url: '/shop/catalog?family=Agro y Jardín&category=Riego&subcategory=Boquillas' },
                                    {
                                        title: 'Enrollador de mangueras',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Riego&subcategory=Enrollador de mangueras',
                                    },
                                    {
                                        title: 'Exhibidores',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Riego&subcategory=Exhibidores',
                                    },
                                    { title: 'Grifos', url: '/shop/catalog?family=Agro y Jardín&category=Riego&subcategory=Grifos' },
                                    { title: 'Kits', url: '/shop/catalog?family=Agro y Jardín&category=Riego&subcategory=Kits' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Accesorios',
                                url: '/shop/catalog?family=Agro y Jardín&category=Accesorios',
                                children: [
                                    {
                                        title: 'Adaptadores',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Accesorios&subcategory=Adaptadores',
                                    },
                                    { title: 'Cadenas', url: '/shop/catalog?family=Agro y Jardín&category=Accesorios&subcategory=Cadenas' },
                                    {
                                        title: 'Carretes',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Accesorios&subcategory=Carretes',
                                    },
                                    { title: 'Discos', url: '/shop/catalog?family=Agro y Jardín&category=Accesorios&subcategory=Discos' },
                                    { title: 'Espadas', url: '/shop/catalog?family=Agro y Jardín&category=Accesorios&subcategory=Espadas' },
                                    {
                                        title: 'Herraduras y clavos de herrar',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Accesorios&subcategory=Herraduras y clavos de herrar',
                                    },
                                    { title: 'Mechas', url: '/shop/catalog?family=Agro y Jardín&category=Accesorios&subcategory=Mechas' },
                                    { title: 'Tanzas', url: '/shop/catalog?family=Agro y Jardín&category=Accesorios&subcategory=Tanzas' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Varios',
                                url: '/shop/catalog?family=Agro y Jardín&category=Varios',
                                children: [
                                    {
                                        title: 'Fumigadores',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Varios&subcategory=Fumigadores',
                                    },
                                    {
                                        title: 'Grasas y aceites',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Varios&subcategory=Grasas y aceites',
                                    },
                                    { title: 'Hoyadoras', url: '/shop/catalog?family=Agro y Jardín&category=Varios&subcategory=Hoyadoras' },
                                    { title: 'Macetas', url: '/shop/catalog?family=Agro y Jardín&category=Varios&subcategory=Macetas' },
                                    {
                                        title: 'Multifunción',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Varios&subcategory=Multifunción',
                                    },
                                    { title: 'Podadoras', url: '/shop/catalog?family=Agro y Jardín&category=Varios&subcategory=Podadoras' },
                                    {
                                        title: 'Pulverizadores',
                                        url: '/shop/catalog?family=Agro y Jardín&category=Varios&subcategory=Pulverizadores',
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
                                title: 'Paredes, pisos y techos',
                                url: '/shop/catalog?family=Pinturas&category=Paredes, pisos y techos',
                                children: [
                                    {
                                        title: 'Impermeabilizantes',
                                        url: '/shop/catalog?family=Pinturas&category=Paredes, pisos y techos&subcategory=Impermeabilizantes',
                                    },
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
                                    { title: 'Barniz', url: '/shop/catalog?family=Pinturas&category=Madera y metal&subcategory=Barniz' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Aerosoles',
                                url: '/shop/catalog?family=Pinturas&category=Aerosoles',
                                children: [
                                    {
                                        title: 'Aceites, grasas y lubricantes',
                                        url: '/shop/catalog?family=Pinturas&category=Aerosoles&subcategory=Aceites, grasas y lubricantes',
                                    },
                                    {
                                        title: 'Alta temperatura',
                                        url: '/shop/catalog?family=Pinturas&category=Aerosoles&subcategory=Alta temperatura',
                                    },
                                    { title: 'Esmaltes', url: '/shop/catalog?family=Pinturas&category=Aerosoles&subcategory=Esmaltes' },
                                    { title: 'Especiales', url: '/shop/catalog?family=Pinturas&category=Aerosoles&subcategory=Especiales' },
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
                                    { title: 'Epoxi', url: '/shop/catalog?family=Pinturas&category=Complementos&subcategory=Epoxi' },
                                    {
                                        title: 'Galvanizado',
                                        url: '/shop/catalog?family=Pinturas&category=Complementos&subcategory=Galvanizado',
                                    },
                                    { title: 'Madera', url: '/shop/catalog?family=Pinturas&category=Complementos&subcategory=Madera' },
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
                                    {
                                        title: 'Bandejas y jarras',
                                        url: '/shop/catalog?family=Pinturas&category=Accesorios&subcategory=Bandejas y jarras',
                                    },
                                    {
                                        title: 'Extensores',
                                        url: '/shop/catalog?family=Pinturas&category=Accesorios&subcategory=Extensores',
                                    },
                                    { title: 'Kits', url: '/shop/catalog?family=Pinturas&category=Accesorios&subcategory=Kits' },
                                    { title: 'Pinceles', url: '/shop/catalog?family=Pinturas&category=Accesorios&subcategory=Pinceles' },
                                    {
                                        title: 'Pinceletas',
                                        url: '/shop/catalog?family=Pinturas&category=Accesorios&subcategory=Pinceletas',
                                    },
                                    { title: 'Rodillos', url: '/shop/catalog?family=Pinturas&category=Accesorios&subcategory=Rodillos' },
                                    { title: 'Varios', url: '/shop/catalog?family=Pinturas&category=Accesorios&subcategory=Varios' },
                                    {
                                        title: 'Venda p/pared',
                                        url: '/shop/catalog?family=Pinturas&category=Accesorios&subcategory=Venda p/pared',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Equipos de pintar',
                                url: '/shop/catalog?family=Pinturas&category=Equipos de pintar',
                                children: [
                                    {
                                        title: 'Accesorios',
                                        url: '/shop/catalog?family=Pinturas&category=Equipos de pintar&subcategory=Accesorios',
                                    },
                                    {
                                        title: 'Airless',
                                        url: '/shop/catalog?family=Pinturas&category=Equipos de pintar&subcategory=Airless',
                                    },
                                    {
                                        title: 'Pistolas',
                                        url: '/shop/catalog?family=Pinturas&category=Equipos de pintar&subcategory=Pistolas',
                                    },
                                    {
                                        title: 'Sopletes',
                                        url: '/shop/catalog?family=Pinturas&category=Equipos de pintar&subcategory=Sopletes',
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
                                url: '/shop/catalog?family=Pinturas&category=Varios',
                                children: [
                                    { title: 'Colorantes', url: '/shop/catalog?family=Pinturas&category=Varios&subcategory=Colorantes' },
                                    { title: 'Entonadores', url: '/shop/catalog?family=Pinturas&category=Varios&subcategory=Entonadores' },
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
                                title: 'Accesorios',
                                url: '/shop/catalog?family=Bazar&category=Accesorios',
                                children: [
                                    { title: 'Bandejas', url: '/shop/catalog?family=Bazar&category=Accesorios&subcategory=Bandejas' },
                                    {
                                        title: 'Barra magnética',
                                        url: '/shop/catalog?family=Bazar&category=Accesorios&subcategory=Barra magnética',
                                    },
                                    {
                                        title: 'Chairas y afiladores',
                                        url: '/shop/catalog?family=Bazar&category=Accesorios&subcategory=Chairas y afiladores',
                                    },
                                    { title: 'Cocina', url: '/shop/catalog?family=Bazar&category=Accesorios&subcategory=Cocina' },
                                    {
                                        title: 'Escurridores',
                                        url: '/shop/catalog?family=Bazar&category=Accesorios&subcategory=Escurridores',
                                    },
                                    { title: 'Espátulas', url: '/shop/catalog?family=Bazar&category=Accesorios&subcategory=Espátulas' },
                                    { title: 'Mesa', url: '/shop/catalog?family=Bazar&category=Accesorios&subcategory=Mesa' },
                                    { title: 'Parrilla', url: '/shop/catalog?family=Bazar&category=Accesorios&subcategory=Parrilla' },
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
                                        title: 'Cubierto acero inoxidable',
                                        url: '/shop/catalog?family=Bazar&category=Cubiertos, cuchillos y tijeras&subcategory=Cubierto acero inoxidable',
                                    },
                                    {
                                        title: 'Cubierto de niño',
                                        url: '/shop/catalog?family=Bazar&category=Cubiertos, cuchillos y tijeras&subcategory=Cubierto de niño',
                                    },
                                    {
                                        title: 'Cubierto mango madera',
                                        url: '/shop/catalog?family=Bazar&category=Cubiertos, cuchillos y tijeras&subcategory=Cubierto mango madera',
                                    },
                                    {
                                        title: 'Cubierto mango polipropileno',
                                        url: '/shop/catalog?family=Bazar&category=Cubiertos, cuchillos y tijeras&subcategory=Cubierto mango polipropileno',
                                    },
                                    {
                                        title: 'Cuchillas',
                                        url: '/shop/catalog?family=Bazar&category=Cubiertos, cuchillos y tijeras&subcategory=Cuchillas',
                                    },
                                    {
                                        title: 'Cuchillos de monte',
                                        url: '/shop/catalog?family=Bazar&category=Cubiertos, cuchillos y tijeras&subcategory=Cuchillos de monte',
                                    },
                                    {
                                        title: 'Tacos',
                                        url: '/shop/catalog?family=Bazar&category=Cubiertos, cuchillos y tijeras&subcategory=Tacos',
                                    },
                                    {
                                        title: 'Tijeras',
                                        url: '/shop/catalog?family=Bazar&category=Cubiertos, cuchillos y tijeras&subcategory=Tijeras',
                                    },
                                ],
                            },
                        ],
                    },
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
                                    {
                                        title: 'Acero inoxidable',
                                        url: '/shop/catalog?family=Bazar&category=Vajilla&subcategory=Acero inoxidable',
                                    },
                                    {
                                        title: 'Bols apilable de vidrio',
                                        url: '/shop/catalog?family=Bazar&category=Vajilla&subcategory=Bols apilable de vidrio',
                                    },
                                    { title: 'Cerámica', url: '/shop/catalog?family=Bazar&category=Vajilla&subcategory=Cerámica' },
                                    { title: 'Porcelana', url: '/shop/catalog?family=Bazar&category=Vajilla&subcategory=Porcelana' },
                                    {
                                        title: 'Te y café de vidrio',
                                        url: '/shop/catalog?family=Bazar&category=Vajilla&subcategory=Te y café de vidrio',
                                    },
                                    { title: 'Vidrio', url: '/shop/catalog?family=Bazar&category=Vajilla&subcategory=Vidrio' },
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
                                    {
                                        title: 'Acero inoxidable',
                                        url: '/shop/catalog?family=Bazar&category=Horno&subcategory=Acero inoxidable',
                                    },
                                    {
                                        title: 'Aluminio pulido',
                                        url: '/shop/catalog?family=Bazar&category=Horno&subcategory=Aluminio pulido',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Cristalería, copas, vasos, jarras',
                                url: '/shop/catalog?family=Bazar&category=Cristalería, copas, vasos, jarras',
                                children: [
                                    {
                                        title: 'Cerveza',
                                        url: '/shop/catalog?family=Bazar&category=Cristalería, copas, vasos, jarras&subcategory=Cerveza',
                                    },
                                    {
                                        title: 'Copas',
                                        url: '/shop/catalog?family=Bazar&category=Cristalería, copas, vasos, jarras&subcategory=Copas',
                                    },
                                    {
                                        title: 'Jarras',
                                        url: '/shop/catalog?family=Bazar&category=Cristalería, copas, vasos, jarras&subcategory=Jarras',
                                    },
                                    {
                                        title: 'Vasos',
                                        url: '/shop/catalog?family=Bazar&category=Cristalería, copas, vasos, jarras&subcategory=Vasos',
                                    },
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
                                    { title: 'Conservadoras', url: '/shop/catalog?family=Bazar&category=Termos&subcategory=Conservadoras' },
                                    { title: 'Jarra', url: '/shop/catalog?family=Bazar&category=Termos&subcategory=Jarra' },
                                    { title: 'Tapones', url: '/shop/catalog?family=Bazar&category=Termos&subcategory=Tapones' },
                                    {
                                        title: 'Termo para comida',
                                        url: '/shop/catalog?family=Bazar&category=Termos&subcategory=Termo para comida',
                                    },
                                    { title: 'Termo, mug', url: '/shop/catalog?family=Bazar&category=Termos&subcategory=Termo, mug' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Varios',
                                url: '/shop/catalog?family=Bazar&category=Varios',
                                children: [
                                    { title: 'Balanzas', url: '/shop/catalog?family=Bazar&category=Varios&subcategory=Balanzas' },
                                    { title: 'Barbacoas', url: '/shop/catalog?family=Bazar&category=Varios&subcategory=Barbacoas' },
                                    { title: 'Tablas', url: '/shop/catalog?family=Bazar&category=Varios&subcategory=Tablas' },
                                    { title: 'Relojes', url: '/shop/catalog?family=Bazar&category=Varios&subcategory=Relojes' },
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
        url: '/shop/catalog?family=Electrodomésticos',
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
                                url: '/shop/catalog?family=Electrodomésticos&category=Cocina',
                                children: [
                                    {
                                        title: 'Anafes a gas',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Cocina&subcategory=Anafes a gas',
                                    },
                                    {
                                        title: 'Anafes eléctrico',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Cocina&subcategory=Anafes eléctrico',
                                    },
                                    {
                                        title: 'Cortadora de fiambre',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Cocina&subcategory=Cortadora de fiambre',
                                    },
                                    {
                                        title: 'Freidoras con aceite',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Cocina&subcategory=Freidoras con aceite',
                                    },
                                    {
                                        title: 'Freidoras sin aceite',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Cocina&subcategory=Freidoras sin aceite',
                                    },
                                    {
                                        title: 'Microondas',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Cocina&subcategory=Microondas',
                                    },
                                    { title: 'Mixers', url: '/shop/catalog?family=Electrodomésticos&category=Cocina&subcategory=Mixers' },
                                    {
                                        title: 'Picadoras de carne',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Cocina&subcategory=Picadoras de carne',
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
                                url: '/shop/catalog?family=Electrodomésticos&category=Desayuno',
                                children: [
                                    {
                                        title: 'Cafeteras',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Desayuno&subcategory=Cafeteras',
                                    },
                                    {
                                        title: 'Exprimidor',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Desayuno&subcategory=Exprimidor',
                                    },
                                    {
                                        title: 'Jarras eléctricas',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Desayuno&subcategory=Jarras eléctricas',
                                    },
                                    {
                                        title: 'Sandwichera',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Desayuno&subcategory=Sandwichera',
                                    },
                                    {
                                        title: 'Sandwicheras Waflera Grill',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Desayuno&subcategory=Sandwicheras Waflera Grill',
                                    },
                                    {
                                        title: 'Tostadoras',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Desayuno&subcategory=Tostadoras',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Batidoras y Licuadoras',
                                url: '/shop/catalog?family=Electrodomésticos&category=Batidoras y Licuadoras',
                                children: [
                                    {
                                        title: 'Batidora hogar',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Batidoras y Licuadoras&subcategory=Batidora hogar',
                                    },
                                    {
                                        title: 'Batidora profesional',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Batidoras y Licuadoras&subcategory=Batidora profesional',
                                    },
                                    {
                                        title: 'Licuadora',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Batidoras y Licuadoras&subcategory=Licuadora',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Calefacción',
                                url: '/shop/catalog?family=Electrodomésticos&category=Calefacción',
                                children: [
                                    {
                                        title: 'Calienta camas',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Calefacción&subcategory=Calienta camas',
                                    },
                                    {
                                        title: 'Caloventiladores',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Calefacción&subcategory=Caloventiladores',
                                    },
                                    {
                                        title: 'Estufas convectora',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Calefacción&subcategory=Estufas convectora',
                                    },
                                    {
                                        title: 'Estufas cuarzo',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Calefacción&subcategory=Estufas cuarzo',
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
                                url: '/shop/catalog?family=Electrodomésticos&category=Soportes',
                                children: [
                                    {
                                        title: 'Articulado para Tv',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Soportes&subcategory=Articulado para Tv',
                                    },
                                    {
                                        title: 'Consolas - decodificador',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Soportes&subcategory=Consolas - decodificador',
                                    },
                                    {
                                        title: 'Electrodomésticos',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Soportes&subcategory=Electrodomésticos',
                                    },
                                    {
                                        title: 'Fijo para Tv',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Soportes&subcategory=Fijo para Tv',
                                    },
                                    {
                                        title: 'Microondas',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Soportes&subcategory=Microondas',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        size: 3,
                        links: [
                            {
                                title: 'Extractores y Ventilación',
                                url: '/shop/catalog?family=Electrodomésticos&category=Extractores y Ventilación',
                                children: [
                                    {
                                        title: 'Extractor baño',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Extractores y Ventilación&subcategory=Extractor baño',
                                    },
                                    {
                                        title: 'Extractor cocina',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Extractores y Ventilación&subcategory=Extractor cocina',
                                    },
                                    {
                                        title: 'Extractor industrial',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Extractores y Ventilación&subcategory=Extractor industrial',
                                    },
                                    {
                                        title: 'Ventiladores hogar',
                                        url: '/shop/catalog?family=Electrodomésticos&category=Extractores y Ventilación&subcategory=Ventiladores hogar',
                                    },
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
