import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './tree/main/main.component';
import { MatchesGridComponent } from './matches/matches-grid/matches-grid.component';


const appRouters: Routes = [
    {path: '', redirectTo: '/tree', pathMatch: 'full'},
    {path: 'tree', component: MainComponent},
    {path: 'matches', component: MatchesGridComponent},
    {path: '**', component: MainComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRouters);