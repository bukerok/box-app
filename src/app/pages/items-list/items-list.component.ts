import { NestedTreeControl } from '@angular/cdk/tree';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource, MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { arrayToTree, TreeItem } from 'performant-array-to-tree';
import { map } from 'rxjs';

import { ToolbarComponent } from 'src/app/shared/toolbar/toolbar.component';

import { AddItemButtonComponent } from './components/add-item-button/add-item-button.component';
import { ThingItemComponent } from './components/thing-item/thing-item.component';
import { ContainerItemComponent } from './components/container-item/container-item.component';
import { selectFeature } from './state/items.selectors';
import { isContainer } from './interfaces/item';

@Component({
  selector: 'app-items-list',
  imports: [
    NgIf,
    ToolbarComponent,
    ThingItemComponent,
    ContainerItemComponent,
    AddItemButtonComponent,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
  ],
  standalone: true,
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
})
export class ItemsListComponent {
  treeControl = new NestedTreeControl<TreeItem>(node => node['children']);
  dataSource = new MatTreeNestedDataSource<TreeItem>();

  constructor(private store: Store) {
    this.store.select(selectFeature)
      .pipe(map((items) => arrayToTree(items, { dataField: null, })))
      .subscribe((treeData) => {
        this.dataSource.data = treeData;
      });
  }

  isContainer = isContainer;

  hasChild(_: number, node: TreeItem): boolean {
    const { children } = node;

    return !!children && children.length > 0;
  }
}
