import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-container-item',
  templateUrl: './container-item.component.html',
  styleUrls: ['./container-item.component.css'],
  imports: [
    MatCardModule,
  ],
  standalone: true,
})
export class ContainerItemComponent {
  @Input({ required: true }) item!: Item;
}
