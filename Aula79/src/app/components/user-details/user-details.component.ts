import { Component, Inject } from '@angular/core';
import { UserInterface } from '../../interfaces/user/user.interface';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  user: UserInterface;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { user: UserInterface }) {
    this.user = data.user;
  }
}