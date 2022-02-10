import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, pairwise, startWith, Subject, takeUntil } from 'rxjs';
import { FormBuilderStyling } from 'src/app/classes/form-builder-styling.class';
import { initialValues } from 'src/app/constants/FormStyleTypes';
import { FormStylingState } from 'src/app/reducers/form-styles/form-styles.reducer';
import { FormChangesHandlingService } from 'src/app/services/form-changes-handling.service';


@Component({
  selector: 'app-form-general-styling',
  templateUrl: './form-general-styling.component.html',
  styleUrls: ['./form-general-styling.component.scss']
})
export class FormGeneralStylingComponent extends FormBuilderStyling implements OnInit, OnDestroy{

  public styleFormGroup: FormGroup = new FormGroup({
    backgroundColor: new FormControl(),
    width: new FormControl(),
    height: new FormControl(),
    borderStyle: new FormControl(),
    borderColor: new FormControl(),
    borderWidth: new FormControl()
  });

  public initValues: any = initialValues;

  constructor(private handleChangesService: FormChangesHandlingService) {
    super()
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

