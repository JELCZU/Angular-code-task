import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Output() onTypingInput: EventEmitter<string> = new EventEmitter();
  constructor() {}
  onInput(filter: string) {
    this.onTypingInput.emit(filter);
  }

  ngOnInit(): void {}
}
