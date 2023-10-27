import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    accountNumber: new FormControl('', Validators.required),
    accountBalance: new FormControl(0, Validators.required),
    accountLimit: new FormControl(0, Validators.required),
    cardNumber: new FormControl('', Validators.required),
    cardLimit: new FormControl(0, Validators.required),
  })
}
