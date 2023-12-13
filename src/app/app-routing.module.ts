import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThanksComponent } from './thanks/thanks.component';
import { AddEditComponent } from './thanks/add-edit/add-edit.component';

const routes: Routes = [
  {path: 'thanks',component:ThanksComponent},
  {path: 'add',component:AddEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
