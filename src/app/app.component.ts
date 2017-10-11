import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Component, NgModule, Input, Output, EventEmitter} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Joke, JokeComponent} from './joke/joke.component';
import {JokeFormComponent} from './joke-form/joke-form.component'
import {JokeListComponent} from './joke-list/joke-list.component'

@Component({
  selector: 'app',
  template: `
<joke-list></joke-list>
  `
})
export class AppComponent {
}

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    JokeComponent,
    JokeListComponent,
    JokeFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
