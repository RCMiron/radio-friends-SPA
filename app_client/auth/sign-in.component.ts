import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthService} from './auth.service';
import {User} from './user.model';

@Component({
  selector:'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./authenticate.style.css']
})

export class SignInComponent implements OnInit{
  signInForm: FormGroup;
  constructor(private authService: AuthService, private router: Router){}
  onSubmit(){
    const user = new User(this.signInForm.value.username,
                          this.signInForm.value.password
                        );
    this.authService
      .signin(user)
      .subscribe(
        responseData => {
          localStorage.setItem('token', responseData.token);
          localStorage.setItem('username', responseData.username);
          this.router.navigateByUrl('/'+localStorage.getItem('username'));
        },
        error => console.error(error)
      );
    this.signInForm.reset();
  }
  ngOnInit(){
    this.signInForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

}
