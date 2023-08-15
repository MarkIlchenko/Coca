import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Product} from "../types/product.types";

@Injectable({
  providedIn: "root"
})

export class ProductsService {
  public products: Product[] | undefined;
  constructor(private http: HttpClient) {}
  fetchProducts(): Observable<{ products: Product[] }> {
    return this.http.get<any>('data/products.json');
  }

}
