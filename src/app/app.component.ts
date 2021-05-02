import { Component } from '@angular/core';
import {MyServiceService} from './modules/dynamic/my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'del2';

  constructor(public h: MyServiceService) {
    this.h.a();
  }
}
