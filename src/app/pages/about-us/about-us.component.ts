import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../types/product.types";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/product.services";

type Data = {
  [ket: string]: string;
};
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  providers: [],
})
export class AboutUsComponent implements OnInit {
  loading: boolean = false;

  ngOnInit() {
    // Simulate loading time of 300 milliseconds
    setTimeout(() => {
      this.loading = true;
    }, 800);
  }
  @Input() data: any;


}
