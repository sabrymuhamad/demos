import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AnyComponentComponent } from './any-component/any-component.component';
import { RxjsLibComponent } from './rxjs-lib/rxjs-lib.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

@NgModule({
  declarations: [AnyComponentComponent, RxjsLibComponent, UnauthorizedComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [AnyComponentComponent],
})
export class SharedModule {}
