import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { ToolbarComponent } from 'src/app/shared/toolbar/toolbar.component';

import { ThingItemComponent } from './components/thing-item/thing-item.component';
import { ContainerItemComponent } from './components/container-item/container-item.component';
import { Item } from './interfaces/item';

@Component({
  selector: 'app-items-list',
  imports: [
    NgFor,
    NgIf,
    ToolbarComponent,
    ThingItemComponent,
    ContainerItemComponent,
  ],
  standalone: true,
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
})
export class ItemsListComponent {
  items: Item[] = [
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
}
