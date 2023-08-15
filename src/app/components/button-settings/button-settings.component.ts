import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-settings',
  templateUrl: './button-settings.component.html',
  styleUrls: ['./button-settings.component.scss']
})
export class ButtonSettingsComponent {

  // @ts-ignore
  @Input() buttonText: string;
  // @ts-ignore
  @Input() buttonStyles: any;
  @Input() buttonClick: any;
}
