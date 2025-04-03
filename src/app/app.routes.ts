import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'Basics Pipes',
    loadComponent: () => import('./pages/basic-page/basic-page.component'),
  },
  {
    path: 'numbers',
    title: 'Numbers Pipes',
    loadComponent: () => import('./pages/numbers-page/numbers-page.component'),
    // new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(import('./pages/numbers-page/numbers-page.component'));
    //   }, 5000);
    // }),
  },
  {
    path: 'uncommon',
    title: 'Uncommon Pipes',
    loadComponent: () =>
      import('./pages/uncommon-page/uncommon-page.component'),
  },
  {
    path: 'custom',
    title: 'Custom Pipes',
    loadComponent: () => import('./pages/custom-page/custom-page.component'),
  },
  {
    path: '**',
    redirectTo: 'basic',
  },
];
