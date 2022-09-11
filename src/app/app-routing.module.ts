import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'custom-controls',
    loadChildren: () => import('./custom-controls/custom-controls.module').then(m => m.CustomControlsModule)
  }, {
    path: '',
    redirectTo: 'custom-controls',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
