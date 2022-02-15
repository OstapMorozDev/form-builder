import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilderStyling } from 'src/app/models/classes/FormBuilderStyling.class';
import { FormChangesHandlingService } from 'src/app/services/form-changes-handling.service';
import { BorderStyles } from 'src/app/models/constants/BorderStyles';
import { FormStylingState } from 'src/app/reducers/form-styles/form-styles.reducer';
import { select, Store } from '@ngrx/store';
import { selectFormStyles } from 'src/app/reducers/form-styles/form-styles.selectors';
import { Observable, takeUntil } from 'rxjs';

@Component({
  selector: 'app-form-general-styling',
  templateUrl: './form-general-styling.component.html',
  styleUrls: ['./form-general-styling.component.scss']
})
export class FormGeneralStylingComponent extends FormBuilderStyling implements OnInit, OnDestroy {

  readonly borderStyles = BorderStyles;

  public styleFormGroup: FormGroup = new FormGroup({
    backgroundColor: new FormControl(),
    width: new FormControl(),
    height: new FormControl(),
    borderStyle: new FormControl(),
    borderColor: new FormControl(),
    borderWidth: new FormControl()
  });

  public initValues: FormStylingState;

  public formStyles$: Observable<FormStylingState> = this.store.pipe(
    select(selectFormStyles)
  )


  constructor(private handleChangesService: FormChangesHandlingService, private store: Store<FormStylingState>) {
    super();
  }

  ngOnInit(): void {

    this.formStyles$.pipe(takeUntil(this.destroyStream$))
    .subscribe(styles => this.initValues = styles)

    this.valueChanges().subscribe(formChanges => {
      this.handleChangesService.handleChanges(formChanges.type, formChanges.value)
    })
  }

  ngOnDestroy(): void {
    this.destroyStream()
  }

}

