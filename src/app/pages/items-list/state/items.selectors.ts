import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Container, Item, isContainer } from '../interfaces/item';

export const selectFeature = createFeatureSelector<Item[]>('items');

export const selectFreeVolume = (container: Container) => createSelector(
  selectFeature,
  (items) => {
    const nestedNodes = getNestedNodesMap(items);

    return container.volume - getChildrenVolume(nestedNodes, container);
  },
);

export const getChildrenVolume = (nestedNodes: Map<string, Item[]>, container: Container): number => {
  const children = nestedNodes.get(container.id) || [];

  return children.reduce((acc, curr) => {
    let volume = curr.volume;

    if (isContainer(curr)) {
      volume = getChildrenVolume(nestedNodes, curr);
    }

    return acc + volume;
  }, 0);
};

export const selectAvailableContainers = (requiredVolume: number) => createSelector(
  selectFeature,
  (items) => {
    const nestedNodes = getNestedNodesMap(items);

    return items.filter((item) => {
      if (!isContainer(item)) {
        return false;
      }

      const availableVolume = (nestedNodes.get(item.id) || []).reduce((acc, curr) => {
        return acc - curr.volume;
      }, item.volume);

      return availableVolume >= requiredVolume;
    });
  },
);

export function getNestedNodesMap(items: Item[]): Map<string, Item[]> {
  const result = new Map();

  items.forEach((item) => {
    const group = result.get(item.parentId) || [];

    group.push(item);
    result.set(item.parentId, group);
  });

  return result;
}