import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: '', title: 'Home | Top Trending', component: HomeComponent},
  {path: 'details/:id', title: 'Details | Results', component: DetailsComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

/*
Rotas de todas as páginas principais.
Nelas, serão carregados os components genéricos através de seus seletores.
*/
