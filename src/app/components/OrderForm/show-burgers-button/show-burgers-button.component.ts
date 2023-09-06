import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-show-burgers-button',
  templateUrl: './show-burgers-button.component.html',
  styleUrls: ['./show-burgers-button.component.css']
})
export class ShowBurgersButtonComponent {
  @Input() label: string = ""
  @Input() pressed: boolean = false
}
