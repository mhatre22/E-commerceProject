import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';



import { SellerhomeComponent } from './sellerhome/sellerhome.component';
 import{sellerauthGuard} from './sellerauth.guard'
import { SelleraddproductComponent } from './selleraddproduct/selleraddproduct.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerupdateProductComponent } from './sellerupdate-product/sellerupdate-product.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { UserauthComponent } from './userauth/userauth.component';
import { SellerloginComponent } from './sellerlogin/sellerlogin.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { userauthGuard } from './userauth.guard';

const routes: Routes = [

  {path: '',component:HomeComponent},

{ path:'seller-auth',component:SellerAuthComponent},
{path:'seller-login',component:SellerloginComponent},
  {path:'sellerhome',component:SellerhomeComponent ,canActivate:[sellerauthGuard]},
  {path:'selleraddproduct',component:SelleraddproductComponent,canActivate:[sellerauthGuard]},
  {path:'sellerupdateproduct/:id',component:SellerupdateProductComponent,canActivate:[sellerauthGuard]},
  {path:'searchresult',component:SearchresultComponent},
  {path:'productdetails/:id',component:ProductdetailsComponent},
  {path:'user-auth',component:UserauthComponent},
  {path:'userhome',component:UserhomeComponent,canActivate:[userauthGuard]},
  {path:'user-login',component:UserloginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
