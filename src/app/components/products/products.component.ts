import { Component, OnInit } from '@angular/core';
import { ProductTable } from '../../models/productTable';
import { GetProductsService } from '../../services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public product: ProductTable[];
  constructor(private object: GetProductsService) { }

  ngOnInit() {
    this.getProductDetails();
  }

  getProductDetails() {
    console.log('inside getProductDeatils');
    this.object.getDetails().subscribe(result => {
      this.product = result as ProductTable[];
    });
  }

}
