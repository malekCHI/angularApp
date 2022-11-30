import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArticlesComponent } from './articles/articles.component';
import { AddProductComponent } from './add-product/add-product.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  //ngModule hadhy un decorateur/metadata
  declarations: [
     //les composants utilisés par ce module
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    FooterComponent,
    OffresEmploiComponent,
    NotFoundComponent,
    ArticlesComponent,
    AddProductComponent,
    TemplateDrivenFormComponent,
    TodoListComponent
  ],
  imports: [
    //les modules internes ou externes utilisés
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  //Les services utilisés
  providers: [],
  //déclare la vue principale de l’application
  bootstrap: [AppComponent]

  

})
export class AppModule { }
