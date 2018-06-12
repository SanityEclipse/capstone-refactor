import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'new-game',
    loadChildren: './new-game/new-game.module#NewGameModule'
    // data: {}
  },
  {
    path: 'tech-used',
    loadChildren: './tech-used/tech-used.module#TechUsedModule'
    // data: {}
  },
  // {
  //   path: 'contact-me',
  //   loadChildren: './tech-used/tech-used.module#ContactMeModule',
  //   data: {}
  // }
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {}
