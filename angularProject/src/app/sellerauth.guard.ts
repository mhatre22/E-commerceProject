import { CanActivateFn } from '@angular/router';
export const sellerauthGuard: CanActivateFn = (route, state) => {

  let islogInid = localStorage.getItem("islogIn");
  if(islogInid =="false"){
    alert("Seller please Login  ")
    return false;

  }
  return true;
  
};
