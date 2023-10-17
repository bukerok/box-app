import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Container, Item, isContainer } from '../interfaces/item';

export const selectFeature = createFeatureSelector<Item[]>('items');

export const selectFreeVolume = (container: Container) => createSelector(
  selectFeature,
  (items) => {
    return items.filter((item) => {
      return item.parentId === container.id;
    })
      .reduce((acc, curr) => {
        return acc - curr.volume;
      }, container.volume);
  },
);

export const selectAvailableContainers = (requiredVolume: number) => createSelector(
  selectFeature,
  (items) => {
    const nestedNodes: { [key: string]: Item[] } = (Object as any).groupBy(items, (item: Item) => {
      return item.parentId;
    });

    return items.filter((item) => {
      if (!isContainer(item)) {
        return false;
      }

      const availableVolume = (nestedNodes[item.id] || []).reduce((acc, curr) => {
        return acc - curr.volume;
      }, item.volume);

      return availableVolume >= requiredVolume;
    });
  },
);