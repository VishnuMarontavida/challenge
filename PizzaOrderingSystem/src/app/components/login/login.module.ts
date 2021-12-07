import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoadingSpinnerComponent } from 'src/app/components/login/loading-spinner/loading-spinner.component';
// import { LoadingAnimationModule } from 'src/app/shared/loading-animation/loading-animation.module';

@NgModule({
  declarations: [
    LoginComponent,
    LoadingSpinnerComponent,
    // LoadingAnimationModule
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class LoginModule { }
