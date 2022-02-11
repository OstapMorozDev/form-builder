import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilderStyling } from 'src/app/classes/form-builder-styling.class';
import { FormChangesHandlingService } from 'src/app/services/form-changes-handling.service';
import { BorderStyles } from 'src/app/constants/BorderStyles';
import { FormStylingState } from 'src/app/reducers/form-styles/form-styles.reducer';
import { select, Store } from '@ngrx/store';
import { selectFormStyles } from 'src/app/reducers/form-styles/form-styles.selectors';
import { takeUntil } from 'rxjs';

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

  public initValues: any;


  constructor(private handleChangesService: FormChangesHandlingService, private store: Store<FormStylingState>) {
    super();
    
    this.store.pipe(
      takeUntil(this.destroyStream$),
      select(selectFormStyles),
      ).subscribe(val=> {
        this.initValues = val;
      })
  }

  ngOnInit(): void {
    this.valueChanges().subscribe(formChanges => {
      this.handleChangesService.handleChanges(formChanges.type, formChanges.value)
    })
  }

  ngOnDestroy(): void {
    this.destroyStream()
  }

}

