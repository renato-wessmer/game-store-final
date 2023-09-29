import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*Angular Material Importation*/

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';

/*Angular Material Importation*/

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ConsoleComponent } from './console/console.component';
import { GamesComponent } from './games/games.component';
import { PromotionComponent } from './promotion/promotion.component';
import { RestrictComponent } from './restrict/restrict.component';
import { UpdateProductComponent } from './restrict/update-product/update-product.component';
import { ProductRegistrationComponent } from './restrict/product-registration/product-registration.component';
import { ProductListComponent } from './restrict/product-list/product-list.component';
import { RestrictMenuComponent } from './restrict/restrict-menu/restrict-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    FooterComponent,
    ToolbarComponent,
    ConsoleComponent,
    GamesComponent,
    PromotionComponent,
    RestrictComponent,
    UpdateProductComponent,
    ProductRegistrationComponent,
    ProductListComponent,
    RestrictMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
