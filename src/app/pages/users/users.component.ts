import { Component, OnInit } from '@angular/core';
import { UsersService } from "./users.service";
import { IUser } from "./user";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(public userService: UsersService) {
  }

  ngOnInit(): void {
    this.userService.getUser(10).pipe(map(user => ({
      ...user,
      test: 'blah',
      test2: 'some property'
    }))).subscribe((res: IUser) => console.log(res))
  }

  updateUser() {
    this.userService.putUsers({
      someData: ''
    }, 10).subscribe(res => console.log(res));
  }

  getUserAgain() {
    this.userService.getUser(10).pipe(map(user => ({
      ...user,
      test: 'blah',
      test2: 'some property'
    }))).subscribe(res => console.log(res));
  }

  deleteUser() {
    this.userService.deleteUser(10).subscribe((res: IUser) => console.log(res));
  }
}
