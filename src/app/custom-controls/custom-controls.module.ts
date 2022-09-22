import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomControlsRoutingModule } from './custom-controls-routing.module';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomControlsComponent } from './custom-controls.component';
import { SharedModule } from '../shared/shared.module';
import { DirectivesModule } from '../directives/directives.module';
import { CustomInputComponent } from './custom-input/custom-input.component';


@NgModule({
  declarations: [
    DatepickerComponent,
    CustomControlsComponent,
    CustomInputComponent
  ],
  imports: [
    CommonModule,
    CustomControlsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DirectivesModule
  ],
  exports: [DatepickerComponent, CustomInputComponent]
})
export class CustomControlsModule { }
