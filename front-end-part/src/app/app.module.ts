import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms'
import {AppComponent} from './app.component';
import {FormComponent} from './form/form.component';
import {ListComponent} from './form/list/list.component';
import {HttpClientModule} from '@angular/common/http';



import { SocialLoginModule } from 'angular5-social-login';
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angular5-social-login';


import {LoginComponent} from './login/login.component';
import { ReversePipe } from './reverse.pipe';
import { SortByDayPipe } from './sort-by-day.pipe';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('1038775111083-gg7m050r0a1stve0lj756ufi9r756gjg.apps.googleusercontent.com')
    },
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider('518087935191007')
    }
  ]);
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    LoginComponent,
    ReversePipe,
    SortByDayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
