import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { createItem } from '../../state/items.actions';
import { AddItemDialogComponent } from '../add-item-dialog/add-item-dialog.component';

@Component({
  selector: 'app-add-item-button',
  templateUrl: './add-item-button.component.html',
  styleUrls: ['./add-item-button.component.css'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
})
export class AddItemButtonComponent {
  constructor(
    public dialog: MatDialog,
    private store: Store,
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddItemDialogComponent, {
      disableClose: true,
    });

    dialogRef.afterClosed()
      .subscribe((data) => {
        if (!data) {
          return;
        }

        this.store.dispatch(createItem({
          item: data,
        }));
      });
  }
}
