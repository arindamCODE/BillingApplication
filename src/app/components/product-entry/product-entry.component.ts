import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostProductsService } from '../../services';
import { ProductTable } from '../../models/productTable';

@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent implements OnInit {
  id: number;
  productName: string;
  price: number;
  purchase: boolean;
  public product: ProductTable;
  constructor(private postProductsService: PostProductsService) {
    this.purchase = false;
  }
  ngOnInit() {
  }
  addProduct(id: number, productName: string, price: number) {
    this.id = id;
    this.productName = productName;
    this.price = price;
    this.product = new ProductTable(this.id, this.productName, this.price, this.purchase);
    this.postProductsService.postProducts(this.product).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        });
  }
}
