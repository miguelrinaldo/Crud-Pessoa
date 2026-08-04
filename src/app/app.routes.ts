import { Routes } from '@angular/router';
import { Formulario
 } from './component/formulario/formulario';
 import { HomeComponent } from './component/home-component/home-component';
export const routes: Routes = [
    {
        path: '/home',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent

    },
    {
        path:'cadastro',
        component: Formulario
    }
];
