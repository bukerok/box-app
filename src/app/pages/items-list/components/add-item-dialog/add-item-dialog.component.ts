import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

const DEFAULT_VOLUME = 10;

@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['./add-item-dialog.component.css'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    ReactiveFormsModule,
  ],
})
export class AddItemDialogComponent {
  newItem = new FormGroup({
    description: new FormControl('', Validators.required),
    isContainer: new FormControl(false),
    volume: new FormControl(DEFAULT_VOLUME, Validators.required),
  });

  constructor(
    public dialogRef: MatDialogRef<AddItemDialogComponent>,
  ) {}

  createItem() {
    if (this.newItem.invalid) {
      return;
    }

    this.dialogRef.close(this.newItem.value);
  }
}
