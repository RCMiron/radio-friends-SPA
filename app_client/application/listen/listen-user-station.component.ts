import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {ListenService} from './listen.service';
import { User } from '../../auth/user.model';

@Component({
  templateUrl: './listen-user-station.component.html'
})

export class ListenUserStationComponent implements OnInit{
  constructor(private route: ActivatedRoute, private listenService: ListenService){}

  ngOnInit(){}
}
