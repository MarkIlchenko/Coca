import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {ProductResolver} from "./resolver/product.resolver";
import {BlogPage} from "./pages/blog/blog-page.pages";
import {SearchComponent} from "./pages/search/search.component";
import {ArticlePageComponent} from "./pages/article-page/article-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";


const routes: Routes = [
  {
    path: '',
    resolve: {products: ProductResolver},
    // resolve: {products: ProductResolver},
    // resolve: {products: ProductResolver},
    children: [
      { path: '', loadChildren: () => import('./components/product-page.module').then(m => m.ProductsPageModule), data: {animation: 'ProductPageComponent'} },
    ]
  },

  // {
  //   path: '',
  //   loadChildren: () => import('./product/products-page.module').then(m => m.ProductsPageModule),
  //   resolve: { products: ProductResolver } // Add the resolver here
  // },
  // { path: '', loadChildren: () => import('./product/products-page.module').then(m => m.ProductsPageModule) },

  // { path: '', component: HomePageComponent },
  { path: 'features/about-us', component: AboutUsComponent },
  { path: 'features/login', component: LoginPageComponent, resolve: {products: ProductResolver} },
  { path: 'features/articles', component: BlogPage, resolve: {products: ProductResolver} },
  { path: 'features/search', component: SearchComponent, resolve: {products: ProductResolver} },
  { path: 'features/search/features/:id', component: ArticlePageComponent, resolve: {products: ProductResolver} },
  { path: 'features/articles/features/:id', component: ArticlePageComponent, resolve: {products: ProductResolver} },
  { path: 'features/:id', component: ArticlePageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProductResolver]
})
export class AppRoutingModule { }
