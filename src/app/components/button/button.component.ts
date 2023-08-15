import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() dataText: string = ''; // Add the @Input() decorator here
  @Input() dataStyles: { [key: string]: string } = {};
}
