import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {DynamicModule} from './modules/dynamic/dynamic.module';


export function init(http: HttpClient, service: MyServiceService) {
  return () => http.get('/assets/conf.json').toPromise().then(v => {
    environment.url = 'coucou';
    service.env = v;
  });
}

const routes: Routes = [
  {path: 'first', component: SecondComponent, canActivate: [AuthGuard]}
];

import {environment} from '../environments/environment';

import {AUTH_CONFIG, MyServiceService} from './modules/dynamic/my-service.service';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './modules/dynamic/auth.guard';
import {SecondComponent} from './second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: init,
    deps: [HttpClient, MyServiceService],
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
