import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-highlights-and-menu-buttons',
  templateUrl: './highlights-and-menu-buttons.component.html',
  styleUrls: ['./highlights-and-menu-buttons.component.css']
})
export class HighlightsAndMenuButtonsComponent {
  @Input() highlights = false;
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
