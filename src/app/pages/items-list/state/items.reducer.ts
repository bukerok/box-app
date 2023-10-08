import { createReducer, on } from '@ngrx/store';
import { createItem, updateItem, deleteItem } from './items.actions';
import { Item } from '../interfaces/item';

export const initialState: Item[] = [
  {
    id: '1',
    description: 'test 1',
    volume: 22,
  },
  {
    id: '2',
    description: 'test second',
    volume: 2,
  },
  {
    id: '5',
    description: 'container test',
    volume: 200,
    isContainer: true,
  },
  {
    id: '10',
    description: 'other test 1',
    volume: 13,
  },
];

export const itemsReducer = createReducer(
  initialState,
  on(createItem, (state, action) => {
    return [
      ...state,
      {
        ...action.item,
        id: `${Math.random() * 100000001}`,
      },
    ];
  }),
  on(updateItem, (state, action) => {
    return state.map((item) => {
      if (item.id !== action.item.id) {
        return item;
      }

      return {
        ...item,
        ...action.item,
      };
    });
  }),
  on(deleteItem, (state, action) => {
    return state.filter((item) => {
      return item.id !== action.id;
    });
  }),
);