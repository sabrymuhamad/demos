import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomControlsComponent } from './custom-controls.component';

const routes: Routes = [
  { path: '', component: CustomControlsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomControlsRoutingModule { }
