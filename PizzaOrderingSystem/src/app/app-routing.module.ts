import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guardAuthentication/auth.guard';
import { GuardAuthService } from './shared/guardAuthentication/auth.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  {
    path: 'homePage', loadChildren: () => import('./components/home-page/home-page.module').then(m => m.HomePageModule)
    , canActivate: [AuthGuard]
  },
  { path: 'loading-animation', loadChildren: () => import('./shared/loading-animation/loading-animation.module').then(m => m.LoadingAnimationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
