import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  @Input() showError = false;
  @Input() errorMessage: String = '';
  @Output() closeWindowError: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleErrorClick() {
    this.closeWindowError.emit();
  }
}
