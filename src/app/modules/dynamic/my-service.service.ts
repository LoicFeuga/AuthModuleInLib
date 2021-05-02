import {Inject, Injectable, InjectionToken} from '@angular/core';


export const AUTH_CONFIG = new InjectionToken<any>(
  'AUTH_CONFIG'
);

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  env: any;

  constructor() {
   // this.env = JSON.parse(localStorage.getItem('env'));
    console.log(this.env);

  }

  a() {

  }
}
