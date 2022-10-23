import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    // this.usersService.getUsers().subscribe((res) => {
    //   console.log('GET users from the server:', res);
    // });
  }
}
