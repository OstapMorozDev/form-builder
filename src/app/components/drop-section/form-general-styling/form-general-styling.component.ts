import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, takeUntil } from 'rxjs';
import { FormBuilderStyling } from 'src/app/models/classes/FormBuilderStyling.class';
import { BorderStyles } from 'src/app/models/constants/BorderStyles';
import { IFormStylingState } from 'src/app/models/interfaces/IFormStylingState';
import { selectFormStyles } from 'src/app/reducers/form-styles/form-styles.selectors';
import { FormChangesHandlingService } from 'src/app/services/form-changes-handling.service';

@Component({
  selector: 'app-form-general-styling',
  templateUrl: './form-general-styling.component.html',
  styleUrls: ['./form-general-styling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormGeneralStylingComponent extends FormBuilderStyling<IFormStylingState> implements OnInit, OnDestroy {

  public borderStyles = BorderStyles;

  public styleFormGroup: FormGroup = new FormGroup({
    backgroundColor: new FormControl(),
    width: new FormControl(),
    height: new FormControl(),
    borderStyle: new FormControl(),
    borderColor: new FormControl(),
    borderWidth: new FormControl()
  });

  public initValues: IFormStylingState;

  public formStyles$: Observable<IFormStylingState> = this.store.pipe(
    select(selectFormStyles)
  )


  constructor(private formChangesHandlingService: FormChangesHandlingService, private store: Store<IFormStylingState>) {
    super();
  }

  ngOnInit(): void {

    this.formStyles$.pipe(takeUntil(this.destroyStream$))
    .subscribe(styles => this.initValues = styles)

    this.valueChanges().subscribe(formChanges => {
      this.formChangesHandlingService.handleChanges(formChanges.type, formChanges.value)
    })
  }

  ngOnDestroy(): void {
    this.destroyStream()
  }

}

