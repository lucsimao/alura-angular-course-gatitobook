import { CabecalhoComponent } from './cabecalho.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CabecalhoComponent],
  imports: [CommonModule, RouterModule],
  exports: [CabecalhoComponent],
})
export class CabecalhoModule {}
