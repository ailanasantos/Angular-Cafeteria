import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CafeListComponent } from './components/cafe-list/cafe-list.component';
import { CafeFormComponent } from './components/cafe-form/cafe-form.component';

const routes: Routes = [
  {path: 'list', component: CafeListComponent},
  {path: 'new', component: CafeFormComponent},
  {path: 'edit/:id', component: CafeFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CafeRoutingModule { }
