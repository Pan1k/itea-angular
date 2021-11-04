import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { FaqComponent } from './pages/faq/faq.component';

import { SspGameComponent } from './pages/ssp-game/ssp-game.component';
import { UlListComponent } from './shared/modules/ul-list/ul-list.component';
import { MainMenuComponent } from './shared/modules/main-menu/main-menu.component';
import { MainMenuItemComponent } from './shared/modules/main-menu/main-menu-item/main-menu-item.component';
import { FilterByLessonPipe } from './pages/faq/filter-by-lesson.pipe';
import { IteaButtonComponent } from './shared/elements/itea-button/itea-button.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { TextReversePipe } from './pages/pipes/text-reverse.pipe';
import { PipesDirective } from './pages/pipes/pipes.directive';
import { FormBlockComponent } from './pages/pipes/form-block/form-block.component';
import { BooksListComponent } from './pages/books-list/books-list.component';
import { BooksListItemComponent } from './pages/books-list/books-list-item/books-list-item.component';
import { PositiveNumbersDirective } from './pages/pipes/positive-numbers.directive';
import { BooksListFormComponent } from './pages/books-list/books-list-form/books-list-form.component';
import { OrderByPipe } from './pages/books-list/order-by.pipe';
import { FormsComponent } from './pages/forms/forms.component';
import { UsersComponent } from './pages/users/users.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    MainMenuComponent,
    SspGameComponent,
    UlListComponent,
    MainMenuItemComponent,
    FilterByLessonPipe,
    IteaButtonComponent,
    PipesComponent,
    TextReversePipe,
    PipesDirective,
    FormBlockComponent,
    BooksListComponent,
    BooksListItemComponent,
    PositiveNumbersDirective,
    BooksListFormComponent,
    OrderByPipe,
    FormsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
