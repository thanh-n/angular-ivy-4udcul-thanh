import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h2>{{currentDate}}!</h2>`,
  styles: [`h2 { font-family: Lato; }`]
})
export class CurrentDateComponent  {
  @Input() currentDate: string;
}
