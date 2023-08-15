import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { HighlightDirective } from './highlight.directive';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {ButtonComponent} from "./components/button/button.component";
import {SharedModule} from "./shared.module";
import {RouterModule} from "@angular/router";
import {ProductResolver} from "./resolver/product.resolver";
import {ProductsService} from "./services/product.services";
import {FilterProductsPipe} from "./pipes/filter-products.pipe";
import {FormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterProductsPipe,
    // ButtonComponent,
    // CardComponent,
    FooterComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    HttpClientModule,
    SharedModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
