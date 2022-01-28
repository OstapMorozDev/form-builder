import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormElement } from 'src/app/classes/form-element.class';

import { addFormElement, moveFormElement } from 'src/app/reducers/drop/drop.section.actions';
import { DropSectionState } from 'src/app/reducers/drop/drop.section.reducer';
import { selectFormElements } from 'src/app/reducers/drop/drop.section.selectors';
import { setSelectedElement } from 'src/app/reducers/style/style-section.actions';


@Component({
  selector: 'app-drop-section',
  templateUrl: './drop-section.component.html',
  styleUrls: ['./drop-section.component.scss']
})
export class DropSectionComponent {


  public formElements$: Observable < FormElement[] > = this.store$.pipe(select(selectFormElements));


  constructor(private store$: Store<DropSectionState>) { }

  addElement(newElement: FormElement, currentIndex: number) {
    this.store$.dispatch(addFormElement({ formElement: newElement, newIndex: currentIndex }))
  }

  moveElement(currentIndex: number, nextIndex: number) {
    this.store$.
      dispatch(moveFormElement({ currentIndex, nextIndex }))
  }


  onElementClick(el: FormElement) {
    this.store$.dispatch(setSelectedElement({ selectedElement: el }))
  }



  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      this.moveElement(event.previousIndex, event.currentIndex)
    } else {

      const newElement = new FormElement(event.previousContainer.data[event.previousIndex].type);
      this.addElement(newElement, event.currentIndex)
    }

  }

}
