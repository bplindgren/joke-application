import { Component, OnInit, Input, Output, Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class Joke {
  public setup: string;
  public punchline: string;
  public hide: boolean;

  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}

@Component({
  selector: 'joke',
  providers: [Joke],
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  @Input('joke') data: Joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();

  ngOnInit() {
    console.log("joke created")
  }

  deleteItem() {
    this.jokeDeleted.emit(this.data);
  }

}
