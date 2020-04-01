import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbListModule
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ProfesionalesRoutingModule, routedComponents } from './profesionales-routing.module';
// import { ProfesionalesComponent } from './profesionales.component';
// import { RegistrarComponent } from './registrar/registrar.component';
// import { ListarComponent } from './listar/listar.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
// import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
// import { DatepickerComponent } from './datepicker/datepicker.component';
// import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    ProfesionalesRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    NbListModule,
  ],
  declarations: [
    // ProfesionalesComponent,
    // RegistrarComponent,
    // ListarComponent,
    ...routedComponents,
    // FormInputsComponent,
    // FormLayoutsComponent,
    // DatepickerComponent,
  ],
})
export class ProfesionalesModule { }
