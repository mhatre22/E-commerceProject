import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';

import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import{HttpClientModule} from '@angular/common/http'
import { provideToastr, ToastrModule } from 'ngx-toastr';  
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { SelleraddproductComponent } from './selleraddproduct/selleraddproduct.component';
import { NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerupdateProductComponent } from './sellerupdate-product/sellerupdate-product.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { UserauthComponent } from './userauth/userauth.component';
import { SellerloginComponent } from './sellerlogin/sellerlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    SellerhomeComponent,
    SelleraddproductComponent,
    SellerAuthComponent,
    SellerupdateProductComponent,
    SearchresultComponent,
    ProductdetailsComponent,
    UserauthComponent,
    SellerloginComponent,
    UserloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbCarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
  providers: [
    provideAnimations(),
    provideToastr(),

  ],

  bootstrap: [AppComponent]

})
export class AppModule { }
