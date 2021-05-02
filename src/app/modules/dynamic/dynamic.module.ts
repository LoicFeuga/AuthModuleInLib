import {Inject, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyServiceService} from './my-service.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DynamicModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: DynamicModule,
      providers: [MyServiceService]
    };
  }
}
