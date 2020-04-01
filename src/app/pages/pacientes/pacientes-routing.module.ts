import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PacientesComponent } from './pacientes.component';
import { RegistrarPacientesComponent } from './registrar-pacientes/registrar-pacientes.component';
import { ListarPacientesComponent } from "./listar-pacientes/listar-pacientes.component";
import { PrimeraCargaDatosComponent } from './primera-carga-datos/primera-carga-datos.component';
import { FormularioComponent } from './primera-carga-datos/formulario/formulario.component';


const routes: Routes = [
  {
    path: '',
    component: PacientesComponent,
    children: [
      {
        path: 'registrar',
        component: RegistrarPacientesComponent,
      },
      {
        path: 'registrar/:id',
        component: RegistrarPacientesComponent,
      },
      {
        path: 'listar',
        component: ListarPacientesComponent,
      },
      {
        path: 'primera-carga-datos',
        component: PrimeraCargaDatosComponent,
      },
    //   {
    //     path: 'datepicker',
    //     component: DatepickerComponent,
    //   },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class PacientesRoutingModule {
}

export const routedComponents = [
    PacientesComponent,
    ListarPacientesComponent,
    RegistrarPacientesComponent,
    PrimeraCargaDatosComponent,
    FormularioComponent,
  ];

  export const entryComponents = [
    FormularioComponent,
  ];