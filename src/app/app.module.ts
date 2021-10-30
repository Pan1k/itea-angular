import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FaqComponent } from './pages/faq/faq.component';

import { SspGameComponent } from './pages/ssp-game/ssp-game.component';
import { UlListComponent } from './shared/modules/ul-list/ul-list.component';
import { MainMenuComponent } from './shared/modules/main-menu/main-menu.component';
import { MainMenuItemComponent } from './shared/modules/main-menu/main-menu-item/main-menu-item.component';
import { FilterByLessonPipe } from './pages/faq/filter-by-lesson.pipe';
import { IteaButtonComponent } from './shared/elements/itea-button/itea-button.component';

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    MainMenuComponent,
    SspGameComponent,
    UlListComponent,
    MainMenuItemComponent,
    FilterByLessonPipe,
    IteaButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
