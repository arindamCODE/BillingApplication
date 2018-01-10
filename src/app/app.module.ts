import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductEntryComponent } from './components/product-entry/product-entry.component';
import { HttpClientService } from './services';
import { PostProductsService } from './services';
import { GetProductsService } from './services';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { UpdateProductsService } from './services';


const routes: Routes = [
  { path: '', redirectTo: 'productEntry', pathMatch: 'full' },
  { path: 'productEntry', component: ProductEntryComponent },
  { path: 'products', component: ProductsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductCardComponent,
    ProductEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HttpClientService,
    PostProductsService,
    GetProductsService,
    UpdateProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
