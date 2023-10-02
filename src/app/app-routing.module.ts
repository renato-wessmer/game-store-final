import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ConsoleComponent } from './console/console.component';
import { GamesComponent } from './games/games.component';
import { PromotionComponent } from './promotion/promotion.component';
import { RestrictComponent } from './restrict/restrict.component';
import { GuardGuard } from './guard.guard';

const routes: Routes = [
  {path: 'console', component:ConsoleComponent},
  {path: 'games', component:GamesComponent},
  {path: 'index', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'promotion', component: PromotionComponent},
  {path: 'restrict', component: RestrictComponent, canActivate: [GuardGuard]},
  {path: '', redirectTo: '/index', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
