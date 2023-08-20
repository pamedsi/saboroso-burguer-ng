import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-buttons-container',
  templateUrl: './buttons-container.component.html',
  styleUrls: ['./buttons-container.component.css']
})
export class ButtonsContainerComponent {
  @Input() highLights = true;
  @Input() menu = !this.highLights;
  onHighlightsClick () {
    if (!this.highLights) this.highLights = true
    this.menu = false
  }
  onMenuClick(){
    if (!this.menu) this.menu = true
    this.highLights = false
  }
}
