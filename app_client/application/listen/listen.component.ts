import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../../auth/auth.service';
import {ListenService} from './listen.service';

@Component({
  selector: 'app-listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.css'],
  providers: [ListenService]
})

export class ListenComponent implements OnInit{
  constructor(){}
  ngOnInit(){

  }
}
