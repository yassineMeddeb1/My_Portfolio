import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/hero/hero').then(m => m.Hero)
    },
    {path: 'about', loadComponent: () => import('./components/about/about').then(m => m.About)},
    // {path: 'projects', loadComponent: () => import('./components/projects/projects').then(m => m.Projects)},
    {path: '**', redirectTo: ''}
];
