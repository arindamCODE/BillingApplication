import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductEntryComponent } from './components/product-entry/product-entry.component';
import { HttpClientService } from './services';
import { GetProductsService } from './services';


const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
   { path: 'productEntry', component: ProductEntryComponent },
  { path: 'products', component: ProductsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductEntryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [HttpClientService,
  GetProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
