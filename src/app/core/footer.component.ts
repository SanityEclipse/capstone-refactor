import { Component } from '@angular/core';

@Component({
  selector:"app-footer",
  template:`
    <nav class="navbar fixed-bottom justify-content-center">
      <span class="navbar-brand">© 2016-2018 Thomas Rizzo</span>
    </nav>
  `,
  styles:[`
    .navbar {
      background: black;
      color: red;
      font-family: 'Press Start 2P';
    }`
  ]
})

export class FooterComponent {}
