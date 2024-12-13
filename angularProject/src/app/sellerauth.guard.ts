import {  Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SellerService } from 'src/assets/Services/seller.service';

export const sellerauthGuard: CanActivateFn = ()=> {
  const router = Inject(Router)
  const sellerService = Inject(SellerService);
  if (localStorage.getItem('seller')) {
    return true;
  }

  if (sellerService.issellerLoggIn) {
    return true;
  }
  alert("Seller Please Login !!")
  router.navigateByUrl('/seller-auth');
  return false; 
};
  
  
  