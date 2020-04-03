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
  NbListModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { ProfesionalesRoutingModule, routedComponents } from './profesionales-routing.module';
import { FormsModule as ngFormsModule } from '@angular/forms';

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
