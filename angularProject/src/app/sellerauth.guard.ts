import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SellerService } from 'src/assets/Services/seller.service';

export const sellerauthGuard: CanActivateFn = ()=> {
  const router = inject(Router)
  const sellerService = Inject (SellerService);
  let islogin = localStorage.getItem('islogin');
  if(islogin == 'false'){
  router.navigateByUrl('sellerlogin')
  return false;
  }
  return true;
  
  }
  