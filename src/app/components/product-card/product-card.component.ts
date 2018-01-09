import { Component, Input, Output , EventEmitter, OnInit } from '@angular/core';
import { ProductTable } from '../../productTable';
import { UpdateProductsService } from '../../services/update-products/update-products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: ProductTable;
  // tslint:disable-next-line:no-input-rename
  @Input('purchaseStatus') type: Boolean;



  constructor(private updateProductsService: UpdateProductsService) { }

  ngOnInit() {
  }

  cancelProduct(product: ProductTable) {
    product.purchase = false;
    this.updateProductsService.cancel(product).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        });
  }

  buyProduct(product: ProductTable) {
    product.purchase = true;
    this.updateProductsService.buy(product).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        });
  }



}
