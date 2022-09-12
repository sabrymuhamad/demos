import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AnyComponentComponent } from './any-component/any-component.component';

@NgModule({
  declarations: [AnyComponentComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [AnyComponentComponent],
})
export class SharedModule {}
