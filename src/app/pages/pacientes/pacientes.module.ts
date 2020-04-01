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
  NbDialogModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { PacientesRoutingModule, routedComponents, entryComponents } from './pacientes-routing.module';
import { FormsModule as ngFormsModule, ReactiveFormsModule } from '@angular/forms';



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
    PacientesRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    NbListModule,
    NbDialogModule.forChild(),
    NbRouteTabsetModule,
    NbStepperModule,
    NbTabsetModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ...routedComponents,    
  ],
  entryComponents: [
    ...entryComponents,
  ],
})
export class PacientesModule { }
