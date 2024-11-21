import { LOCALE_ID,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegcompComponent } from './regcomp/regcomp.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import localeEn from '@angular/common/locales/en-IN';
import localeFr from '@angular/common/locales/fr-SY';
import localeMl from '@angular/common/locales/ml';
import { registerLocaleData } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    RegcompComponent,
    LoginComponent,
    ViewdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http, './assets/i18n/', '.json');
        },
        deps: [HttpClient]
      }
    })
  ],
  providers: [{
    provide: LOCALE_ID, useValue:'en-IN'
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
