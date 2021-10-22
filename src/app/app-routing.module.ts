import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './pages/faq/faq.component';
import { SspGameComponent } from './pages/ssp-game/ssp-game.component';

const routes: Routes = [
  { path: 'faq', component: FaqComponent },
  { path: 'ssp-game', component: SspGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
