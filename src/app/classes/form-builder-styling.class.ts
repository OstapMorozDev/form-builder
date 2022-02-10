import { FormGroup } from "@angular/forms";
import { takeUntil, startWith, pairwise, map, Subject, Observable } from "rxjs";


export abstract class FormBuilderStyling {
  abstract styleFormGroup: FormGroup;
  abstract initValues: any;
  private destroyStream$: Subject<boolean>;

  protected constructor() {
    this.destroyStream$ = new Subject<boolean>();
  }

  public destroyStream(): void {
    this.destroyStream$.next(true);
    this.destroyStream$.unsubscribe();
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

}
