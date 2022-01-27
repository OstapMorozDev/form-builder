import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, pairwise, startWith } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

import { FormElement } from 'src/app/classes/form-element.class';

import { StyleSectionState } from 'src/app/reducers/style/style-section.reducer';
import { FormChangesHandlingService } from 'src/app/services/form-changes-handling.service';

@Component({
  selector: 'app-styling-section',
  templateUrl: './styling-section.component.html',
  styleUrls: ['./styling-section.component.scss'],
})
export class StyleSectionComponent implements OnInit, OnChanges {

  @Input() element: FormElement;



  public myForm: FormGroup = new FormGroup({
    "placeholderText": new FormControl(),
    "widthInput": new FormControl(),
    "heightInput": new FormControl(),
    "isRequired": new FormControl(),
    "borderStyle": new FormControl(),
    "borderWidth": new FormControl(),
    "fontSize": new FormControl(),
    "fontWeight": new FormControl(),
    "borderColor": new FormControl(),
    "textColor": new FormControl(),
    "backgroundColor": new FormControl()

  })

  private formValues: Object;

  constructor(private store$: Store<StyleSectionState>, private formChangesService: FormChangesHandlingService) {

  }

  ngOnChanges(changes: SimpleChanges): void {


    const chng = changes['element']

    if (!chng.firstChange) {
      const prev = chng.previousValue['id'];
      const current = chng.currentValue['id']

      if (prev !== current) {
        this.myForm.patchValue(this.formValues);
      }
    }


  }


  ngOnInit(): void {

    this.formValues = {
      placeholderText: this.element.placeholderText,
      widthInput: this.element.width,
      heightInput: this.element.height,
      isRequired: this.element.isRequired,
      borderStyle: this.element.borderStyle,
      borderWidth: this.element.borderWidth,
      fontSize: this.element.fontSize,
      fontWeight: this.element.fontWeight,
      borderColor: this.element.borderColor,
      textColor: this.element.textColor,
      backgroundColor: this.element.backgroundColor,
    }


    this.myForm.patchValue(this.formValues);

    const formSubscription = this.myForm.valueChanges
      .pipe(startWith(this.formValues),
        pairwise(),
        map((valChangesPair) => {
          let formType: string = "";

          for (let key in valChangesPair[0]) {
            if (valChangesPair[0][key] !== valChangesPair[1][key]) {
              formType = key;
            }
          } return { type: formType, value: valChangesPair[1][formType] as string }
        })
      )

    formSubscription.subscribe(formInput => {
      this.formChangesService.handleChanges(formInput?.type, formInput?.value, this.element.id)
    })
  }



}
