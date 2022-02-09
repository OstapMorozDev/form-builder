import {  Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, } from '@angular/core';
import { Store } from '@ngrx/store';
import {  map, pairwise, startWith, Subject, takeUntil } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

import { FormElement } from 'src/app/classes/form-element.class';

import { StyleSectionState } from 'src/app/reducers/fields-styles/style-section.reducer';
import { FormChangesHandlingService } from 'src/app/services/form-changes-handling.service';
import {  Portal } from '@angular/cdk/portal';


@Component({
  selector: 'app-styling-section',
  templateUrl: './styling-section.component.html',
  styleUrls: ['./styling-section.component.scss'],
})
export class StyleSectionComponent implements OnInit, OnChanges, OnDestroy {

  @Input() element: FormElement;

  public myForm: FormGroup = new FormGroup({
    placeholderText: new FormControl(),
    width: new FormControl(),
    height: new FormControl(),
    isRequired: new FormControl(),
    borderStyle: new FormControl(),
    borderWidth: new FormControl(),
    fontSize: new FormControl(),
    fontWeight: new FormControl(),
    borderColor: new FormControl(),
    textColor: new FormControl(),
    backgroundColor: new FormControl(),
    borderControl: new FormControl(),
    checkboxStyle: new FormControl(),
    labelText: new FormControl(),
  })

  private destroy$: Subject<boolean> = new Subject<boolean>();
  public selectedPortal: Portal<any>;

  constructor(private store$: Store<StyleSectionState>, private formChangesService: FormChangesHandlingService) {

  }

  ngOnInit(): void {

    this.myForm.patchValue(this.element);
    const formSubscription = this.myForm.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        startWith(this.element),
        pairwise(),
        map((valChangesPair) => {
          let inputType: string = "";

          for (let key in valChangesPair[0]) {
            if (valChangesPair[0][key] !== valChangesPair[1][key]) {
              inputType = key;
            }
          } return { type: inputType, value: valChangesPair[1][inputType] }
        })
      )

    formSubscription.subscribe(formChanges => {
      this.formChangesService.handleChanges(formChanges.type, formChanges.value, this.element.id)
    })
  }

  ngOnChanges(changes: SimpleChanges): void {

    const chng = changes['element']

    if (!chng.firstChange) {
      const prev = chng.previousValue['id'];
      const current = chng.currentValue['id']

      if (prev !== current) {
        this.myForm.patchValue(this.element);
      }
    }
  }


  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }


}
