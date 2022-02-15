import { Portal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FormBuilderStyling } from 'src/app/models/classes/FormBuilderStyling.class';
import { FormElement } from 'src/app/models/classes/FormElement.class';
import { IFieldStylingState } from 'src/app/models/interfaces/IFieldStylingState';
import { FieldChangesHandlingService } from 'src/app/services/field-changes-handling.service';

@Component({
  selector: 'app-field-styling',
  templateUrl: './field-styling.component.html',
  styleUrls: ['./field-styling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldStylingComponent extends FormBuilderStyling implements OnInit, OnChanges, OnDestroy {

  public styleFormGroup: FormGroup = new FormGroup({
    placeholderText: new FormControl(),
    width: new FormControl(),
    height: new FormControl(),
    required: new FormControl(),
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
  public initValues: FormElement;

  @Input() element: FormElement;

  public selectedPortal: Portal<any>;

  constructor(private store$: Store<IFieldStylingState>, private fieldChangesHandlingService: FieldChangesHandlingService) {
    super();
  }

  ngOnInit(): void {

    this.initValues = this.element;

    this.valueChanges().subscribe(formChanges => {
      this.fieldChangesHandlingService.handleChanges(formChanges.type, formChanges.value, this.element.id)
    })
  }

  ngOnChanges(changes: SimpleChanges): void {

    const chng = changes['element']

    if (!chng.firstChange) {
      const prev = chng.previousValue['id'];
      const current = chng.currentValue['id']

      if (prev !== current) {
        this.styleFormGroup.patchValue(this.element);
      }
    }
  }

  ngOnDestroy(): void {
    this.destroyStream();
  }


}
