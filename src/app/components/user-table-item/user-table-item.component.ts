import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-table-item',
  templateUrl: './user-table-item.component.html',
  styleUrls: ['./user-table-item.component.css'],
})
export class UserTableItemComponent {
  @Input() user: IUser;

  public editUser = false;

  constructor(private usersService: UsersService) {}

  deleteUser(id: string): void {
    this.usersService.deleteUser(id);
  }

  changeUser(): void {
    const { _id, ...user } = this.user;
    this.usersService.updateUser(_id, user);
  }
}
