import { createAction, props } from '@ngrx/store';

import { Item } from '../interfaces/item';

export const createItem = createAction('[Item] Create', props<{ item: Item }>());
export const updateItem = createAction('[Item] Update', props<{ item: Item }>());
export const deleteItem = createAction('[Item] Delete', props<{ id: string }>());