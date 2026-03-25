import { Routes } from '@angular/router';
import { AddName } from './add-name/add-name';
import { ModName } from './mod-name/mod-name';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'add-name'},
    {path: 'add-name', pathMatch: 'full', component: AddName},
    {path: 'mod-name', pathMatch: 'full', component: ModName},
];
