import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-buttons-container',
  templateUrl: './buttons-container.component.html',
  styleUrls: ['./buttons-container.component.css']
})
export class ButtonsContainerComponent {
  @Input() highlights = true;
  @Input() menu = !this.highlights;

  onHighlightsClick () {
    if (!this.highlights) this.highlights = true
    this.menu = false
  }
  onMenuClick(){
    if (!this.menu) this.menu = true
    this.highlights = false
  }
}
