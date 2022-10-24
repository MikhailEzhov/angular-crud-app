import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/models/users.model';

@Component({
  selector: 'app-user-table-item',
  templateUrl: './user-table-item.component.html',
  styleUrls: ['./user-table-item.component.css'],
})
export class UserTableItemComponent implements OnInit {
  @Input() user: IUser;

  constructor() {}

  ngOnInit(): void {}
}
