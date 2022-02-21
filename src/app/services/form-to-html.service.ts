import { Injectable } from '@angular/core';
import { FormElement } from '../models/classes/FormElement.class';

@Injectable({
  providedIn: 'root'
})
export class FormToHtmlService {

  constructor() { }

  generateMarkUp(arr: FormElement[]) {
    const htmlArray = arr.map(element => {
      return `<${element.type}></${element.type}>`
    })
    return `<form>\n${htmlArray.join('\n')}\n</form>`
  }
}
