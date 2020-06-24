import { NgModule } from '@angular/core';

import { UserVerificationPipe } from './user-verification.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
  imports: [],
  exports: [UserVerificationPipe, SearchPipe],
  declarations: [UserVerificationPipe, SearchPipe],
})
export class PipesModule {}
