import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Item, isContainer } from '../interfaces/item';

export const selectFeature = createFeatureSelector<Item[]>('items');

export const selectSortedItems = createSelector(
  selectFeature,
  (items) => {
    return [...items].sort((a, b) => {
      if (isContainer(a) && !isContainer(b)) {
        return -1;
      } else if (!isContainer(a) && isContainer(b)) {
        return 1;
      }

      return a.description.localeCompare(b.description);
    });
  },
);

export const selectFreeVolume = (totalVolume: number, ids: string[]) => createSelector(
  selectFeature,
  (items) => {
    const idsSet = new Set(ids);

    return items.reduce((acc, curr) => {
      if (idsSet.has(curr.id)) {
        return acc - curr.volume;
      }

      return acc;
    }, totalVolume);
  },
);