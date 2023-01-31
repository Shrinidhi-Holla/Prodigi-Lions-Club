import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbhishekBhattacharyaComponent } from './abhishek-bhattacharya/abhishek-bhattacharya.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ManavSinghComponent } from './manav-singh/manav-singh.component';

const routes: Routes = [
  { path: "", component: LoginComponent},
  { path: "login", component:LoginComponent },
  { path: "homepage", component:HomepageComponent , children:[
    {
      path: "manavsingh", component:ManavSinghComponent
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
