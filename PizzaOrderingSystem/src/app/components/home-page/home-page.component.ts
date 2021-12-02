import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { autoLogout } from 'src/app/actions/pizza-auth.action';
import { Pizza } from 'src/app/models/Pizza';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

   constructor(private store: Store<Pizza>){}

  ngOnInit(): void {
  }

  onLogout(event:Event){
    event.preventDefault();
    this.store.dispatch(autoLogout());
  }

}
