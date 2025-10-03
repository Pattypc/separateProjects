import { Component } from '@angular/core';
import { UsersList } from '../../data/users-list';
import { UserInterface } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  displayedColumns: string[] = [ 'name', 'date', 'status' ];
  usersList: UserInterface[] = UsersList;

  onUserSelected(user: UserInterface) {
    console.log('user', user);
  }
}
