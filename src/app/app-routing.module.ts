import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './pages/faq/faq.component';
import { SspGameComponent } from './pages/ssp-game/ssp-game.component';
import { PipesComponent } from "./pages/pipes/pipes.component";
import { BooksListComponent } from "./pages/books-list/books-list.component";
import { FormsComponent } from "./pages/forms/forms.component";
import { UsersComponent } from "./pages/users/users.component";

const routes: Routes = [
  { path: 'faq', component: FaqComponent },
  { path: 'ssp-game', component: SspGameComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'books-list', component: BooksListComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'users', component: UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
