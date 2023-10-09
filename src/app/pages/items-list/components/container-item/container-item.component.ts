import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { Item } from '../../interfaces/item';
import { DeleteItemButtonComponent } from '../delete-item-button/delete-item-button.component';

@Component({
  selector: 'app-container-item',
  templateUrl: './container-item.component.html',
  styleUrls: ['./container-item.component.css'],
  imports: [
    MatCardModule,
    DeleteItemButtonComponent,
  ],
  standalone: true,
})
export class ContainerItemComponent {
  @Input({ required: true }) item!: Item;
}
