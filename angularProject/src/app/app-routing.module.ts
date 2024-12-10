import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';


import { SellerhomeComponent } from './sellerhome/sellerhome.component';
 import{sellerauthGuard} from './sellerauth.guard'
import { UserhomeComponent } from './userhome/userhome.component';
import { userauthGuard } from './userauth.guard';
import { SellerproductlistComponent } from './sellerproductlist/sellerproductlist.component';
import { SelleraddproductComponent } from './selleraddproduct/selleraddproduct.component';
import { SerachproductComponent } from './serachproduct/serachproduct.component';

const routes: Routes = [
  {
    path: 'login',component:LoginComponent
  },
  {path: '',component:HomeComponent},
{
    path: 'register',component:RegisterComponent
  },

  {path:'sellerhome',component:SellerhomeComponent,canActivate:[sellerauthGuard]},
  {path:'userhome',component:UserhomeComponent,canActivate:[userauthGuard]},
  {path:'sellerproductlist',component:SellerproductlistComponent,canActivate:[sellerauthGuard]},
  {path:'selleraddproduct',component:SelleraddproductComponent,canActivate:[sellerauthGuard]},
  {path:'searchResult',component:SerachproductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
