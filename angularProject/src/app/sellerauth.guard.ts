import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SellerService } from 'src/assets/Services/seller.service';

export const sellerauthGuard: CanActivateFn = ()=> {
  const router = inject(Router)
  const sellerService = Inject (SellerService);
  if(localStorage.getItem('seller')){
    return true;
  }
  return sellerService.issellerLoggIn;

  
  }
  