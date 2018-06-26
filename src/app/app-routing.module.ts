import { PesquisarEscolasComponent } from './pesquisar-escolas/pesquisar-escolas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnaliseEnemComponent } from './analise-enem/analise-enem.component';

export const routes: Routes = [
  { path: '', redirectTo: '/pesquisar-escolas', pathMatch: 'full' },
  { path: 'enem', component: AnaliseEnemComponent },
  { path: 'pesquisar-escolas', component: PesquisarEscolasComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
