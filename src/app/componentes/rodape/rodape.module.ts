import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RodapeComponent } from './rodape.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RodapeComponent],
  imports: [CommonModule, RouterModule],
  exports: [RodapeComponent],
})
export class RodapeModule {}
