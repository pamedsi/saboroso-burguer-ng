import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-buttons-container',
  templateUrl: './buttons-container.component.html',
  styleUrls: ['./buttons-container.component.css']
})
export class ButtonsContainerComponent {
  @Input() highlights = true;
  @Input() menu = !this.highlights;
  @Output() onChange = new EventEmitter()

  change(optionClicked: string) {
    this.onChange.emit(optionClicked)
  }

  onHighlightsClick () {
    if (!this.highlights) {
      this.highlights = true
      this.change('highlights')
    }
    this.menu = false
  }

  onMenuClick(){
    if (!this.menu) {
      this.menu = true
      this.change('menu')
    }
    this.highlights = false
  }
}
