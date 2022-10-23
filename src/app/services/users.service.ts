import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  urlKey: string = '60b8d79a530e4ed7bbfe3c50f699a221';
  baseUrl: string = `https://crudcrud.com/api/${this.urlKey}/user`;

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<IUser[]>(this.baseUrl);
  }

  createUser(user: IUser) {
    return this.http.post<IUser>(this.baseUrl, user);
  }

  updateUser(user: IUser) {
    return this.http.put<IUser>(this.baseUrl + '/' + user.id, user);
  }

  deleteUser(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}