import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { IUser } from 'src/app/models/users.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit {
  public users: BehaviorSubject<IUser[]>;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers();
    this.users = this.usersService.users$;
  }
}
