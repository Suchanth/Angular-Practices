import { Routes } from '@angular/router';
import { StandaloneComponent } from './standalone/standalone.component';

export const routes: Routes = [
    {
        path:'test',
        loadComponent: () =>
            import('./standalone/standalone.component').then(
                (m)=>m.StandaloneComponent
            )
    }
];
