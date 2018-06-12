import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { TechUsedComponent } from './tech-used.component';

const routes: Routes = [
  {
    path:'',
    component: TechUsedComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TechUsedRoutingModule {}
