import { Component, ViewChild, AfterViewInit} from "@angular/core";
// import { TemplateName } from "tbd";
import { DataService} from "./data.service";{}

@Component({
  selector: 'kanban-component',
  template: `tbd`,
  styles: [``]
})
export class KanbanComponent implements AfterViewInit {

  @ViewChild("kanban")
  // define

  config: any = {
    columnWidthSpec: "Auto"
  };

  constructor(private ds: DataService) {    
  }

  ngAfterViewInit(): void {
    this.ds.getColumns().subscribe(result => this.config.columns = result);
    this.ds.getCards().subscribe(result => this.config.cards = result);
  }
}