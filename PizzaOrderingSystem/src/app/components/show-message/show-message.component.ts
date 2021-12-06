import { Component, OnInit } from '@angular/core';
import { Pizza, PizzaInsertData } from 'src/app/models/Pizza';
import { Store } from '@ngrx/store';
import { addOrder } from 'src/app/actions/pizza-order.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.scss']
})
export class ShowMessageComponent implements OnInit {

  display: string = "none";

  successMessageStatus: boolean = true;
  messageTitle: string = '';
  message: string = '';

  constructor(private store: Store<Pizza>) { }

  ngOnInit() {
    //Load the initial data for the Add order page.
    this.setInitialData();
  }

  setInitialData() {

  }

  openModal(successMessageStatus: boolean, messageTitle: string, message: string) {
    this.display = "block";

    this.successMessageStatus = successMessageStatus;
    this.messageTitle = messageTitle;
    this.message = message;

  }
  onCloseHandled() {
    this.display = "none";

    this.successMessageStatus = true;
    this.messageTitle = '';
    this.message = '';

  }

}
