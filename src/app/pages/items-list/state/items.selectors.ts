import { createFeatureSelector } from '@ngrx/store';

import { Item } from '../interfaces/item';

export const selectItems = createFeatureSelector<ReadonlyArray<Item>>('items');