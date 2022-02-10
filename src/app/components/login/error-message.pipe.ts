import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorMsg'
})
export class ErrorMessagePipe implements PipeTransform {
  transform(value: string, args?: any): string {

    return `Error: ${value}!  `
  }
}
