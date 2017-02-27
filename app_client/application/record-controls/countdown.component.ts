import {Component,Input, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-countdown',
  template: `<p class='countdown'>{{countdown}}</p>`,
  styles:[`
    p{
      position: absolute;
      left: 50%;
      margin-left: -53px;
      top:150px;
      width:90px;
      height: 50px;
      color: #EAE5F1;
      font-family: 'Open Sans', sans-serif;
      text-align: center;
      font-style: italic;
      font-size: 35px;
    }

    `]
})

export class CountdownComponent{
@Input() countdown: number;

}
