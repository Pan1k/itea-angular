import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FaqComponent } from './pages/faq/faq.component';

import { SspGameComponent } from './pages/ssp-game/ssp-game.component';
import { UlListComponent } from './shared/ul-list/ul-list.component';
import { MainMenuComponent } from './shared/main-menu/main-menu.component';
import { MainMenuItemComponent } from './shared/main-menu/main-menu-item/main-menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    MainMenuComponent,
    SspGameComponent,
    UlListComponent,
    MainMenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
