// Import statements should come first
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CardComponent} from "./card/card.component";
import {ModalComponent} from "./modal/modal.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {FormsModule} from "@angular/forms";
import {ProductsPageRoutingModule} from "./products-page.module";
import {AppModule} from "../app.module";
import {SharedModule} from "../shared.module";
import {AboutUsComponent} from "../pages/about-us/about-us.component";
import {BlogPage} from "../pages/blog/blog-page.pages";
import {ArticlesComponent} from "./articles/articles.component";
import {SearchComponent} from "../pages/search/search.component";
import {ArticlePageComponent} from "../pages/article-page/article-page.component";
import {LoginPageComponent} from "../pages/login-page/login-page.component";





@NgModule({
  declarations: [
    HomePageComponent,
    SearchComponent,
    LoginPageComponent,
    ArticlePageComponent,
    AboutUsComponent,
    BlogPage,
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsPageRoutingModule,
    SharedModule,
  ]
})
export class ProductsPageModule { }



