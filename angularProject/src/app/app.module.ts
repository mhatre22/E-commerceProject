import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GroceryComponent } from './grocery/grocery.component';
import { VegetableComponent } from './vegetable/vegetable.component';
import { StaplesComponent } from './staples/staples.component';
import { DairyproductComponent } from './dairyproduct/dairyproduct.component';
import { CartComponent } from './cart/cart.component';
import { SellersignupComponent } from './sellersignup/sellersignup.component';
import { SellerloginComponent } from './sellerlogin/sellerlogin.component';
import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import{HttpClientModule} from '@angular/common/http'
import { provideToastr, ToastrModule } from 'ngx-toastr';  
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { UserhomeComponent } from './userhome/userhome.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { MobilehomeComponent } from './mobilehome/mobilehome.component';

import { MenfashionComponent } from './menfashion/menfashion.component';
import { KidfashionComponent } from './kidfashion/kidfashion.component';
import { WomenfashionComponent } from './womenfashion/womenfashion.component';
import { SellerproductlistComponent } from './sellerproductlist/sellerproductlist.component';
import { SelleraddproductComponent } from './selleraddproduct/selleraddproduct.component';
import { EcommerceService } from 'src/assets/Services/ecommerce.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    GroceryComponent,
    VegetableComponent,
    StaplesComponent,
    DairyproductComponent,
    CartComponent,
    SellersignupComponent,
    SellerloginComponent,
    SellerhomeComponent,
    UserhomeComponent,
    MobilesComponent,
    MobilehomeComponent,
    MenfashionComponent,
    KidfashionComponent,
    WomenfashionComponent,
    SellerproductlistComponent,
    SelleraddproductComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
  providers: [
    provideAnimations(),
    provideToastr(),
   
  ] ,

  bootstrap: [AppComponent]

})
export class AppModule { }
