import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfesionalesComponent } from './profesionales.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  {
    path: '',
    component: ProfesionalesComponent,
    children: [
      {
        path: 'registrar',
        component: RegistrarComponent,
      },
      {
        path: 'registrar/:id',
        component: RegistrarComponent,
      },
      {
        path: 'listar',
        component: ListarComponent,
      }],
  }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ProfesionalesRoutingModule {
}

export const routedComponents = [
    ProfesionalesComponent,
    ListarComponent,
    RegistrarComponent,
];
