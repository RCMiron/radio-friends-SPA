import {Component, ViewChild, ElementRef, DoCheck} from '@angular/core';
import "rxjs/Rx";
import {Observable} from 'rxjs';

import {RecordService} from './record.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})

export class RecordComponent implements DoCheck{

  @ViewChild('roundButtonOne') roundButtonOne: ElementRef;
  @ViewChild('roundButtonTwo') roundButtonTwo: ElementRef;
  @ViewChild('roundButtonThree') roundButtonThree: ElementRef;

  constructor( private recordService: RecordService){}

  private recording: boolean = false;
  private readyForAir: boolean = false;
  private countdown: number = 5;
  private dateNow: Date = null;

  ngDoCheck(){

  }

  onRoundButtonOne(){
    switch(this.roundButtonOne.nativeElement.getAttribute('data-state')){
      case 'ready':
        this.record();
        break;
      case 'recording-paused':
        this.resumeRec();
        break;
      case 'recording-done':
        this.post();
        break;
    }
  }
  onRoundButtonTwo(){
    this.recording = true;
    switch(this.roundButtonTwo.nativeElement.getAttribute('data-state')){
      case 'ready':
        this.onLive();
        break;
      case 'ready-pause-recording':
        this.pause();
        break;
      case 'ready-pause-replay':
        this.pauseRep();
        break;
      case 'ready-play-recording':
        this.play();
        break;
    }
  }
  onRoundButtonThree(){
    switch(this.roundButtonThree.nativeElement.getAttribute('data-state')){
      case 'ready':
        this.upload();
        break;
      case 'ready-stop':
        this.stop();
        break;
        case 'ready-stop-live':
          this.stopLive();
          break;
      case 'ready-delete':
        this.delete();
        break;
    }
  }

  resetControls(){
    this.dateNow = null;
    this.recording = false;
    this.readyForAir = false;
    this.roundButtonOne.nativeElement.setAttribute('xlink:href','#mic');
    this.roundButtonOne.nativeElement.setAttribute('data-state','ready');
    this.roundButtonTwo.nativeElement.setAttribute('xlink:href', '#live');
    this.roundButtonTwo.nativeElement.setAttribute('data-state', 'ready');
    this.roundButtonThree.nativeElement.setAttribute('xlink:href', '#upload');
    this.roundButtonThree.nativeElement.setAttribute('data-state', 'ready');
  }
  readyToPost(){
    this.dateNow = new Date();
    this.recording=false;
    this.readyForAir = true;
    this.roundButtonOne.nativeElement.setAttribute('xlink:href','#post');
    this.roundButtonOne.nativeElement.setAttribute('data-state','recording-done');
    this.roundButtonTwo.nativeElement.setAttribute('xlink:href','#play');
    this.roundButtonTwo.nativeElement.setAttribute('data-state','ready-play-recording');
    this.roundButtonThree.nativeElement.setAttribute('xlink:href','#delete');
    this.roundButtonThree.nativeElement.setAttribute('data-state','ready-delete');
  }

  record(){
    this.recording = true;
    this.roundButtonOne.nativeElement.setAttribute('data-state','recording');
    this.roundButtonTwo.nativeElement.setAttribute('xlink:href', '#pause');
    this.roundButtonTwo.nativeElement.setAttribute('data-state', 'ready-pause-recording');
    this.roundButtonThree.nativeElement.setAttribute('xlink:href', '#stop');
    this.roundButtonThree.nativeElement.setAttribute('data-state', 'ready-stop');


  }
  resumeRec(){
    this.recording = true;
    this.roundButtonOne.nativeElement.setAttribute('xlink:href','#mic');
    this.roundButtonOne.nativeElement.setAttribute('data-state','recording-resumed');
    this.roundButtonTwo.nativeElement.setAttribute('xlink:href', '#pause');
    this.roundButtonTwo.nativeElement.setAttribute('data-state', 'ready-pause-recording');
  }
  post(){
    this.resetControls();
  }
  onLive(){
    this.recording = true;
    this.roundButtonOne.nativeElement.setAttribute('data-state','recording-live');
    this.roundButtonTwo.nativeElement.setAttribute('data-state', 'live');
    this.roundButtonThree.nativeElement.setAttribute('xlink:href', '#stop');
    this.roundButtonThree.nativeElement.setAttribute('data-state', 'ready-stop-live');
  }
  pause(){
    this.recording=true;
    if(this.readyForAir){
      this.recording = false;
    }
    this.roundButtonOne.nativeElement.setAttribute('data-state','recording-paused');
    this.roundButtonTwo.nativeElement.setAttribute('xlink:href', '#play');
    this.roundButtonTwo.nativeElement.setAttribute('data-state', 'ready-play-recording');
  }
  pauseRep(){
    this.recording=true;
    if(this.readyForAir){
      this.recording = false;
      this.roundButtonOne.nativeElement.setAttribute('data-state','recording-done');
      this.roundButtonTwo.nativeElement.setAttribute('xlink:href', '#play');
      this.roundButtonTwo.nativeElement.setAttribute('data-state', 'ready-play-recording');
      return;
    }
    this.roundButtonOne.nativeElement.setAttribute('data-state','recording-paused');
    this.roundButtonTwo.nativeElement.setAttribute('xlink:href', '#play');
    this.roundButtonTwo.nativeElement.setAttribute('data-state', 'ready-play-recording');
  }
  play(){
    this.recording=true;
    if(this.readyForAir){
      this.recording = false;
    }
    this.roundButtonTwo.nativeElement.setAttribute('xlink:href', '#pause');
    this.roundButtonTwo.nativeElement.setAttribute('data-state', 'ready-pause-replay');
  }
  upload(){
    //upload popup
    this.readyToPost();
  }
  stop(){
    this.readyToPost();
  }
  stopLive(){
    this.resetControls();
  }
  delete(){
    //delete recorded or uploaded post
    this.resetControls();
  }


}
