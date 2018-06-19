import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnaliseEnemComponent } from './analise-enem/analise-enem.component';

@NgModule({
  declarations: [
    AppComponent,
    AnaliseEnemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
