import {Component} from '@angular/core';

@Component({
  selector: 'radio-friends',
  templateUrl: './app.component.html'
})

export class AppComponent{
  propagate(value){
    alert(value)
  }
}
