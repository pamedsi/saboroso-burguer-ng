import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn, Router } from '@angular/router'
import { inject } from '@angular/core';
import { AuthenticationService } from '../../admin/security/AuthenticationService'
import { map } from 'rxjs'

export const canActivate: CanActivateFn = (_route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthenticationService)
  const router = inject(Router)

  return authService.validTokenForAdmin().pipe(
    map(isValid => {
      if (!isValid) {
          sessionStorage.setItem('redirectingTo', state.url)
        router.navigate(['/login'])
        return false
      }
      return true
    })
  )
}
