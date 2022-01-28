import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FormTypes } from '../constants/form-types';
import { BorderControl } from '../interfaces/borderControl';
import { changeBackgroundColor, changeBorderColor, changeBorderControl, changeBorderStyle, changeBorderWidth, changeFontSize, changeFontWeight, changeHeight, changePlaceholderText, changeTextColor, changeWidth, toggleIsRequired } from '../reducers/drop/drop.section.actions';
import { StyleSectionState } from '../reducers/style/style-section.reducer';

@Injectable({
  providedIn: 'root'
})
export class FormChangesHandlingService {

  constructor(private store$: Store<StyleSectionState>) { }

  handleChanges(formType: string, value: string, elementId: number): void {
    switch (formType) {
      case FormTypes.placeholderText:
        this.changePlaceholderText(elementId, value);
        break;
      case FormTypes.widthInput:
        this.changeWidth(elementId, value);
        break;
      case FormTypes.heightInput:
        this.changeHeight(elementId, value);
        break;
      case FormTypes.fontSize:
        this.changeFontSize(elementId, value);
        break;
      case FormTypes.fontWeight:
        this.changeFontWeight(elementId, value);
        break;
      case FormTypes.borderStyle:
        this.changeBorderStyle(elementId, value);
        break;
      case FormTypes.borderColor:
        this.changeBorderColor(elementId, value);
        break;
      case FormTypes.borderWidth:
        this.changeBorderWidth(elementId, value);
        break;

      case FormTypes.textColor:
        this.changeTextColor(elementId, value);
        break;
      case FormTypes.backgroundColor:
        this.changeBackgroundColor(elementId, value)
        break;

      case FormTypes.borderControl:
        this.changeBorderControl(elementId, (value as unknown) as BorderControl)
        break;


    }

  }

  private changePlaceholderText(elementID: number, newText: string) {
    this.store$.dispatch(changePlaceholderText({ elementID, newText }))
  }


  private changeWidth(elementID: number, width: string) {
    this.store$.dispatch(changeWidth({ elementID, width }))
  }

  private changeHeight(elementID: number, height: string) {
    this.store$.dispatch(changeHeight({ elementID, height }))
  }

  private changeFontSize(elementID: number, fontSize: string) {
    this.store$.dispatch(changeFontSize({ elementID, fontSize }))
  }

  private changeFontWeight(elementID: number, weight: string) {
    this.store$.dispatch(changeFontWeight({ elementID, weight }))
  }

  private changeBorderStyle(elementID: number, borderStyle: string) {
    this.store$.dispatch(changeBorderStyle({ elementID, borderStyle }));
  }

  private changeBorderColor(elementID: number, color: string) {
    this.store$.dispatch(changeBorderColor({ elementID, color }))
  }

  private changeBorderWidth(elementID: number, width: string) {
    this.store$.dispatch(changeBorderWidth({ elementID, width }))
  }

  private toggleIsRequired(elementID: number, isRequired: boolean) {
    this.store$.dispatch(toggleIsRequired({ elementID, isRequired }))
  }

  private changeTextColor(elementID: number, textColor: string) {
    this.store$.dispatch(changeTextColor({ elementID, textColor }));
  }

  private changeBackgroundColor(elementID: number, color: string) {
    this.store$.dispatch(changeBackgroundColor({ elementID, color }));
  }

  private changeBorderControl(elementID: number, borderControl: BorderControl) {
    this.store$.dispatch(changeBorderControl({ elementID, borderControl }));
  }
}


