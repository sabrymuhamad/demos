import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { isDate } from 'lodash-es';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true,
    },
  ],
})
export class DatepickerComponent implements OnInit, ControlValueAccessor {
  public readonly dayControl = new FormControl(null, [
    Validators.required,
    Validators.min(1),
    Validators.max(31),
  ]);
  public readonly monthControl = new FormControl(null, [
    Validators.required,
    Validators.min(1),
    Validators.max(12),
  ]);
  public readonly yearControl = new FormControl(null, [
    Validators.required,
    Validators.min(0),
  ]);



  private _onChange = (_value: Date | null): void => undefined;
  public registerOnChange(fn: (value: Date | null) => void): void {
    this._onChange = fn;
  }

  /** It's called in the component template when we have a "blur" or "input" event */
  public onTouched = (): void => undefined;
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.dayControl.disable();
      this.monthControl.disable();
      this.yearControl.disable();
    } else {
      this.dayControl.enable();
      this.monthControl.enable();
      this.yearControl.enable();
    }
  }


  constructor() { }

  public ngOnInit(): void {
    combineLatest([
      this.dayControl.valueChanges,
      this.monthControl.valueChanges,
      this.yearControl.valueChanges,
    ]).subscribe(() => {
      const value = this._getValue();
      this._onChange(value);
    });
  }
    /** Return a Date if the fields are ready or null otherwise */
    private _getValue(): Date | null {
      try {
        if (
          this.dayControl.invalid ||
          this.monthControl.invalid ||
          this.yearControl.invalid
        )
          return null;
  
        const day:any = this.dayControl.value;
        const month:any = this.monthControl.value;
        const year:any = this.yearControl.value;
        const date = new Date(year, month - 1, day);
        return date;
      } catch {
        // Return null if something throws
        return null;
      }
    }

  public writeValue(value: Date | null): void {
    if (isDate(value)) {
      const day:any = value.getDate();
      const month:any = value.getMonth() + 1;
      const year:any = value.getFullYear();

      this.dayControl.setValue(day);
      this.monthControl.setValue(month);
      this.yearControl.setValue(year);
    } else {
      this.dayControl.setValue(null);
      this.monthControl.setValue(null);
      this.yearControl.setValue(null);
    }
  }

}
