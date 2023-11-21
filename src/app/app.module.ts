import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import { itemsReducer } from './pages/items-list/state/items.reducer';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['items'],
    rehydrate: true,
  })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ToolbarComponent,
    AppRoutingModule,
    StoreModule.forRoot(
      {
        items: itemsReducer,
      },
      {
        metaReducers,
      },
    ),
  ],
  providers: [
    provideAnimations(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
