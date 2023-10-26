import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  endpoint = "https://sdw-2023api-prd.up.railway.app/users";
  constructor(private http: HttpClient) {  }

  findAllUsers(){
    return "a";
  }

  findOneUser(id: number){

  }

  registerUser(id: number){}

  editUser(id: number){}

  deleteUser(id:number){}
}
