import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { ToolbarComponent } from 'src/app/shared/toolbar/toolbar.component';

import { AddItemButtonComponent } from './components/add-item-button/add-item-button.component';
import { ThingItemComponent } from './components/thing-item/thing-item.component';
import { ContainerItemComponent } from './components/container-item/container-item.component';
import { selectSortedItems } from './state/items.selectors';
import { isContainer } from './interfaces/item';

@Component({
  selector: 'app-items-list',
  imports: [
    NgFor,
    NgIf,
    ToolbarComponent,
    ThingItemComponent,
    ContainerItemComponent,
    AddItemButtonComponent,
    AsyncPipe,
  ],
  standalone: true,
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
})
export class ItemsListComponent {
  items$ = this.store.select(selectSortedItems);
  isContainer = isContainer;

  constructor(private store: Store) {}
}
