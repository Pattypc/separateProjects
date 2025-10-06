import { Component, OnInit } from '@angular/core';
import { UserInterface } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { FilterOptionsInterface } from './interfaces/filter-options.interface';
import { endOfDay, isWithinInterval, startOfDay } from 'date-fns';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { filterUserList } from './components/filter/filter-users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

  usersList: UserInterface[] = [];
  usersListFiltered: UserInterface[] = [];

  constructor(public dialog: MatDialog) {}

  onUserSelected(user: UserInterface) {
    this.dialog.open(UserDetailsComponent, {
      data: { user: user },
      width: '500px'
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltered = UsersList;
    }, 3);
  }

  onFilter(filterOptions: FilterOptionsInterface) {
    this.usersListFiltered = filterUserList(filterOptions, this.usersList);
  }
}
