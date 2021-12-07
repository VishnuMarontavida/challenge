import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-animation',
  templateUrl: './loading-animation.component.html',
  styleUrls: ['./loading-animation.component.scss']
})
export class LoadingAnimationComponent implements OnInit {

  showLoadingStatus: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showLoadingAnimation() {
    this.showLoadingStatus = true;
  }

  hideLoadingAnimation() {
    this.showLoadingStatus = false;
  }

}
