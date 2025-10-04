import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: string): string {
    if (!phone || phone.length < 10 || phone.length > 11) {
      return 'Invalid phone';
    }

    if (phone.length === 10) {
      return `(${phone.slice(0, 2)}) ${phone.slice(2, 6)}-${phone.slice(6)}`;
    } else {
      return `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7, 11)}`;
    }
  }
}
