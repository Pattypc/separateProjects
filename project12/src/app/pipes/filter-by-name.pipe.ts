import { Pipe, PipeTransform } from '@angular/core';
import { UserInterface } from '../interface/user.inetface';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(users: UserInterface[], searchTerm: string): UserInterface[] {
    if (!users || !searchTerm) {
      return users;
    }

    const term = searchTerm.toLowerCase().trim();
    
    return users.filter(user => 
      user.name.toLowerCase().includes(term) ||
      user.username.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term)
    );
  }
}
