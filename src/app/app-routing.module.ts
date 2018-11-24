import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {HomeComponentComponent } from './home-component/home-component.component';
import {ShopComponent} from './shop/shop.component';

const routes: Routes = [
  {path: 'home', component: HomeComponentComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
