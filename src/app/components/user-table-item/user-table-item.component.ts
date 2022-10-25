import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/models/users.model';
import { ServerDataChangesService } from 'src/app/services/server-data-changes.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-table-item',
  templateUrl: './user-table-item.component.html',
  styleUrls: ['./user-table-item.component.css'],
})
export class UserTableItemComponent implements OnInit {
  @Input() user: IUser;

  constructor(
    private usersService: UsersService,
    private serverDataChangesService: ServerDataChangesService
  ) {}

  ngOnInit(): void {}

  deleteUser(id: string): void {
    this.usersService.deleteUser(id).subscribe((res) => {
      console.log('DELETE user on server under id:', id);
      this.serverDataChangesService.changeCount(1);
    });
  }
}
