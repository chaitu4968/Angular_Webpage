import { Routes } from '@angular/router';
import { Login } from './login/login';
import { SearchBar } from './components/search-bar/search-bar';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'searchBar', component: SearchBar },

];
