import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { BasicHighlightDirective } from './basic-highlight.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [BasicHighlightDirective, UnlessDirective],
  imports: [CommonModule, DirectivesRoutingModule],
  exports: [BasicHighlightDirective, UnlessDirective],
})
export class DirectivesModule {}
