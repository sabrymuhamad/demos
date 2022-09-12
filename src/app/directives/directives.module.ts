import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { BasicHighlightDirective } from './basic-highlight.directive';


@NgModule({
  declarations: [
    BasicHighlightDirective
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule
  ],
  exports:[BasicHighlightDirective]
})
export class DirectivesModule { }
