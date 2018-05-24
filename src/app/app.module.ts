import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { NewGameModule } from '../new-game/new-game.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    NewGameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
