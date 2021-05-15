import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CurrentDateComponent } from './currentDate.component';
import { KanbanComponent } from './kanban.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CurrentDateComponent, KanbanComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
