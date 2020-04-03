import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent  } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { PrimeraEncuestaComponent } from './primera-encuesta/primera-encuesta.component';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
    PrimeraEncuestaComponent,
    AuthComponent,
  ],
})
export class PagesModule {
}
