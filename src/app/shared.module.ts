// shared.module.ts

import {Input, NgModule} from '@angular/core';
import {ButtonComponent} from "./components/button/button.component";
import {CommonModule} from "@angular/common";
import {ModalComponent} from "./components/modal/modal.component";
import {CardComponent} from "./components/card/card.component";
import {RouterLink, RouterModule} from "@angular/router";
import {ProductResolver} from "./resolver/product.resolver";
import {ButtonSettingsComponent} from "./components/button-settings/button-settings.component";
import {SocialButtonsComponent} from "./components/social-buttons/social-buttons.component";




@NgModule({
  imports: [
    CommonModule,
    RouterLink,
    RouterModule
    // Add CommonModule here to make common directives available
  ],
  declarations: [
    ButtonComponent,
    ModalComponent,
    CardComponent,
    ButtonSettingsComponent,
    SocialButtonsComponent,

  ],
  exports: [
    ButtonComponent,
    ModalComponent,
    CardComponent,
    ButtonSettingsComponent,
    SocialButtonsComponent
  ],
  providers: [
    ProductResolver
  ],
})
export class SharedModule {
  // @Input() dataText: string = ''; // Add the @Input() decorator here
  // @Input() dataStyles: { [key: string]: string } = {};
}
