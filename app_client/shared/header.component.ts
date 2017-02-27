import {Component,OnDestroy, OnInit, DoCheck} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {AuthService} from '../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.style.css']
  })

export class HeaderComponent implements OnDestroy, DoCheck{
  constructor(private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){};

  username: string;

  ngDoCheck(){
    this.username = localStorage.getItem('username');
  }
  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  onLogout(){
    this.authService.logout();
    this.router.navigateByUrl('/who-are-you');
  }
  ngOnDestroy(){

  }
}
