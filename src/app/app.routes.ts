import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home.page').then(m => m.HomePage) },
  { path: 'login', loadComponent: () => import('./pages/login.page').then(m => m.LoginPage) },
  { path: 'filmes', loadComponent: () => import('./pages/movies.page').then(m => m.MoviesPage) },
  { path: 'avaliacoes', loadComponent: () => import('./pages/reviews.page').then(m => m.ReviewsPage) }
];
