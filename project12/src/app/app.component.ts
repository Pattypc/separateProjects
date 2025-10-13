import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  
  // Propriedades para edição
  selectedUser: UserInterface | null = null;
  isEditing = false;
  isCreating = false;
  editingUser: UserInterface | null = null;

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

  // Métodos para edição de usuários
  editUser(user: UserInterface) {
    this.selectedUser = user;
    this.editingUser = { ...user }; // Cópia para não alterar o original
    this.isEditing = true;
    this.isCreating = false;
  }

  createNewUser() {
    this.editingUser = {
      id: 0,
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: { lat: '', lng: '' }
      },
      company: {
        name: '',
        catchPhrase: '',
        bs: ''
      }
    };
    this.isCreating = true;
    this.isEditing = false;
    this.selectedUser = null;
  }

  saveUser(form: NgForm) {
    if (form.valid && this.editingUser) {
      if (this.isCreating) {
        // Criar novo usuário
        this.usersService.createUser(this.editingUser).subscribe({
          next: (newUser) => {
            this.users.unshift(newUser); // Adiciona no início da lista
            this.cancelEdit();
            console.log('Usuário criado:', newUser);
          },
          error: (error) => {
            console.error('Erro ao criar usuário:', error);
            this.error = 'Erro ao criar usuário';
          }
        });
      } else if (this.selectedUser) {
        // Atualizar usuário existente
        this.usersService.updateUser(this.selectedUser.id, this.editingUser).subscribe({
          next: (updatedUser) => {
            const index = this.users.findIndex(u => u.id === updatedUser.id);
            if (index !== -1) {
              this.users[index] = updatedUser;
            }
            this.cancelEdit();
            console.log('Usuário atualizado:', updatedUser);
          },
          error: (error) => {
            console.error('Erro ao atualizar usuário:', error);
            this.error = 'Erro ao atualizar usuário';
          }
        });
      }
    }
  }

  deleteUser(user: UserInterface) {
    if (confirm(`Tem certeza que deseja excluir o usuário ${user.name}?`)) {
      this.usersService.deleteUser(user.id).subscribe({
        next: () => {
          this.users = this.users.filter(u => u.id !== user.id);
          console.log('Usuário excluído:', user.name);
        },
        error: (error) => {
          console.error('Erro ao excluir usuário:', error);
          this.error = 'Erro ao excluir usuário';
        }
      });
    }
  }

  cancelEdit() {
    this.isEditing = false;
    this.isCreating = false;
    this.selectedUser = null;
    this.editingUser = null;
  }

  clearError() {
    this.error = null;
  }
}