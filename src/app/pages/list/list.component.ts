import { Component } from '@angular/core';
import { IUser } from 'src/app/interface/dataTransfer/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  users: IUser[] = [];

  constructor(private userService: UserService){}

  ngOnInit(){
    this.userService.findAllUsers().subscribe(
      (result: IUser[]) =>{
        console.log(result);
        this.users = result;

      }
    )
  }

  delete(id: number){
    this.userService.deleteUser(id).subscribe(()=>{
      console.log("User deleted")
    },error=>{
      console.error(error)
    })
  }

}
