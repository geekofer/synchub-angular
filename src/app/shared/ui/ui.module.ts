import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCardComponent } from './user-card/user-card.component';
import { SpinerComponent } from './spiner/spiner.component';
import { MessageComponent } from './message/message.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [UserCardComponent, SpinerComponent, MessageComponent, SearchComponent],
  imports: [CommonModule],
  exports: [UserCardComponent, SpinerComponent, MessageComponent, SearchComponent],
})
export class UiModule {}
