import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { Item } from '../../interfaces/item';
import { MoveItemDialogComponent } from '../move-item-dialog/move-item-dialog.component';
import { updateItem } from '../../state/items.actions';

@Component({
  selector: 'app-move-item-button',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
  templateUrl: './move-item-button.component.html',
  styleUrls: ['./move-item-button.component.css']
})
export class MoveItemButtonComponent {
  @Input({ required: true }) item!: Item;

  constructor(
    public dialog: MatDialog,
    private store: Store,
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(MoveItemDialogComponent, {
      data: this.item,
    });

    dialogRef.afterClosed()
      .subscribe((parentId?: string) => {
        this.store.dispatch(updateItem({
          item: {
            ...this.item,
            parentId,
          },
        }));
      });
  }
}
