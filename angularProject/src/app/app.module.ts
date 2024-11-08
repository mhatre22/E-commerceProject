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
    provideToastr()
  ] ,
  bootstrap: [AppComponent]

})
export class AppModule { }
