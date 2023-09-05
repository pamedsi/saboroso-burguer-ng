import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticationService } from './AuthenticationService';
import { map } from 'rxjs';

export const canActivate: CanActivateFn = (_route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);
  
  return authService.validToken().pipe(
    map(isValid => {
      if (!isValid) {
          sessionStorage.setItem('redirectingTo', state.url)
        router.navigate(['/login']);
        return false;
      }
      return true;
    })
  );
};
