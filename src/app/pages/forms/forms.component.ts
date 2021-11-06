import { Component, OnInit } from '@angular/core';
import { IUserShort } from '../users/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  userReactiveForm: FormGroup;

  constructor(private fb: FormBuilder ) {
    this.user = {
      name: '',
      username: '',
      age: 18,
      email: '',
      phone: '',
      website: '',
      company: '',
      description: ''
    }

    this.userReactiveForm = fb.group({
      "name": [this.user.name, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(15),
        Validators.pattern('[a-zA-Zа-яА-Я]*')
      ]],
      "username": [this.user.username, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(15)
      ]],
      "age": [this.user.age, [
        Validators.min(18),
        Validators.max(40),
      ]],
      "email": [this.user.email, [
        Validators.required,
        Validators.pattern('a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
      ]],
      "phone": [this.user.phone, [
        Validators.required,
        Validators.pattern('^\\+38\\d{3}\\d{7}$')
      ]],
      "website": [this.user.website],
      "company": [this.user.company],
      "description": [this.user.description, [
        Validators.required,
        Validators.minLength(30)
      ]],
    })
  }

  ngOnInit(): void {
  }

  onFormSubmit(e: any) {
    e.preventDefault();
    console.log(this.userReactiveForm);
    console.log(this.user);
  }

  getValidationClass(field: string): string {
    return this.userReactiveForm.controls[field].invalid && !this.userReactiveForm.controls[field].pristine
      ? 'error'
      : '';
  }

  checkValidation(field: string, param: string): boolean {
    return this.userReactiveForm.controls[field].errors?.[param] && !this.userReactiveForm.controls[field].pristine;
  }

}
