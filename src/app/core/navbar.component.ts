import { Component } from '@angular/core';

@Component({
  selector:"app-navbar",
  template:`
    <nav class="navbar fixed-top">
      <span class="navbar-brand mb-0 h1">Navbar</span>
    </nav>
  `,
  styles:[`
    .navbar {
      background: black;
      color: red;
    }
    `]
})

export class NavbarComponent {

}
