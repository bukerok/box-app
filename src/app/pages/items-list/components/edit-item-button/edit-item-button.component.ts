import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { Item } from '../../interfaces/item';
import { updateItem } from '../../state/items.actions';
import { EditItemDialogComponent } from '../edit-item-dialog/edit-item-dialog.component';

@Component({
  selector: 'app-edit-item-button',
  templateUrl: './edit-item-button.component.html',
  styleUrls: ['./edit-item-button.component.css'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
})
export class EditItemButtonComponent {
  @Input({ required: true, }) item!: Item;

  constructor(
    public dialog: MatDialog,
    private store: Store,
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(EditItemDialogComponent, {
      data: this.item,
      disableClose: true,
    });

    dialogRef.afterClosed()
      .subscribe((data) => {
        if (!data) {
          return;
        }

        this.store.dispatch(updateItem({
          item: data,
        }));
      });
  }
}
