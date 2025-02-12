import { Routes } from '@angular/router';
import { HomePage } from '../app/UI/home/home.page';
import { ROUTES } from '../app/constants/routes.cont';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomePage,
  },
];
