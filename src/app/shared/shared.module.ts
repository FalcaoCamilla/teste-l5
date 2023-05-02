import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

//Components
import { HeaderComponent } from './header/header.component';
import { ListResultsComponent } from './list-results/list-results.component';
import { SearchComponent } from './search/search.component';

import { DialogModule } from 'primeng/dialog'
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    ListResultsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgSelectModule,
    DialogModule,
    ButtonModule
  ],
  exports: [
    HeaderComponent,
    ListResultsComponent,
    SearchComponent
  ]
})
export class SharedModule { }

/*
O shared.module permite que os componentes em comum sejam exportados para uso genérico
Nesse caso, esses components são exibidos através da página Home ou Details (páginas principais),
através de seletores no próprio html.
O Módulo shared está sendo importado no pages.module, pois não é lido como uma rota,
e sim como o local onde os components são declarados para exibição
*/
