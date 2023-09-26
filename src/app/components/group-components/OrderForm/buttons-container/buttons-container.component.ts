import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-buttons-container',
  templateUrl: './buttons-container.component.html',
  styleUrls: ['./buttons-container.component.css']
})
export class ButtonsContainerComponent {
  @Input() highlights = true;
  @Input() menu = !this.highlights;
  @Output() clickedOption = new EventEmitter()

  onHighlightsClick () {
    if (!this.highlights) {
      this.highlights = true
      this.clickedOption.emit('highlights')
    }
    this.menu = false
  }

  onMenuClick(){
    if (!this.menu) {
      this.menu = true
      this.clickedOption.emit('menu')
    }
    this.highlights = false
  }
}
