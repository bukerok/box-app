export interface Thing {
    id: string;
    description: string;
    volume: number;
    parentId?: string;
}

export type Container = Thing & {
    isContainer: boolean;
};

export type Item = Thing | Container;

export function isContainer(item: Item): item is Container {
    return (item as Container).isContainer;
}

export type ItemNode = Thing & {
    children: ItemNode[];
}
