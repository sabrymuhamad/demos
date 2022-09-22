import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
// import { isDate } from 'lodash-es';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent implements OnInit, ControlValueAccessor {
  public readonly inputValue = new FormControl(0, [
    Validators.required,
    Validators.min(1),
    Validators.max(100),
  ]);

  constructor() { }

  public ngOnInit(): void {
    combineLatest([
      this.inputValue.valueChanges
    ]).subscribe(() => {
      const value = this._getValue();
      this._onChange(value);
    });
  }

      /** Return a Date if the fields are ready or null otherwise */
      private _getValue(): number | null {
        try {
          if (
            this.inputValue.invalid)
            return null;
    
          const value:any = this.inputValue.value;
          return value;
        } catch {
          // Return null if something throws
          return null;
        }
      }

  private _onChange = (_value: number | null): void => undefined;
  public registerOnChange(fn: (value: number | null) => void): void {
    this._onChange = fn;
  }

  /** It's called in the component template when we have a "blur" or "input" event */
  public onTouched = (): void => undefined;
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public writeValue(value: number | null): void {
    if (value) {
      this.inputValue.setValue(value);
    } else {
      this.inputValue.setValue(null);
    }
  }

  public setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.inputValue.disable();
    } else {
      this.inputValue.enable();
    }
  }


}

