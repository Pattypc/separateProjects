import { Component } from '@angular/core';
import { UserInterface } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Aula79';
  userSelected: UserInterface = UsersList[3];
}