import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AuthService} from './auth.service';
import {User} from './user.model';

@Component({
  selector:'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./authenticate.style.css']
})

export class RegisterComponent implements OnInit{
  registerForm: FormGroup;
  constructor (private authService: AuthService){}

  onSubmit(){
    const user = new User(
      this.registerForm.value.username,
      this.registerForm.value.password,
      this.registerForm.value.firstName,
      this.registerForm.value.lastName,
      this.registerForm.value.email
    )
    this.authService
      .createUser(user)
      .subscribe(
        responseData => console.log(responseData),
        error => console.error(error)
      );
    this.registerForm.reset();
  }
  ngOnInit(){
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      repeatPassword: new FormControl(null, [Validators.required, this.repeatPassword.bind(this)])
    });
  }
  repeatPassword(control: FormControl): {[s:string]:boolean}{
    if(!this.registerForm){
      return {passwordsNotMatch: true}
    }
    if(control.value !== this.registerForm.controls['password'].value){
      return {passwordsNotMatch: true}
    }
  }

}
