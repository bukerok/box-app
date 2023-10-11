import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Item } from '../interfaces/item';

export const selectItems = createSelector(
  createFeatureSelector<ReadonlyArray<Item>>('items'),
  (items) => {
    return [...items].sort((a, b) => {
      if (a.isContainer && !b.isContainer) {
        return -1;
      } else if (!a.isContainer && b.isContainer) {
        return 1;
      }

      return a.description.localeCompare(b.description);
    });
  },
);