import { AsyncPipe, NgFor } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { Item } from '../../interfaces/item';
import { selectAvailableContainers } from '../../state/items.selectors';

@Component({
  selector: 'app-move-item-dialog',
  standalone: true,
  imports: [
    AsyncPipe,
    NgFor,
    MatDialogModule,
    MatButtonModule,
  ],
  templateUrl: './move-item-dialog.component.html',
  styleUrls: ['./move-item-dialog.component.css']
})
export class MoveItemDialogComponent {
  availableContainers$ = this.store.select(selectAvailableContainers(this.item.volume));

  constructor(
    @Inject(MAT_DIALOG_DATA) public item: Item,
    private store: Store,
  ) {}
}
