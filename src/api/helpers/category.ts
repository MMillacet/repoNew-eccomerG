import { IBaseCategory, IShopCategory } from '../../interfaces/category';
import { makeIdGenerator, nameToSlug } from './utils';
import { ICategoryDef } from '../../interfaces/categories';

const getId = makeIdGenerator();

type MakeFn<T extends IBaseCategory = IBaseCategory> = (def: ICategoryDef) => T;

export function makeShopCategory(def: ICategoryDef): IShopCategory {
    return {
        type: 'shop',
        id: getId(),
        name: def.name,
        slug: def.slug || nameToSlug(def.name),
        image: def.image,
        items: def.items || 0,
        customFields: {},
        parent: undefined,
        children: [],
        level: def.level,
    };
}

export function walkTree<T extends IBaseCategory = IBaseCategory>(makeFn: MakeFn<T>, defs: ICategoryDef[], parent?: T): [T[], T[]] {
    let list: T[] = [];

    const tree = defs.map((def) => {
        const category: T = makeFn(def);

        const [childrenTree, childrenList] = walkTree(makeFn, def.children || [], category);

        category.parent = parent;
        category.children = childrenTree;
        list = [...list, category, ...childrenList];

        return category;
    });

    return [tree, list];
}

export function prepareCategory<T extends IBaseCategory>(category: T, depth?: number): T {
    let children;

    if (depth && depth > 0) {
        children = category.children && category.children.map((x) => prepareCategory(x, depth - 1));
    }

    return JSON.parse(
        JSON.stringify({
            ...category,
            parent: category.parent ? prepareCategory(category.parent) : null,
            children,
        }),
    );
}

export const familiesToCategories = (families: any[]) => {
    const categories = families.map((family) => ({
        name: family.name,
        slug: nameToSlug(family.name),
        level: 'family',
        children: family.categories.map((category: { name: string; subcategories: any[] }) => ({
            name: category.name,
            slug: `${nameToSlug(family.name)}-${nameToSlug(category.name)}`,
            level: 'category',
            children: category.subcategories.map((subcategory: { name: string; subsubcategories: any[] }) => ({
                name: subcategory.name,
                slug: `${nameToSlug(category.name)}-${nameToSlug(subcategory.name)}`,
                level: 'subcategory',
                children: subcategory.subsubcategories.map((subsubcategory: string) => ({
                    name: subsubcategory,
                    slug: `${nameToSlug(subcategory.name)}-${nameToSlug(subsubcategory)}`,
                    level: 'subsubcategory',
                })),
            })),
        })),
    }));

    return categories;
};
