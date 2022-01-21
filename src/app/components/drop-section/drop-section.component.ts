import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Portal, TemplatePortal, ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit, AfterViewInit, ViewChild, TemplateRef, ViewContainerRef, ElementRef } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormElementC } from 'src/app/classes/form-element.class';
import { FormElement } from 'src/app/interfaces/FormElement';
import { addFormElement, changeTitle, moveFormElement } from 'src/app/reducers/drop/drop.section.actions';
import { DropSectionState } from 'src/app/reducers/drop/drop.section.reducer';
import { selectFormElements, selectFormTitle } from 'src/app/reducers/drop/drop.section.selectors';
import { setSelectedElement } from 'src/app/reducers/style/style-section.actions';


@Component({
  selector: 'app-drop-section',
  templateUrl: './drop-section.component.html',
  styleUrls: ['./drop-section.component.scss']
})
export class DropSectionComponent implements OnInit, AfterViewInit {


  public formElements$: Observable<FormElement[]> = this.store$.pipe(select(selectFormElements));
  public formTitle$: Observable<string> = this.store$.pipe(select(selectFormTitle));

  public titleEditMode: boolean = false;



  constructor(private store$: Store<DropSectionState>) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {

  }

  addElement(newElement: FormElement, currentIndex: number) {
    this.store$.dispatch(addFormElement({ formElement: newElement, newIndex: currentIndex }))
  }

  moveElement(currentIndex: number, nextIndex: number) {
    this.store$.
      dispatch(moveFormElement({ currentIndex, nextIndex }))
  }

  onInputeDoubleClick($event: any) {
    this.titleEditMode = true;
  }

  onTitleInputeBlur($event: any) {
    this.onTitleChange($event.target.value)
    this.titleEditMode = false;
  }


  onTitleChange(value: string) {
    this.store$.dispatch(changeTitle({ value }))
  }

  onElementClick(el: FormElement) {
    this.store$.dispatch(setSelectedElement({ selectedElement: el }))
  }


  drop(event: CdkDragDrop<any>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      this.moveElement(event.previousIndex, event.currentIndex)
    } else {
      const newElement: FormElement = {
        id: Date.now() as number,
        type: event.previousContainer.data[event.previousIndex].type
      }
      this.addElement(newElement, event.currentIndex)
    }



  }

}
