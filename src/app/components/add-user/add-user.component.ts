import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { IСreatedUser } from '../../models/users.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  constructor(private fb: FormBuilder, private usersService: UsersService) {}

  addForm = this.fb.group({
    firstName: ['Homer', Validators.required],
    lastName: ['Simpson', Validators.required],
    email: ['homer.s@gmail.com', Validators.required],
    age: [52, Validators.required],
    gender: ['male', Validators.required],
  });

  ngOnInit(): void {}

  onSubmit(user: any): void {
    if (this.addForm.valid) {
      this.usersService
        .createUser(user)
        .subscribe((res) => console.log('POST user to the server:', res));
    }
  }
}
