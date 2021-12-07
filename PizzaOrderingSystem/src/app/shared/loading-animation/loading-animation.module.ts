import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingAnimationRoutingModule } from './loading-animation-routing.module';
import { LoadingAnimationComponent } from './loading-animation.component';


@NgModule({
  declarations: [
    LoadingAnimationComponent
  ],
  imports: [
    CommonModule,
    LoadingAnimationRoutingModule
  ],
  exports: [
    // LoadingAnimationComponent
  ]
})
export class LoadingAnimationModule { }
