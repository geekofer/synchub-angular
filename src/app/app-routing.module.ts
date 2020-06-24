import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then((m) => m.UsersModule)
  },
  {
    path: 'repos',
    loadChildren: () => import('./pages/repos/repos.module').then((m) => m.ReposModule)
  },
  {
    path: 'emojis',
    loadChildren: () => import('./pages/emojis/emojis.module').then((m) => m.EmojisModule)
  },
  {
    path: 'gists',
    loadChildren: () => import('./pages/gists/gists.module').then((m) => m.GistsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
