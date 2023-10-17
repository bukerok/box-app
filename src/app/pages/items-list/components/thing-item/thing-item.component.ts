import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { Thing } from '../../interfaces/item';
import { DeleteItemButtonComponent } from '../delete-item-button/delete-item-button.component';
import { EditItemButtonComponent } from '../edit-item-button/edit-item-button.component';
import { MoveItemButtonComponent } from '../move-item-button/move-item-button.component';

@Component({
  selector: 'app-thing-item',
  templateUrl: './thing-item.component.html',
  styleUrls: ['./thing-item.component.css'],
  imports: [
    MatCardModule,
    MoveItemButtonComponent,
    EditItemButtonComponent,
    DeleteItemButtonComponent,
  ],
  standalone: true,
})
export class ThingItemComponent {
  @Input({ required: true }) thing!: Thing;
}
