import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUserInput } from 'src/app/interface/dataInput/user';
import {UserService} from 'src/app/services/user.service'


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
    accountAgency: new FormControl('', Validators.required),
    cardNumber: new FormControl('', Validators.required),
    cardLimit: new FormControl(0, Validators.required),
  })

  constructor(private userService: UserService){

  }

  register() {
    const name = this.userForm.get('name')?.value || '';
    const accountNumber = this.userForm.get('accountNumber')?.value || '';
    const accountAgency = this.userForm.get('accountAgency')?.value || '';
    const accountBalance = this.userForm.get('accountBalance')?.value || 0;
    const accountLimit = this.userForm.get('accountLimit')?.value || 0;
    const cardNumber = this.userForm.get('cardNumber')?.value || '';
    const cardLimit = this.userForm.get('cardLimit')?.value || 0;
  
    const user: IUserInput  = {
      
      name,
      account: {
        number: accountNumber,
        balance: accountBalance,
        limit: accountLimit,
        agency: accountAgency,
      },
      card: {
        number: cardNumber,
        limit: cardLimit,
      },
      features: [],
      news: [],
    };
  
    this.userService.registerUser(user).subscribe(() => {
      console.log("Client data created")
    }, error => {
      console.error("Client couldn't be created", error);
    });
  }
  
}
