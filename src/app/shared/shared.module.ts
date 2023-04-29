import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    ListComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    ListComponent,
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
