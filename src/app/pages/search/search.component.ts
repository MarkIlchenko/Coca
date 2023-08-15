import {Component, Input} from '@angular/core';
import {Product} from "../../types/product.types";
import {ProductsService} from "../../services/product.services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  title: string = "Blog & Article";
  term = ''
  loading: boolean = false;

  shownArticleCount: number = 4; // Number of articles initially shown
  articleIncrement: number = 4;
  increment: number = 5;

  ngOnInit() {

    setTimeout(() => {
      this.loading = true;
    }, 800);
  }
  public product: Product[] | undefined;
  public filteredProduct: Product[] | undefined;
  constructor(private service: ProductsService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((value) => {
      this.service.products = value['products'].products;
      this.product = this.service.products;
      this.filteredProduct = this.service.products;
    });
  }
  filterArticles() {
    if (this.term) {
      this.filteredProduct = this.product?.filter(item => {
        return item.title.toLowerCase().includes(this.term.toLowerCase());
      });
    } else {
      this.filteredProduct = this.product; // Show all articles when the input is empty
    }
  }

  loadMoreArticles() {
    this.shownArticleCount += this.increment;
  }
  shouldShowArticle(index: number): boolean {
    return index < this.shownArticleCount;
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
    this.shownArticleCount += this.articleIncrement;

    if (this.shownArticleCount >= (this.product ? this.product.length : 0)) {
      this.dataStyle = 'sec-button center-button disable';
    }
  }
}
