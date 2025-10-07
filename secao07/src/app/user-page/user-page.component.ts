import { Component, ViewChild } from '@angular/core';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html'
})
export class UserPageComponent {
  @ViewChild(UserFormComponent) userFormComponent!: UserFormComponent;

  onSave(): void {
    this.userFormComponent.save();
  }

  onReset(): void {
    this.userFormComponent.resetForm();
  }
}
