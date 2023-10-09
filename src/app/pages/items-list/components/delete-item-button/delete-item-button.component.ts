import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { Item } from '../../interfaces/item';
import { DeleteItemDialogComponent } from '../delete-item-dialog/delete-item-dialog.component';
import { deleteItem } from '../../state/items.actions';

@Component({
  selector: 'app-delete-item-button',
  templateUrl: './delete-item-button.component.html',
  styleUrls: ['./delete-item-button.component.css'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
})
export class DeleteItemButtonComponent {
  @Input({ required: true }) item!: Item;

  constructor(
    public dialog: MatDialog,
    private store: Store,
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(DeleteItemDialogComponent, {
      data: this.item,
      disableClose: true,
    });

    dialogRef.afterClosed()
      .subscribe((confirmed) => {
        if (!confirmed) {
          return;
        }

        this.store.dispatch(deleteItem({
          id: this.item.id,
        }));
      });
  }
}
