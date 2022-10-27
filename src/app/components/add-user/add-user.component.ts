import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  constructor(private fb: FormBuilder, private usersService: UsersService) {}

  public addForm = this.fb.group({
    firstName: ['Homer', Validators.required],
    lastName: ['Simpson', Validators.required],
    email: ['homer.s@gmail.com', [Validators.required, Validators.email]],
    age: [52, Validators.required],
    gender: ['male', Validators.required],
  });

  onSubmit(user: any): void {
    if (this.addForm.valid) {
      this.usersService.createUser(user).subscribe((res) => {
        this.addForm.reset();
      });
    }
  }
}
