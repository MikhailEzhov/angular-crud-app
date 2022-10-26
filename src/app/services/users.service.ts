import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IСreatedUser, IUser } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  urlKey: string = '6d998a11c27d4ddc8e1a81f6f412ece2';
  baseUrl: string = `https://crudcrud.com/api/${this.urlKey}/user`;

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<IUser[]>(this.baseUrl);
  }

  createUser(user: IСreatedUser) {
    return this.http.post<IСreatedUser>(this.baseUrl, user);
  }

  updateUser(id: string, user: IСreatedUser) {
    return this.http.put<IUser>(this.baseUrl + '/' + id, user);
  }

  deleteUser(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
