/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  NbStepperModule,
  
} from '@nebular/theme';
import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';

import { registerLocaleData } from '@angular/common';
import localeEsAR from '@angular/common/locales/es-AR';
registerLocaleData(localeEsAR, 'es-Ar');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbStepperModule,    
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',

          baseEndpoint: '/api/auth/',
          login: {
            endpoint: 'login',
            defaultErrors: ['La combinación de dni/contraseña no es correcta. Por favor, intente nuevamente'],
            defaultMessages: ['¡Ingreso correcto!'],
          },
          register: {
            // ...
            endpoint: 'register',
          },
  
        }),
      ],
    }),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-Ar' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
