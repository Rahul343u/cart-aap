import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartPageComponent } from './components/add-to-cart-page/add-to-cart-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HeaderComponent } from './components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { ShortComponent } from './components/short/short.component';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [AddToCartPageComponent, CartPageComponent, HeaderComponent, FilterComponent, ShoppingListComponent, FooterComponent, SearchComponent, CartIconComponent, ShortComponent, OrderByPipe],
  imports: [CommonModule, FormsModule, AngularFontAwesomeModule],
  exports:[HeaderComponent,FooterComponent,]
})
export class CoreModule {}
