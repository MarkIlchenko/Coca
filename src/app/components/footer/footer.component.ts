import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() prmButtonText: string = "Learn More";
  @Input() prmButtonTex2t: string = "Ready to get started?";

  dataText1: string = "Ready to get started?";
  dataStyle1: string = "thr-button";
  dataText2: string = "Get Started";
  dataStyle2: string = "prm-button";


  @Input() socialIcons: any = [
    {
      img: "assets/001-facebook.svg"
    },
    {
      img: "assets/003-twitter.svg"
    },
    {
      img: "assets/004-instagram.svg"
    },
  ]
  @Input() footerLink: any = [
    {
      name: "Services",
      listName: [
        {
          listTitle: "Email Marketing",
        },
        {
          listTitle: "Campaigns",
        },
        {
          listTitle: "Branding",
        },
        {
          listTitle: "Offline",
        },
      ]
    },
    {
      name: "About",
      listName: [
        {
          listTitle: "Our Story",
        },
        {
          listTitle: "Benefits",
        },
        {
          listTitle: "Team",
        },
        {
          listTitle: "Careers",
        },
      ]
    },
    {
      name: "Help",
      listName: [
        {
          listTitle: "FAQs",
        },
        {
          listTitle: "Contact Us",
        }
      ]
    },
  ]


  prmButton:
    { [key: string]: string } =
    {
      'color': '#FFF',
      'font-family': 'DM Sans',
      'font-size': '16px',
      'font-style': 'normal',
      'font-weight': '700',
      'line-height': '20px',
      'letter-spacing': '0.5px',
      'padding': '14px 48px',
      'border-radius': '8px',
      'background': '#2A85FF',
      'display': 'flex',
      'margin': 'auto',
    };
  secButton:
    { [key: string]: string } =
    {
      'color': '#808D9E',
      'font-family': 'DM Sans',
      'font-size': '16px',
      'font-style': 'normal',
      'font-weight': '700',
      'line-height': '20px',
      'letter-spacing': '0.5px',
      'border-radius': '8px',
      'margin': '14px 40px 0 0',

    };
}
