import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';



import { SellerhomeComponent } from './sellerhome/sellerhome.component';
 import{sellerauthGuard} from './sellerauth.guard'
import { SelleraddproductComponent } from './selleraddproduct/selleraddproduct.component';
import { SerachproductComponent } from './serachproduct/serachproduct.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';

const routes: Routes = [

  {path: '',component:HomeComponent},

{ path:'seller-auth',component:SellerAuthComponent},
  {path:'sellerhome',component:SellerhomeComponent ,canActivate:[sellerauthGuard]},
  {path:'selleraddproduct',component:SelleraddproductComponent,canActivate:[sellerauthGuard]},
  {path:'searchResult',component:SerachproductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
