import { Component } from '@angular/core';
import { IUser } from 'src/app/interface/user';
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
    console.log("Usuario de id ",id," não foi deletado com sucesso")
  }

}
