import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User,CreateUsertDTO  } from '../../app/models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/users';

  constructor(
    private http:HttpClient
  ) { }

  create(dto: CreateUsertDTO){
    return this.http.post<User>(this.apiUrl,dto);
  }

  getAll(){
    return this.http.get<User[]>(this.apiUrl);
  }
}
