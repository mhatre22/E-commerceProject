import { CanActivateFn } from '@angular/router';

export const userauthGuard: CanActivateFn = (route, state) => {

 let isLoginid = localStorage.getItem("isLogin");
 if(isLoginid =="false"){
  alert("User please Login");
  return false;
 }

  return true;
};
