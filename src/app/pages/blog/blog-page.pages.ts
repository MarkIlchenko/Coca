import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../types/product.types";
import {ProductsService} from "../../services/product.services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-blog',
  templateUrl: './blog-page.pages.html',
  styleUrls: ['./blog-page.pages.scss'],
})

export class BlogPage implements OnInit {
  title: string = "Blog & Article";
  loading: boolean = false;
  ngOnInit() {
    // Simulate loading time of 300 milliseconds
    setTimeout(() => {
      this.loading = true;
    }, 800);
  }
  public product: Product[] | undefined;
  constructor(private service: ProductsService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((value) => {
      this.service.products = value['products'].products;
      this.product = this.service.products;
    });
  }

  @Input() data: any;

  isFirstItem: boolean = true;
  getItemStyles(index: number): string {
    if (index === 1 || index === 2 || index === 3) {
      return 'block';
    } else {
      return '';
    }
  }

  dataText: string = "Load more post";
  dataStyle: string = "sec-button center-button";


  handleClick() {
    console.log("Hi!")
  }
}
