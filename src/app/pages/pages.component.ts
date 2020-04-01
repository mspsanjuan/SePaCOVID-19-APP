import { Component, Directive, HostListener } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

import { Location } from '@angular/common';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})


export class PagesComponent {

  menu = MENU_ITEMS;
}

// @Directive({
//   selector: '[backButton]'
// })

// export class BackButtonDirective {
//   constructor(private location: Location) { }

//   @HostListener('click')
//   onClick() {
//       this.location.back();
//   }
// }
