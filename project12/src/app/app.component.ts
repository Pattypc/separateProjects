import { Component, OnInit } from '@angular/core';
import { UsersService } from './sevice/users.service';
import { UserInterface } from './interface/user.inetface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'project12';
  users: UserInterface[] = [];
  loading = true;
  error: string | null = null;
  searchTerm = '';

  constructor(private usersService: UsersService) {}
  
  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this.error = null;
    
    this.usersService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.loading = false;
        console.log('Usuários carregados:', users);
      },
      error: (error) => {
        this.error = 'Erro ao carregar usuários';
        this.loading = false;
        console.error('Erro:', error);
      }
    });
  }
}