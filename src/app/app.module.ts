import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RodapeModule } from './componentes/rodape/rodape.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CabecalhoModule,
    RodapeModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
