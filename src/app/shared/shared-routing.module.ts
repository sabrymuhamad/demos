import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnyComponentComponent } from './any-component/any-component.component';
import { RxjsLibComponent } from './rxjs-lib/rxjs-lib.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const routes: Routes = [
  { path: 'rxjs', component: RxjsLibComponent },
  { path: 'dummy', component: AnyComponentComponent },
  { path: '401', component: UnauthorizedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule { }
