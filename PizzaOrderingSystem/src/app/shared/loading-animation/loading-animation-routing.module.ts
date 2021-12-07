import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingAnimationComponent } from './loading-animation.component';

const routes: Routes = [{ path: '', component: LoadingAnimationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadingAnimationRoutingModule { }
