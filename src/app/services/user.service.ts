import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user_model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseApiUrl: string = 'https://6255745f52d8738c6922364f.mockapi.io/users/';

  constructor(private httpClient: HttpClient) {}

  getUser(id: string) {
    return this.httpClient.get<UserModel>(this.baseApiUrl + id);
  }
}
