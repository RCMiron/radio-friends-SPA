import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {AuthService} from '../auth/auth.service';
import {RecordService} from './record-controls/record.service';

@Component({
  selector: 'application',
  templateUrl: './application.component.html',
  providers: [ RecordService ]
})

export class ApplicationComponent implements OnInit{
  constructor(private authService: AuthService, private router: Router,
  private activatedRoute: ActivatedRoute){};
  ngOnInit(){}
  
  isLoggedIn(){
    return this.authService.isLoggedIn();
  }


}
