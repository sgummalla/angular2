import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CustomerComponent} from './Customer.Component';
import {GridComponent} from './Grid.Component';

@NgModule({
  imports:[BrowserModule, FormsModule],
  declarations:[CustomerComponent, GridComponent],
  bootstrap:[CustomerComponent]  
})
export class CustomerModule{
    
}