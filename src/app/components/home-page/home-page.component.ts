import {Component, Input, OnInit } from '@angular/core';
import {CardComponent} from "../card/card.component";
import {Product} from "../../types/product.types";
import {ProductsService} from "../../services/product.services";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  message: string = "HI Mark!"
  showMessage: boolean = false;

  loading: boolean = false;
  ngOnInit() {
    // Simulate loading time of 300 milliseconds
    setTimeout(() => {
      this.loading = true;
    }, 800);
  }

  onClick() {
    this.showMessage = !this.showMessage;
    if (this.showMessage) {
      this.message = "I changed text 1";
    } else {
      this.message = "HI Mark!";
    }
  }

  title = 'my-app';
  showModal = false;

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  @Input() checkList: any = [
    {
      name: "Auto Layout",
    },
    {
      name: "Global Design Style",
    },
    {
      name: "After Salse Support",
    }
  ];

  @Input() infoList: any = [
    {
      title: "Simple & Uniuqe",
      text: "Created by our talented designer",
      img: "assets/InfoList1.svg"
    },
    {
      title: "Layered Well & Documented",
      text: "We are not tolerant about taste",
      img: "assets/InfoList2.svg"
    },
    {
      title: "World Class UI Design",
      text: "We are not tolerant about taste",
      img: "assets/InfoList3.svg"
    }
  ]


  @Input() data2: any;
  @Input() data: any;
  @Input() infoList2: any = [
    {
      title: "Consequat vestibulum enim",
      text: "Etiam accumsan turpis ultricies felis rutrum, feugiat iaculis enim porttitor.",
      img: "assets/Illustration6.svg"
    },
    {
      title: "Consequat vestibulum enim",
      text: "Etiam accumsan turpis ultricies felis rutrum, feugiat iaculis enim porttitor.",
      img: "assets/Illustration7.svg"
    },
    {
      title: "Consequat vestibulum enim",
      text: "Etiam accumsan turpis ultricies felis rutrum, feugiat iaculis enim porttitor.",
      img: "assets/Illustration8.svg"
    }
  ]
  @Input() dataText: string = "PREMIUM HIGH QUALITY";
  @Input() dataTextNew: string = "Learn More";
  @Input() dataTextNew2: string = "See our pricing";




  public product: Product[] | undefined;

  // constructor(private service: ProductsService, private activatedRoute: ActivatedRoute) {
  //   this.activatedRoute.data.subscribe((value) => {
  //     this.service.products = value['products']?.products ?? [];
  //     this.product = this.service.products;
  //     console.log('Product:', this.product);
  //      // Check if the product data is available here
  //   });
  //
  // }
  constructor(private service: ProductsService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((value) => {
      this.service.products = value['products'].products;
      this.product = this.service.products;
    });
  }






  triggerButtonStyles:
    { [key: string]: string } =
    {
      'color': '#FF6A55',
      'font-family': 'DM Sans',
      'font-size': '16px',
      'font-style': 'normal',
      'font-weight': '700',
      'line-height': '20px',
      'letter-spacing': '0.5px',
      'padding': '10px 20px',
      'border-radius': '50px',
      'background': 'rgba(255, 188, 153, 0.20)',
      'display': 'flex',
      'margin': 'auto',
    };
  prmButton:
    { [key: string]: string } =
    {
      'color': '#1D1E25',
      'font-family': 'DM Sans',
      'font-size': '16px',
      'font-style': 'normal',
      'font-weight': '700',
      'line-height': '20px',
      'letter-spacing': '0.5px',
      'padding': '14px 25px',
      'border-radius': '8px',
      'background': 'unset',
      'border': '1px solid #808D9E',
    };




}
