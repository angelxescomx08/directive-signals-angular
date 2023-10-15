import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersServiceService {
  public baseUrl = 'https://reqres.in/api/users';
  public http = inject(HttpClient);

  constructor() {}

  getUserById(id: number): Observable<User> {
    return this.http
      .get<SingleUserResponse>(`${this.baseUrl}/${id}`)
      .pipe(map((res) => res.data));
  }
}
