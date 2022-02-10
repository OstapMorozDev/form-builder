import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormStyleTypes } from '../constants/FormStyleTypes';
import { changeBackgroundColor, changeBorderColor, changeBorderStyle, changeBorderWidth, changeHeight, changeWidth } from '../reducers/form-styles/form-stlyes.actions';
import { FormStylingState } from '../reducers/form-styles/form-styles.reducer';

@Injectable({
  providedIn: 'root'
})
export class FormChangesHandlingService {

  constructor(private store$: Store<FormStylingState>) { }


  handleChanges(type: string, value: string) {
    switch (type) {
      case FormStyleTypes.width:
        this.store$.dispatch(changeWidth({ width: value }))
        break;
      case FormStyleTypes.height:
        this.store$.dispatch(changeHeight({ height: value }))
        break;
      case FormStyleTypes.backgroundColor:
        this.store$.dispatch(changeBackgroundColor({ color: value }))
        break;
      case FormStyleTypes.borderColor:
        this.store$.dispatch(changeBorderColor({ borderColor: value }))
        break;
      case FormStyleTypes.borderStyle:
        this.store$.dispatch(changeBorderStyle({ borderStyle: value }))
        break;
      case FormStyleTypes.borderWidth:
        this.store$.dispatch(changeBorderWidth({ borderWidth: value }))
        break;
    }
  }
}
