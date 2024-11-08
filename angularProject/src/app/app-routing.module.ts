import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

import { GroceryComponent } from './grocery/grocery.component';
import { VegetableComponent } from './vegetable/vegetable.component';
import { StaplesComponent } from './staples/staples.component';
import { DairyproductComponent } from './dairyproduct/dairyproduct.component';
import { SellersignupComponent } from './sellersignup/sellersignup.component';
import { SellerloginComponent } from './sellerlogin/sellerlogin.component';
import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import{sellerauthGuard} from './sellerauth.guard'
import { UserhomeComponent } from './userhome/userhome.component';
import { userauthGuard } from './userauth.guard';
const routes: Routes = [
  {
    path: 'login',component:LoginComponent
  },
  {path: '',component:HomeComponent},
{
    path: 'register',component:RegisterComponent
  },
  { path: 'grocery',component:GroceryComponent,
    children:[
      {path:'vegetables', component:VegetableComponent},
      {path:'staples', component:StaplesComponent},
      {path:'dairyproducts', component:DairyproductComponent},
    ]
  },
  {path:'sellersignup',component:SellersignupComponent},
  {path:'sellerlogin',component:SellerloginComponent},
  {path:'sellerhome',component:SellerhomeComponent,canActivate:[sellerauthGuard]},
  {path: 'userhome',component:UserhomeComponent,canActivate:[userauthGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
