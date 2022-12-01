import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperText'
})
export class UpperTextPipe implements PipeTransform {

  transform(value: String): String {
    return value.toUpperCase();
  }

}
