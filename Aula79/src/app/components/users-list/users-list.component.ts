import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserInterface } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  displayedColumns: string[] = [ 'name', 'date', 'status' ];
  
  @Input({ required: true}) usersList: UserInterface[] = [];

  @Output('userSelected') userSelectedEmitt = new EventEmitter<UserInterface>();

  onUserSelected(user: UserInterface) {
    console.log('user', user);
    this.userSelectedEmitt.emit(user);
  }
}
