import { makeIdGenerator, nameToSlug } from '../utils';
import { ICategoryDef } from '../interfaces/categories';
import { IBaseCategory, IShopCategory } from '../../interfaces/category';

const getId = makeIdGenerator();

const categoriesDef: ICategoryDef[] = [
    {
        name: 'Instruments',
        slug: 'instruments',
        items: 272,
        level: 'Family',
    },
];

type MakeFn<T extends IBaseCategory = IBaseCategory> = (def: ICategoryDef) => T;

function makeShopCategory(def: ICategoryDef): IShopCategory {
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
        level: 'Family',
    };
}

function walkTree<T extends IBaseCategory = IBaseCategory>(makeFn: MakeFn<T>, defs: ICategoryDef[], parent?: T): [T[], T[]] {
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

export const [categoriesTreeData, categoriesListData] = walkTree(makeShopCategory, categoriesDef);
