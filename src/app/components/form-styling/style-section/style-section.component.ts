import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';


import { FormElement } from 'src/app/classes/form-element.class';
import { changePlaceholderText, changeWidth, changeHeight, changeFontSize, toggleIsRequired, changeBorderStyle, changeTextColor, changeBorderColor, changeBorderWidth, changeFontWeight } from 'src/app/reducers/drop/drop.section.actions';
import { StyleSectionState } from 'src/app/reducers/style/style-section.reducer';
import { selectedElement } from 'src/app/reducers/style/style-section.selectors';

@Component({
  selector: 'app-style-section',
  templateUrl: './style-section.component.html',
  styleUrls: ['./style-section.component.scss']
})
export class StyleSectionComponent {

  @Input() element: FormElement;
  public selectedFormElement$: Observable<FormElement | null> = this.store$.pipe(select(selectedElement));

  @ViewChild("textInput", { static: false })
  checkboxRef: ElementRef | undefined;

  constructor(private store$: Store<StyleSectionState>) { }



  changePlaceholderText(elementID: number, newText: string) {
    this.store$.dispatch(changePlaceholderText({ elementID, newText }))
  }

  changeWidth(elementID: number, width: string) {
    this.store$.dispatch(changeWidth({ elementID, width }))
  }

  changeHeight(elementID: number, height: string) {
    this.store$.dispatch(changeHeight({ elementID, height }))
  }

  changeFontSize(elementID: number, fontSize: string) {
    this.store$.dispatch(changeFontSize({ elementID, fontSize }))
  }

  changeFontWeight(elementID: number, weight: string) {
    this.store$.dispatch(changeFontWeight({ elementID, weight }))
  }

  changeBorderStyle(elementID: number, borderStyle: string) {
    this.store$.dispatch(changeBorderStyle({ elementID, borderStyle }));
  }

  changeBorderColor(elementID: number, color: string) {
    this.store$.dispatch(changeBorderColor({ elementID, color }))
  }

  changeBorderWidth(elementID: number, width: "string") {
    this.store$.dispatch(changeBorderWidth({ elementID, width }))
  }

  toggleIsRequired(elementID: number, isRequired: boolean) {
    this.store$.dispatch(toggleIsRequired({ elementID, isRequired }))
  }

  changeTextColor(elementID: number, textColor: string) {
    this.store$.dispatch(changeTextColor({ elementID, textColor }));
  }




  handlePlaceholderInputBlur($event: any, elementID: number) {
    this.changePlaceholderText(elementID, $event.target.value)
  }

  handleWidthInputBlur($event: any, elementID: number) {
    this.changeWidth(elementID, $event.target.value)
  }

  handleHeightInputBlur($event: any, elementID: number) {
    this.changeHeight(elementID, $event.target.value);
  }

  handleFontSizeInputBlur($event: any, elementID: number) {
    this.changeFontSize(elementID, $event.target.value);
  }

  handleFontWeightChange($event: any, elementID: number) {
    this.changeFontWeight(elementID, $event.target.value);
  }

  handleCheckboxChange($event: any, elementID: number) {
    const isRequired = $event.target.checked;
    this.toggleIsRequired(elementID, isRequired);
    // this.checkboxRef?.nativeElement.setAttribute("required",)
    console.log(this.checkboxRef)
  }

  onBorderSelection($event: any, elementID: number) {
    console.log($event.target)
    this.changeBorderStyle(elementID, $event.target.value)
  }

  handleBorderColorInput($event: any, elementID: number) {
    console.log($event);

    this.changeBorderColor(elementID, $event as string)
  }

  handleBorderWidthInput($event: any, elementID: number) {
    this.changeBorderWidth(elementID, $event.target.value)
  }



  handleTextColorInput($event: any, elementID: number) {
    this.changeTextColor(elementID, $event as string)
  }

}
