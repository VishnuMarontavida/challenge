import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pizza } from 'src/app/models/Pizza';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-pizza-order',
  templateUrl: './add-pizza-order.component.html',
  styleUrls: ['./add-pizza-order.component.scss']
})
export class AddPizzaOrderComponent implements OnInit {

  postForm: FormGroup;
  display:string = "none";

  constructor(private store: Store<Pizza>) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  onAddPost(){}

  showDescriptionErrors() {}

}
