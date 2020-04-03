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
  NbWindowModule,
  NbRouteTabsetModule,  
  NbTabsetModule,
  NbStepperModule,
  NbSpinnerModule
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { PacientesRoutingModule, routedComponents } from './pacientes-routing.module';
import { FormsModule as ngFormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimerEncuestaComponent } from './primer-encuesta/primer-encuesta.component';



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
    NbWindowModule,
    NbRouteTabsetModule,
    NbTabsetModule,
    ReactiveFormsModule,
    NbStepperModule,
    NbSpinnerModule
  ],
  declarations: [
    ...routedComponents,
    PrimerEncuestaComponent,    
  ],

})
export class PacientesModule { }
