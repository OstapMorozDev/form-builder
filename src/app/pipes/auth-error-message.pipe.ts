import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authErrorMessage'
})

export class AuthErrorMessagePipe implements PipeTransform {
  transform(value: string, args?: any): string {

    return `Error: ${value}!`
  }
}
