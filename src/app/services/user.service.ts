import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interface/dataTransfer/user';
import { IUserInput } from '../interface/dataInput/user';
import { environment } from '../components/enviroment/environment';

@Injectable({
  providedIn: 'root',
})


export class UserService {
  endpoint = 'users';
  api = environment.apiPrd;
  constructor(private http: HttpClient) {}

  findAllUsers() {
    return this.http.get<IUser[]>(`${this.api}/${this.endpoint}`);
  }

  findOneUser(id: number) {
    return this.http.get<IUser>(`${this.api}/${this.endpoint}/${id}`);
  }

  registerUser(user: IUserInput ) {
    return this.http.post(`${this.api}/${this.endpoint}`, user);
  }

  editUser(id: number, user: IUserInput) {
    return this.http.put<IUserInput>(`${this.api}/${this.endpoint}/${id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.api}/${this.endpoint}/${id}`);
  }
}
