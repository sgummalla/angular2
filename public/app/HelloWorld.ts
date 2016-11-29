import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: '<div><button (click)="handleClick()">{{message}}</button></div>'
})
export class HelloWorld {
  @Input()
  message : String;
  
  @Output()
  onClick : EventEmitter = new EventEmitter();
  
  handleClick(){
    this.onClick.emit("I got clicked pretty bad");
  }
}