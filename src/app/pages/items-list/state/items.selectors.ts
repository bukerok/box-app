import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Container, Item } from '../interfaces/item';

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