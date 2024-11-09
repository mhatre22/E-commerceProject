import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const userauthGuard: CanActivateFn = (route, state) => {
let _router= inject(Router)
 let isLoginid = localStorage.getItem("isLogIn");
 if(isLoginid =="false"){
  alert("User please Login");
  _router.navigate(['/login'])
  return false;
 }

  return true;
};
