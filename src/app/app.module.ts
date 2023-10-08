import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ItemsListComponent } from './pages/items-list/items-list.component';
import { itemsReducer } from './pages/items-list/state/items.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ItemsListComponent,
    StoreModule.forRoot(
      {
        items: itemsReducer,
      },
      {},
    ),
  ],
  providers: [
    provideAnimations(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
