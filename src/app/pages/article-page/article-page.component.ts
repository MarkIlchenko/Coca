import {Component, Input} from '@angular/core';
import {Product} from "../../types/product.types";
import {ProductsService} from "../../services/product.services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent{
  public product: Product[] | undefined;
  public selectedProductTitle: string | undefined;
  public selectedProductImg: string | undefined;
  public selectedProductDate: string | undefined;
  public selectedProductDesc1: string | undefined;
  public selectedProductText1: string | undefined;
  public selectedProductQuote: string | undefined;
  public selectedProductText2: string | undefined;

  socialStyles: string = "absolute-socials";

  constructor(
    private service: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.data.subscribe((value) => {
      this.service.products = value['products'].products;
      this.product = this.service.products;

      this.selectedProductTitle = this.getProductTitleById(
        this.activatedRoute.snapshot.params['id']
      );
      this.selectedProductImg = this.getProductImgById(
        this.activatedRoute.snapshot.params['id']
      );
      this.selectedProductDate = this.getProductDateById(
        this.activatedRoute.snapshot.params['id']
      );
      this.selectedProductDesc1 = this.getProductDateByDesc1(
        this.activatedRoute.snapshot.params['id']
      );
      this.selectedProductText1 = this.getProductDateByText1(
        this.activatedRoute.snapshot.params['id']
      );
      this.selectedProductQuote = this.getProductDateByQuote(
        this.activatedRoute.snapshot.params['id']
      );
      this.selectedProductText2 = this.getProductDateByText2(
        this.activatedRoute.snapshot.params['id']
      );

    });
  }

  getProductTitleById(id: string): string | undefined {
    const selectedProduct = this.product?.find((item) => item.id === id);
    return selectedProduct ? selectedProduct.title : undefined;
  }
  getProductImgById(id: string): string | undefined {
    const selectedProduct = this.product?.find((item) => item.id === id);
    return selectedProduct ? selectedProduct.img : undefined;
  }
  getProductDateById(id: string): string | undefined {
    const selectedProduct = this.product?.find((item) => item.id === id);
    return selectedProduct ? selectedProduct.date : undefined;
  }
  getProductDateByDesc1(id: string): string | undefined {
    const selectedProduct = this.product?.find((item) => item.id === id);
    return selectedProduct ? selectedProduct.description1 : undefined;
  }
  getProductDateByText1(id: string): string | undefined {
    const selectedProduct = this.product?.find((item) => item.id === id);
    return selectedProduct ? selectedProduct.text1 : undefined;
  }
  getProductDateByQuote(id: string): string | undefined {
    const selectedProduct = this.product?.find((item) => item.id === id);
    return selectedProduct ? selectedProduct.quote : undefined;
  }
  getProductDateByText2(id: string): string | undefined {
    const selectedProduct = this.product?.find((item) => item.id === id);
    return selectedProduct ? selectedProduct.text2 : undefined;
  }
}
