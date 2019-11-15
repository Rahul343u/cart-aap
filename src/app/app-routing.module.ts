import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartPageComponent } from './core/components/cart-page/cart-page.component';
import { ShoppingListComponent } from './core/components/shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', component: ShoppingListComponent },
  { path: 'cart', component: CartPageComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
