import { GetProductsService } from './../../services/get-products/get-products.service';
import { ProductTable } from './../../productTable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  public product: ProductTable[];
  public product1: ProductTable[];

  len: number;
  i: number;
  price = 0;
  constructor( private object: GetProductsService) { }

  ngOnInit() {
    this.getProductDetails();
  }

  getProductDetails() {
    console.log('inside getProductDeatils');
    this.object.getDetails().subscribe(result => {
      this.product = result as ProductTable[];
      this.product1 = this.product.filter(obj => obj.purchase === true);
      this.getPrice(this.product1);
    });
  }

  getPrice(pro: ProductTable[]) {
     this.len = pro.length;
     for (this.i = 0; this.i < this.len; this.i++) {
       this.price = this.price + pro[this.i].price;
     }
   }
  }

