import { Routes } from '@angular/router';
import { ErrorComponent } from './shared/error/error.component';

export const routes: Routes = [
	{
        path: 'home',
        loadChildren: () => import('./pages/home-page/home-page.routes').then(r => r.HOME_ROUTES),
    },
	{
        path: 'game',
        loadChildren: () => import('./pages/game-page/game-page.routes').then(r => r.GAME_ROUTES),
    },
	{
        path: 'results',
        loadChildren: () => import('./pages/results-page/results-page.routes').then(r => r.RESULTS_ROUTES),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
	{
        path: '**',
        component: ErrorComponent
    },
];
