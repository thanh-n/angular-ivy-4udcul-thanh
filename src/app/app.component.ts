import { Component, VERSION } from '@angular/core';
import {DataService} from "./data.service";{}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  currentDate = 'Friday, August 14';

}
