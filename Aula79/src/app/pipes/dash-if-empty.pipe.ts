import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashIfEmpty'
})
export class DashIfEmptyPipe implements PipeTransform {

  transform(value: any): any {

    if (value === null || value === undefined || value === '') {
      return '-';
    }
    
    return value;
  }

}
