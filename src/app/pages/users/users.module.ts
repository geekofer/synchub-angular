import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { PipesModule } from 'src/app/helpers/pipes/pipes.module';

import {
  ngxChartsBarModule,
  ngxChartsLineModule,
  ngxChartsPieModule,
} from '@tusharghoshbd/ngx-charts';

import { UsersComponent } from './users.component';
import { GithubUsersListComponent } from './github-users-list/github-users-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [UsersComponent, GithubUsersListComponent, UsersListComponent, UserDetailComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    UiModule,
    PipesModule,
    ngxChartsBarModule,
    ngxChartsLineModule,
    ngxChartsPieModule,
  ],
  exports: [],
})
export class UsersModule {}
