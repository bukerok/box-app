import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { Item } from '../../interfaces/item';
import { DeleteItemButtonComponent } from '../delete-item-button/delete-item-button.component';
import { EditItemButtonComponent } from '../edit-item-button/edit-item-button.component';

@Component({
  selector: 'app-thing-item',
  templateUrl: './thing-item.component.html',
  styleUrls: ['./thing-item.component.css'],
  imports: [
    MatCardModule,
    EditItemButtonComponent,
    DeleteItemButtonComponent,
  ],
  standalone: true,
})
export class ThingItemComponent {
  @Input({ required: true }) item!: Item;
}
