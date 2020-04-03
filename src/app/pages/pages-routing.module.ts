import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'profesionales',
      loadChildren: () => import('./profesionales/profesionales.module')
        .then(m => m.ProfesionalesModule),
    },
    {
      path: 'pacientes',
      loadChildren: () => import('./pacientes/pacientes.module')
        .then(m => m.PacientesModule),
    },
    {
      path: 'primera-carga-datos',
      loadChildren: () => import('./pacientes/pacientes.module')
        .then(m => m.PacientesModule),
    },    
    {
      path: '',
      redirectTo: 'iot-dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
