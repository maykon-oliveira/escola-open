import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnaliseEnemComponent } from './analise-enem/analise-enem.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    AnaliseEnemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
