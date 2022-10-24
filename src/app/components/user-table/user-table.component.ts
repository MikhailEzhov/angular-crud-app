import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ServerDataChangesService } from 'src/app/services/server-data-changes.service';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/models/users.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public users: IUser[] = [];

  constructor(
    private usersService: UsersService,
    private serverDataChangesService: ServerDataChangesService
  ) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
    });
    this.subscription = this.serverDataChangesService.count$.subscribe(
      (res) => {
        this.ngOnDestroy();
        this.ngOnInit();
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
