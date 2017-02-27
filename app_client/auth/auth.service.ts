import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import "rxjs/Rx";
import {Observable} from 'rxjs';

import {User} from "./user.model";

@Injectable()

export class AuthService{
  constructor(private http: Http){}

  createUser(user: User){
    const requestBody = JSON.stringify(user);
    const requestHeaders = new Headers({"Content-Type":"application/json"});

    return this.http
      .post('http://localhost:8000/user/register', requestBody, {headers: requestHeaders})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }
  signin(user: User){
    const requestBody = JSON.stringify(user);
    const requestHeaders = new Headers({'Content-Type': 'application/json'});

    return this.http
      .post('http://localhost:8000/user/signin', requestBody, {headers: requestHeaders})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  logout(){
    localStorage.clear();
  }
  isLoggedIn(){
    return localStorage.getItem('token') !== null;
  }
}
