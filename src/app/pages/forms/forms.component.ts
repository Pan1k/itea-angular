import { Component, OnInit } from '@angular/core';
import { IUserShort } from '../users/user';

interface IUser extends IUserShort {
  description: string,
  company: string,
  age: number
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})

export class FormsComponent implements OnInit {

  user: IUser;

  constructor() {
    this.user = {
      name: '',
      username: '',
      age: 0,
      email: '',
      phone: '',
      website: '',
      company: '',
      description: ''
    }
  }

  ngOnInit(): void {
  }

  onFormSubmit(e: any) {
    e.preventDefault();
    console.log(e);
    console.log(this.user);
  }

}
