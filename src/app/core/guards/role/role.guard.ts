import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../../services/services';

export const roleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const storageService = inject(StorageService);

  const expectedRole = route.data['expectedRole'];
  const role = storageService.getRole();

  if (role == expectedRole) return true;
  router.navigate(['/auth/not-authorized']);
  
  return false;
};
