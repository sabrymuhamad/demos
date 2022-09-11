import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomControlsRoutingModule } from './custom-controls-routing.module';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DatepickerComponent
  ],
  imports: [
    CommonModule,
    CustomControlsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [DatepickerComponent]
})
export class CustomControlsModule { }
