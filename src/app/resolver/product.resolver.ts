import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import {ProductsService} from "../services/product.services";
import { Observable } from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProductResolver implements Resolve<Observable<any>> {

  constructor(private service: ProductsService, private http: HttpClient) {
  }
  resolve(): Observable<any> {
    return this.service.fetchProducts();
  }
}
