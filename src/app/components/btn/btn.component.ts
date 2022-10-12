import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css'],
})
export class BtnComponent implements OnInit {
  @Output() btnClick = new EventEmitter();
  constructor() {}
  click() {
    this.btnClick.emit();
  }
  ngOnInit(): void {}
}
