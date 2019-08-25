import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  usernameValue$: Observable<string>;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signInForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ''
    })

    this.usernameValue$ = this.signInForm.get('username').valueChanges.pipe(tap(v => console.log(v)));
  }

}