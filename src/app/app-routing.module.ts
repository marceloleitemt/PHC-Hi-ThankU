import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ThanksComponent } from './thanks/thanks.component';
import { SobreComponent } from './thanks/sobre/sobre.component';
import { AdaptComponent } from './thanks/adapt/adapt.component';
import { ImpactComponent } from './thanks/impact/impact.component';
import { CoolComponent } from './thanks/cool/cool.component';
import { AddEditComponent } from './thanks/add-edit/add-edit.component';

const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'thanks',component:ThanksComponent},
  {path: 'sobre',component:SobreComponent},
  {path: 'adapt',component:AdaptComponent},
  {path: 'impact',component:ImpactComponent},
  {path: 'cool',component:CoolComponent},
  {path: 'add-edit',component:AddEditComponent},

  {path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
