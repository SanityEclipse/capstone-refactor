import { Component } from '@angular/core';

@Component({
  selector:"app-navbar",
  template:`
    <nav class="navbar fixed-top justify-content-center">
      <span class="navbar-brand mb-0 h1">The Flame Templar Saga</span>
    </nav>
  `,
  styles:[`
    .navbar {
      background: black;
      color: red;
      font-family: 'Press Start 2P'
    }
    `]
})

export class NavbarComponent {

}
