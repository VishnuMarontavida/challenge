import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-loading-animation',
  templateUrl: './home-loading-animation.component.html',
  styleUrls: ['./home-loading-animation.component.scss']
})
export class HomeLoadingAnimationComponent implements OnInit {

  showLoadingStatus: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showLoadingAnimation() {
    this.showLoadingStatus = true;
  }

  hideLoadingAnimation() {
    this.showLoadingStatus = false;
  }

}
