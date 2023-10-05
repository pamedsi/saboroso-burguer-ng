import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-yellow-button',
  templateUrl: './yellow-button.component.html',
  styleUrls: ['./yellow-button.component.css']
})
export class YellowButtonComponent {
  @Input() text!: string;
  @Output() clicked = new EventEmitter()

  clickedButton() {
    this.clicked.emit()
  }
}
