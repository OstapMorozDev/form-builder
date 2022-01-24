import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormElement } from 'src/app/classes/form-element.class';
import { changePlaceholderText, changeWidth, changeHeight, changeFontSize } from 'src/app/reducers/drop/drop.section.actions';
import { StyleSectionState } from 'src/app/reducers/style/style-section.reducer';
import { selectedElement } from 'src/app/reducers/style/style-section.selectors';

@Component({
  selector: 'app-style-section',
  templateUrl: './style-section.component.html',
  styleUrls: ['./style-section.component.scss']
})
export class StyleSectionComponent  {

  @Input() element : FormElement;
  public selectedFormElement$: Observable<FormElement | null> = this.store$.pipe(select(selectedElement));


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

  changeFontSize (elementID: number, fontSize: string) {
    this.store$.dispatch(changeFontSize({elementID, fontSize}))
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
    this.changeHeight(elementID, $event.target.value);
  }

}
