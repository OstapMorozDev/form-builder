import { FormGroup } from "@angular/forms";
import { map, Observable, pairwise, startWith, Subject, takeUntil } from "rxjs";

export abstract class FormBuilderStyling<T> {

  abstract styleFormGroup: FormGroup;
  abstract initValues: T;
  public readonly destroyStream$: Subject<boolean>;

  protected constructor() {
    this.destroyStream$ = new Subject<boolean>();
  }

  public valueChanges(): Observable<{ type: string, value: any }> {

    this.styleFormGroup.patchValue(this.initValues)

    return this.styleFormGroup.valueChanges.pipe(
      takeUntil(this.destroyStream$),
      startWith(this.initValues),
      pairwise(),
      map(valChangesPair => {
        let inputType: string = '';
        for (let key in valChangesPair[0]) {
          if (valChangesPair[0][key] !== valChangesPair[1][key]) {
            inputType = key;
          }
        } return { type: inputType, value: valChangesPair[1][inputType] }
      })
    )
  }

  protected destroyStream(): void {
    this.destroyStream$.next(true);
    this.destroyStream$.unsubscribe();
  }
}
