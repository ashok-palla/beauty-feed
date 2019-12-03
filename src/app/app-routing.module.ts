import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { BlogComponent } from './blog/blog.component';
import { PreOrderComponent } from './pre-order/pre-order.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductComponent },
  // { path: 'sales-point', component: SalesPointComponent },
  // { path: 'my-story', component: MyStoryComponent },
  { path: 'blog', component: BlogComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'cart', component: CartComponent },
  { path: 'pre-order', component: PreOrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
