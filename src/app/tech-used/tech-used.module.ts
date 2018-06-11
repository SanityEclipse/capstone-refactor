import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechUsedRoutingModule } from './tech-used-routing.module'

import { TechUsedComponent } from './tech-used.component';

@NgModule({
  imports:[ CommonModule, TechUsedRoutingModule],
  exports:[],
  declarations:[ TechUsedComponent ],
  providers: []
})


export class TechUsedModule {}
