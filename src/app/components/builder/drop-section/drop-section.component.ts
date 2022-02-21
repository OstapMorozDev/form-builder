import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ComponentPortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormElement } from 'src/app/models/classes/FormElement.class';
import { IDropSectionState } from 'src/app/models/interfaces/IDropSectionState';
import { IFormStylingState } from 'src/app/models/interfaces/IFormStylingState';
import { addFormElement, moveFormElement } from 'src/app/reducers/drop/drop.section.actions';
import { selectFormElements, selectFormTitle } from 'src/app/reducers/drop/drop.section.selectors';
import { setSelectedElement } from 'src/app/reducers/fields-styles/style-section.actions';
import { selectFormStyles } from 'src/app/reducers/form-styles/form-styles.selectors';
import { FormToHtmlService } from 'src/app/services/form-to-html.service';
import { FormGeneralStylingComponent } from './form-general-styling/form-general-styling.component';

@Component({
  selector: 'app-drop-section',
  templateUrl: './drop-section.component.html',
  styleUrls: ['./drop-section.component.scss', '../../../common/button-styles.scss', '../../../common/colors.scss', '../../../common/drag-drop-styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropSectionComponent implements OnInit {

  public formElements$: Observable<FormElement[]> = this.store$.pipe(select(selectFormElements));
  public formStyles$: Observable<IFormStylingState> = this.store$.pipe(select(selectFormStyles));
  public formTitle$: Observable<string> = this.store$.pipe(select(selectFormTitle));
  public componentPortal: ComponentPortal<FormGeneralStylingComponent>;

  public elements: FormElement[];
  public isFormCreated: boolean = false;
  public createdFormHtml:string;


  constructor(private store$: Store<IDropSectionState>, private formToHtmlService: FormToHtmlService) { }

  ngOnInit() {
    this.formElements$.subscribe(val => this.elements = val);
  }

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
      const newElement = new FormElement(event.previousContainer.data[event.previousIndex]);
      this.addElement(newElement, event.currentIndex)
    }
  }

  trackElChanges(index: number, el: FormElement): number {
    return el.id;
  }

  createForm() {
    this.isFormCreated = true;
    this.createdFormHtml = this.formToHtmlService.generateMarkUp(this.elements)
  }
}
