import { Component, Inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-edit-item-dialog',
  standalone: true,
  imports: [
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './edit-item-dialog.component.html',
  styleUrls: ['./edit-item-dialog.component.css']
})
export class EditItemDialogComponent {
  newDescription = new FormControl(this.item.description, Validators.required);

  constructor(
    @Inject(MAT_DIALOG_DATA) public item: Item,
    public dialogRef: MatDialogRef<EditItemDialogComponent>,
  ) {}

  close() {
    if (this.newDescription.invalid) {
      return;
    }

    this.dialogRef.close({
      ...this.item,
      description: this.newDescription.value,
    });
  }
}
