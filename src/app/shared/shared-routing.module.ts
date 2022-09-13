import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsLibComponent } from './rxjs-lib/rxjs-lib.component';

const routes: Routes = [{ path: 'rxjs', component: RxjsLibComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
