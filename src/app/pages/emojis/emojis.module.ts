import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmojisRoutingModule } from './emojis-routing.module';

import { EmojisComponent } from './emojis.component';

@NgModule({
  declarations: [EmojisComponent],
  imports: [CommonModule, EmojisRoutingModule],
  exports: [],
})
export class EmojisModule {}
