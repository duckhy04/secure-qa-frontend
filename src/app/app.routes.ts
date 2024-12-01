import { Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { MainComponent } from './layouts/main/main.component';
import { roleGuard } from './core/guards/role/role.guard';

export const routes: Routes = [
    {
        path: '', 
        component: MainComponent,
        children: [
            {
                path: 'home',
                loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
            },
            {
                data: { expectedRole: '[ROLE_ADMIN]' },
                canActivate: [roleGuard],
                path: 'user-manager',
                loadComponent: () => import('./features/user-manager/user-manager.component').then(m => m.UserManagerComponent),
            },
        ]
    },
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            {
                path: 'login',
                loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
            },
            {
                path: 'sign-up',
                loadComponent: () => import('./features/auth/sign-up/sign-up.component').then(m => m.SignUpComponent)
            },
            {
                path: 'not-authorized',
                loadComponent: () => import('./features/auth/not-authorize/not-authorize.component').then(m => m.NotAuthorizeComponent)
            }
        ]
    },

];
