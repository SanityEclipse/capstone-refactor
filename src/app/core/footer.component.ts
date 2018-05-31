import { Component } from '@angular/core';

@Component({
  selector:"app-footer",
  template:`
    <nav class="navbar fixed-bottom">
      <span class="navbar-brand">Fixed bottom</span>
    </nav>
  `,
  styles:[`
    .navbar {
      background: black;
      color: red;
    }`
  ]
})

export class FooterComponent {

}
