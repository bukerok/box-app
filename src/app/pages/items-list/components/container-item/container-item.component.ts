import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { Container } from '../../interfaces/item';
import { selectFreeVolume } from '../../state/items.selectors';
import { DeleteItemButtonComponent } from '../delete-item-button/delete-item-button.component';
import { EditItemButtonComponent } from '../edit-item-button/edit-item-button.component';

@Component({
  selector: 'app-container-item',
  templateUrl: './container-item.component.html',
  styleUrls: ['./container-item.component.css'],
  imports: [
    AsyncPipe,
    MatCardModule,
    EditItemButtonComponent,
    DeleteItemButtonComponent,
  ],
  standalone: true,
})
export class ContainerItemComponent {
  @Input({ required: true }) container!: Container;

  get freeVolume() {
    if (!this.container) {
      return of(0);
    }

    return this.store.select(selectFreeVolume(this.container));
  }

  constructor(private store: Store) {}
}
