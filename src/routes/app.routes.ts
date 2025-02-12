import { Routes } from '@angular/router';
import { ROUTES } from '@app/constants/routes.cont';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ROUTES.HOME.BASE,
  },
  {
    path: ROUTES.HOME.BASE,
    loadChildren: () => import('./home.routes').then((m) => m.homeRoutes),
  },
  {
    path: ROUTES.TASKS.BASE,
    loadChildren: () => import('./tasks.routes').then((m) => m.tasksRoutes),
  },
  {
    path: ROUTES.PROFILE.BASE,
    loadChildren: () => import('./profile.routes').then((m) => m.profileRoutes),
  },
  {
    path: '**',
    redirectTo: ROUTES.HOME.BASE,
  }
];
