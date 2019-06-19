import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  registeredUsers: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public email_data: any = { 'name': null, 'email_addres': null, 'password': null, 'mob_no': null };

  signupsave() {

    this.http.post("http://localhost:3000/signup", this.email_data)
      .subscribe(dt => {

      });

  }
 
}
