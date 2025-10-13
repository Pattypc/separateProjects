import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../interface/user.inetface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<UserInterface> {
    return this.http.get<UserInterface>(`${this.apiUrl}/${id}`);
  }

  // POST - Criar usuário
  createUser(user: UserInterface): Observable<UserInterface> {
    return this.http.post<UserInterface>(this.apiUrl, user);
  }

  // PUT - Atualizar usuário
  updateUser(id: number, user: UserInterface): Observable<UserInterface> {
    return this.http.put<UserInterface>(`${this.apiUrl}/${id}`, user);
  }

  // DELETE - Deletar usuário
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
