import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from 'src/assets/Services/user.service';

export const userauthGuard: CanActivateFn = (route, state) => {
  const router= Inject(Router);
  const userService = Inject(UserService);
  if (localStorage.getItem('user')) {
    return true;
  }
  if (userService.isuserLoggIn) {
    return true;
  }
  alert("User Please Login !!")
  router.navigateByUrl('/')
  return false; 
};
