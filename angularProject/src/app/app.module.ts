import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';

import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import{HttpClientModule} from '@angular/common/http'
import { provideToastr, ToastrModule } from 'ngx-toastr';  
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { SellerproductlistComponent } from './sellerproductlist/sellerproductlist.component';
import { SelleraddproductComponent } from './selleraddproduct/selleraddproduct.component';
import { NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';

import { SerachproductComponent } from './serachproduct/serachproduct.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    SellerhomeComponent,
    SellerproductlistComponent,
    SelleraddproductComponent,
    SerachproductComponent,
    SellerAuthComponent,



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
   
  ] ,

  bootstrap: [AppComponent]

})
export class AppModule { }
