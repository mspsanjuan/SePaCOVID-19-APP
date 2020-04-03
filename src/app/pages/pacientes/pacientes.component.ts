import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ngx-pacientes',
  template: `
  <router-outlet></router-outlet>
`,
})
export class PacientesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
