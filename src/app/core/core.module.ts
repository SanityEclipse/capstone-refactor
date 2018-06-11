import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer.component';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [ CommonModule, RouterModule ],
  exports: [ FooterComponent, NavbarComponent ],
  declarations: [ FooterComponent, NavbarComponent],
  providers: []
})

export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
