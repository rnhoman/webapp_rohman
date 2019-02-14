import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeId from '@angular/common/locales/id';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './core/_helpers/jwt.interceptor';
import { fakebackendProvider } from './core/_helpers/fake-bakcend';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ApolloModule, Apollo } from 'apollo-angular'
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SmartadminDatatableModule } from './shared/ui/datatable/smartadmin-datatable.module';

registerLocaleData(localeId, 'id');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ApolloModule,
    HttpLinkModule,
    SmartadminDatatableModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'id' }
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // fakebackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({uri: 'http://192.168.7.94:4466'}),
      cache: new InMemoryCache()
    });
  }
}
