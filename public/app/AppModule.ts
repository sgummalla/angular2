import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MyApp} from './MyApp';
import {HelloWorld} from './HelloWorld';

@NgModule({
    imports: [BrowserModule],
    declarations: [MyApp, HelloWorld],
    bootstrap: [MyApp]
})
export class AppModule { }