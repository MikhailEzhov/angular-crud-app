import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IСreatedUser, IUser } from '../models/users.model';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private urlKey: string = '4a27df962e0d47d3bf8f066f1b914e9c';
  private baseUrl: string = `https://crudcrud.com/api/${this.urlKey}/user`;

  public users$ = new BehaviorSubject<IUser[]>([]);

  constructor(private http: HttpClient) {}

  getUsers() {
    this.http.get<IUser[]>(this.baseUrl).subscribe((res) => {
      this.users$.next(res);
    });
  }

  createUser(user: IСreatedUser) {
    return this.http.post<IСreatedUser>(this.baseUrl, user).pipe(
      tap(() => {
        this.getUsers();
      })
    );
  }

  updateUser(id: string, user: IСreatedUser) {
    return this.http
      .put<IСreatedUser>(this.baseUrl + '/' + id, user)
      .subscribe((res) => {
        this.getUsers();
      });
  }

  deleteUser(id: string) {
    return this.http.delete(this.baseUrl + '/' + id).subscribe((res) => {
      this.getUsers();
    });
  }
}
