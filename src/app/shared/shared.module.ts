import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AnyComponentComponent } from './any-component/any-component.component';
import { RxjsLibComponent } from './rxjs-lib/rxjs-lib.component';

@NgModule({
  declarations: [AnyComponentComponent, RxjsLibComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [AnyComponentComponent],
})
export class SharedModule {}
