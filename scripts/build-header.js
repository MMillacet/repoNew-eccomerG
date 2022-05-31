// const fs = require('fs');
const axios = require('axios');

const baseURL = 'http://app.goldfarb.com.uy/Main/api';

const getCategories = async () => {
    const config = {
        baseURL,
        url: '/web/getwebheaderfamilies',
        method: 'get',
    };

    const { data } = await axios(config);

    return data;
};

const run = async () => {
    const families = await getCategories();

    const header = families.map((family) => ({
        title: family.title,
        url: `/shop/catalog?family=${family.name}`,
        submenu: {
            type: 'megamenu',
            menu: {
                size: 'xl',
                columns: family.categories.map((category) => ({
                    size: 3,
                    links: [
                        {
                            title: category.title,
                            url: `/shop/catalog?family=${family.name}&category=${category.name}`,
                            children: category.subcategories.map((subcategory) => ({
                                title: subcategory.title,
                                url: `/shop/catalog?family=${family.name}&category=${category.name}&subcategory=${subcategory.name}`,
                            })),
                        },
                    ],
                })),
            },
        },
    }));

    console.log({ header: JSON.stringify(header) });
    // paste to src/data/headerNavigation.ts

    // const mobileHeader = families.map((family) => ({
    //     type: 'link',
    //     title: family.title,
    //     url: `/shop/catalog?family=${family.name}`,
    //     children: family.categories.map((category) => ({
    //         type: 'link',
    //         title: category.title,
    //         url: `/shop/catalog?category=${category.name}`,
    //         children: category.subcategories.map((subcategory) => ({
    //             type: 'link',
    //             title: subcategory,
    //             url: `/shop/catalog?subcategory=${subcategory}`,
    //         })),
    //     })),
    // }));

    const mobileHeader = families.map((family) => ({
        type: 'link',
        title: family.title,
        url: `/shop/catalog?family=${family.name}`,
    }));

    console.log({ mobileHeader: JSON.stringify(mobileHeader) });
    // paste to src/data/mobileMenu.ts
};

run();
