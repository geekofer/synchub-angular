import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GistsRoutingModule } from './gist-routing.module';

import { GistsComponent } from './gists.component';

@NgModule({
  declarations: [GistsComponent],
  imports: [CommonModule, GistsRoutingModule],
  exports: [],
})
export class GistsModule {}
