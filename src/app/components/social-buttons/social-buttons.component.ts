import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-social-buttons',
  templateUrl: './social-buttons.component.html',
  styleUrls: ['./social-buttons.component.scss']
})
export class SocialButtonsComponent {
  // @ts-ignore
  @Input() navStyle: string;

  @Input() navImg: any = [
    {
      img: "assets/FB.svg",
    },
    {
      img: "assets/TW.svg",
    },
    {
      img: "assets/WA.svg",
    },
    {
      img: "assets/LN.svg",
    },
    {
      img: "assets/IN.svg",
    },
  ]
}
