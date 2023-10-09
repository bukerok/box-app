import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-delete-item-dialog',
  templateUrl: './delete-item-dialog.component.html',
  styleUrls: ['./delete-item-dialog.component.css'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
  ],
})
export class DeleteItemDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public item: Item,
  ) {}
}
