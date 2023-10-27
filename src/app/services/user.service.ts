import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interface/user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  endpoint = 'https://sdw-2023api-prd.up.railway.app/users';
  constructor(private http: HttpClient) {}

  findAllUsers() {
    return this.http.get<IUser[]>(`${this.endpoint}`);
  }

  findOneUser(id: number) {
    return this.http.get<IUser>(`${this.endpoint}/${id}`);
  }

  registerUser(user: IUser) {
    return this.http.post(`${this.endpoint}`, user);
  }

  editUser(id: number, user: IUser) {
    return this.http.put<IUser>(`${this.endpoint}/${id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.endpoint}/${id}`);
  }
}
