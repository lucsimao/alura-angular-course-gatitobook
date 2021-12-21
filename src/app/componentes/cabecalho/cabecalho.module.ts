import { CabecalhoComponent } from './cabecalho.component';
import { CommonModule } from '@angular/common';
import { MenuModule } from './../menu/menu.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CabecalhoComponent],
  imports: [CommonModule, RouterModule, MenuModule],
  exports: [CabecalhoComponent],
})
export class CabecalhoModule {}
