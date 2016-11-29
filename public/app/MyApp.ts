import {Component} from '@angular/core';
import {HelloWorld} from './HelloWorld';

@Component({
  selector : 'my-app',
  template: "<hello-world [message]=\"myMessage\" (onClick)=\"myCallBack($event)\"></hello-world>"
})
export class MyApp {
  public myMessage : string;
  
  constructor(){
    this.myMessage = 'Angular 2';
  }
  
  myCallBack(event){
    this.myMessage = event;
  }
}