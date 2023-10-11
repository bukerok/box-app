export interface Thing {
    id: string;
    description: string;
    volume: number;
}

export type Container = Thing & {
    nestedItemIds: string[];
};

export type Item = Thing | Container;

export function isContainer(item: Item): item is Container {
    return 'nestedItemIds' in item;
}
