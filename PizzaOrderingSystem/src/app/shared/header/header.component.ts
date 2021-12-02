import { Component, OnInit } from '@angular/core';
import { OrderState } from 'src/app/state/pizza-order.state';
import { select, Store } from '@ngrx/store';
import { autoLogout } from 'src/app/actions/pizza-auth.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<OrderState>) { }

  ngOnInit() {
  }

  onLogout(event: Event) {
    event.preventDefault();
    this.store.dispatch(autoLogout());
  }

}
