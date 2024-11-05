import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RouterLink } from '@angular/router';
import { GroceryComponent } from './grocery/grocery.component';
import { VegetableComponent } from './vegetable/vegetable.component';
import { StaplesComponent } from './staples/staples.component';
import { DairyproductComponent } from './dairyproduct/dairyproduct.component';
const routes: Routes = [
  {
    path: 'login',component:LoginComponent
  },
  {path: '',component:HomeComponent},
  {
    path: 'register',component:RegisterComponent
  },
  {
    path: 'grocery',component:GroceryComponent,
    children:[
      {path:'vegetables',component:VegetableComponent},
      {path:'staples',component:StaplesComponent},
      {path:'dairyproducts',component:DairyproductComponent},
    ]
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
