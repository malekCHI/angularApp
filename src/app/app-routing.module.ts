import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArticlesComponent } from './articles/articles.component';
import { AddProductComponent } from './add-product/add-product.component';


const routes: Routes = [
  //hna chicompari path zouz ken path fergh toul yhezni lil products
  { path: 'products', component: ProductsComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'offresEmploi', component: OffresEmploiComponent },
  { path: 'Articles', component: ArticlesComponent },
  { path: 'products/add_products', component: AddProductComponent },
  { path:'**',component:NotFoundComponent},

];

@NgModule({
  //assurer le systeme de navigation b routermodule b fnct esmha forRoot
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
