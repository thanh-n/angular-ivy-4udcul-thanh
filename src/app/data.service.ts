import {Injectable} from "@angular/core";
//import {Observable} from "rxjs/Observable";

@Injectable()
export class DataService {
  cards: any[] = [
    { id: 1, "text":"Appointments are not showing up in the itinerary for the departure date. Confirm that the assignee can see all activities."
    },
    { id: 2, "text":"Appointments are not showing up in the itinerary for the departure date. Confirm that the assignee can see all activities."
    }
  ]

  columns: any[] = [
    {name: "Backlog", id:"1"},
    {name: "In Progress", id:"2"},
    {name: "QA", id:"3"},
    {name: "Done", id:"4"},
  ]

  getCards(): Observable<any[]> {

    // return the cards
  };

  getColumns(): Observable<any[]> {
    // return the columns
  };

  // addTasks(): Observable<any[]> {
  //   // insert new task
  // };

  // countTotalCards(): Observable<any[]> {

  // };
}