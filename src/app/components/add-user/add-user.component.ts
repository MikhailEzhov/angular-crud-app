import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { ServerDataChangesService } from 'src/app/services/server-data-changes.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private serverDataChangesService: ServerDataChangesService
  ) {}

  addForm = this.fb.group({
    firstName: ['Homer', Validators.required],
    lastName: ['Simpson', Validators.required],
    email: ['homer.s@gmail.com', [Validators.required, Validators.email]],
    age: [52, Validators.required],
    gender: ['male', Validators.required],
  });

  ngOnInit(): void {}

  onSubmit(user: any): void {
    if (this.addForm.valid) {
      this.usersService.createUser(user).subscribe((res) => {
        this.addForm.reset();
        this.serverDataChangesService.changeCount(1);
      });
    }
  }
}
