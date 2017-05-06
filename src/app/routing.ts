import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './tree/main/main.component';



const appRouters: Routes = [
    {path: '', redirectTo: '/auth', pathMatch: 'full'},
    {path: 'auth', component: MainComponent},
    {path: '**', component: MainComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRouters);