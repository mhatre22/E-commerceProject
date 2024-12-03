import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
export const sellerauthGuard: CanActivateFn = (route, state) => {
let _router=inject(Router)
  let islogInid = localStorage.getItem("islogIn");
  if(islogInid =="false"){
    alert("Seller please Login ")
    _router.navigate([''])
    return false;

  }
  return true;
  
};
