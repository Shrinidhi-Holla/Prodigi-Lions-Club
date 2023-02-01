import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbhishekBhattacharyaComponent } from './abhishek-bhattacharya/abhishek-bhattacharya.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ManavSinghComponent } from './manav-singh/manav-singh.component';
import { AuthGuard } from './services/auth.guard';
const routes: Routes = [
  { path: "", component: LoginComponent,pathMatch:"full",canActivate:[AuthGuard]},
  { path: "login", component:LoginComponent,pathMatch:"full" },
  { path: "homepage", component:HomepageComponent ,canActivate:[AuthGuard],children:[
    {
      path: "manavsingh", component:ManavSinghComponent,canActivate:[AuthGuard]
    },
    {
      path: "AbhishekBhattacharya", component:AbhishekBhattacharyaComponent
    },
    
  ] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
