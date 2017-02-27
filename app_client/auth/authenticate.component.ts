import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthService} from './auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.style.css']
})

export class AuthenticateComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService){}

  username: string
  ngOnInit(){
    if (this.authService.isLoggedIn()){
      this.username = localStorage.getItem('username');
      this.router.navigateByUrl(this.username);
    }
  }
}
