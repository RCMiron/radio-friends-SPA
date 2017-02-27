import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import { User } from '../../auth/user.model';

@Injectable()

export class ListenService{
  constructor(private http: Http){}

}
