import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-thing-item',
  templateUrl: './thing-item.component.html',
  styleUrls: ['./thing-item.component.css'],
  imports: [
    MatCardModule,
  ],
  standalone: true,
})
export class ThingItemComponent {
  @Input({ required: true }) item!: Item;
}
