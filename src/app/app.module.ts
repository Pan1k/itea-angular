import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FaqComponent } from './pages/faq/faq.component';

import { MainMenuComponent } from './blocks/main-menu/main-menu.component';
import { SspGameComponent } from './pages/ssp-game/ssp-game.component';
import { UlListComponent } from './shared/ul-list/ul-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    MainMenuComponent,
    SspGameComponent,
    UlListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
