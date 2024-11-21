import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegcompComponent } from './regcomp/regcomp.component';
import { LoginComponent } from './login/login.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';

const routes: Routes = [
{path:'',component:LoginComponent},
{path:'reg',component:RegcompComponent},
{path:'log',component:LoginComponent},
{path:'view',component:ViewdetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
