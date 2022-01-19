import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Portal, TemplatePortal, ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit, AfterViewInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormElement } from 'src/app/interfaces/FormElement';
import { addFormElement, moveFormElement } from 'src/app/reducers/drop/drop.section.actions';
import { DropSectionState } from 'src/app/reducers/drop/drop.section.reducer';
import { selectFormElements } from 'src/app/reducers/drop/drop.section.selectors';


@Component({
  selector: 'app-drop-section',
  templateUrl: './drop-section.component.html',
  styleUrls: ['./drop-section.component.scss']
})
export class DropSectionComponent implements OnInit, AfterViewInit {

  public formElements$: Observable<FormElement[]> = this.store$.pipe(select(selectFormElements));


  constructor(private store$: Store<DropSectionState>) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

  addElement(newElement: FormElement) {
    this.store$.dispatch(addFormElement({ formElement: newElement }))
  }

  moveElement(currentIndex: number, nextIndex: number) {
    this.store$.dispatch(moveFormElement({ currentIndex: currentIndex, nextIndex: nextIndex }))
  }


  drop(event: CdkDragDrop<any>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      this.moveElement(event.previousIndex, event.currentIndex)
    } else {
      const newElement: FormElement = {
        id: event.previousContainer.data[event.previousIndex].id,
        type: event.previousContainer.data[event.previousIndex].type
      }
      this.addElement(newElement)

    }
  }

}
