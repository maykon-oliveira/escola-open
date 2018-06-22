import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnaliseEnemComponent } from './analise-enem/analise-enem.component';

export const routes: Routes = [
  { path: '', redirectTo: '/enem', pathMatch: 'full' },
  { path: 'enem', component: AnaliseEnemComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
