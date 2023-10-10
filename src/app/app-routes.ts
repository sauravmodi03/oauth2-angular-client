import { Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    { path: '', redirectTo: "auth", pathMatch: 'full'},
    { path: 'home', component: HomeComponent, pathMatch: 'full'},
    { path: 'auth', component: AuthComponent, pathMatch: 'full'},
    { path: 'login', component: LoginComponent, pathMatch: 'full'},
    { path: 'authorize', redirectTo: "auth", pathMatch: 'full'}
];

export default routes;