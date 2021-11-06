import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IUser } from "./user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) { }

  getUser(id: number): Observable<IUser> {
    const url = 'https://jsonplaceholder.typicode.com/users/' + id;
    return this.http.get<IUser>(url);
  }

  putUsers(data: any, id: number): Observable<IUser> {
    const url = 'https://jsonplaceholder.typicode.com/users/' + id;
    return this.http.put<IUser>(url, data);
  }

  deleteUser(id: number): Observable<IUser> {
    const url = 'https://jsonplaceholder.typicode.com/users/' + id;
    return this.http.delete<IUser>(url);
  }
}
