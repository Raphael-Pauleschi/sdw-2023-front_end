import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserInput } from 'src/app/interface/dataInput/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
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
  });

  userId = this.route.snapshot.paramMap.get('id') as unknown as number;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private routeDirect: Router
  ) {}

  ngOnInit() {
    if (this.userId) {
      this.userService
        .findOneUser(this.userId)
        .subscribe((user: IUserInput) => {
          return this.userForm.setValue({
            name: user.name,
            accountNumber: user.account.number,
            accountBalance: user.account.balance,
            accountLimit: user.account.limit,
            accountAgency: user.account.agency,
            cardNumber: user.card.number,
            cardLimit: user.card.limit,
          });
        });
    }
  }

  private setUserValues() {
    const name = this.userForm.get('name')?.value || '';
    const accountNumber = this.userForm.get('accountNumber')?.value || '';
    const accountAgency = this.userForm.get('accountAgency')?.value || '';
    const accountBalance = this.userForm.get('accountBalance')?.value || 0;
    const accountLimit = this.userForm.get('accountLimit')?.value || 0;
    const cardNumber = this.userForm.get('cardNumber')?.value || '';
    const cardLimit = this.userForm.get('cardLimit')?.value || 0;

    const user: IUserInput = {
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

    return user;
  }

  registerOrEdit() {
    if (this.userId) {
      this.edit();
    } else {
      this.register;
    }
  }
  edit() {
    this.userService.editUser(this.userId, this.setUserValues()).subscribe(
      () => {
        console.log('User updated');
      },
      (error) => {
        console.error("User couldn't be updated", error);
      }
    );
  }

  register() {
    this.userService.registerUser(this.setUserValues()).subscribe(
      () => {
        console.log('User data created');
      },
      (error) => {
        console.error("User couldn't be created", error);
      }
    );
  }
}
