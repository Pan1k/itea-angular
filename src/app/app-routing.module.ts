import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './pages/faq/faq.component';
import { SspGameComponent } from './pages/ssp-game/ssp-game.component';
import { PipesComponent } from "./pages/pipes/pipes.component";

const routes: Routes = [
  { path: 'faq', component: FaqComponent },
  { path: 'ssp-game', component: SspGameComponent },
  { path: 'pipes', component: PipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
