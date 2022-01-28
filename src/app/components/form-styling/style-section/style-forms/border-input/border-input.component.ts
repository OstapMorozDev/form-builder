import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-border-input',
  templateUrl: './border-input.component.html',
  styleUrls: ['./border-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => BorderInputComponent),
    multi: true
  }]
})
export class BorderInputComponent implements ControlValueAccessor {

  public value: any;
  onTouched: () => void;
  onChange(_: any) { }

  writeValue(value: any): void {
    this.value = { ...value };
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }


  bottomClick() {
    this.value.borderBottom = !this.value.borderBottom;
    this.onChange({ ...this.value });
  }

  topClick() {
    this.value.borderTop = !this.value.borderTop;
    this.onChange({ ...this.value });
  }

  leftClick() {
    this.value.borderLeft = !this.value.borderLeft;
    this.onChange({ ...this.value });
  }

  rightClick() {
    this.value.borderRight = !this.value.borderRight;
    this.onChange({ ...this.value });
  }
}
