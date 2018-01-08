import { Component, Input, Output , EventEmitter, OnInit } from '@angular/core';
import { ProductTable } from '../../productTable';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: ProductTable;
  // tslint:disable-next-line:no-input-rename
  @Input('purchaseStatus') type: Boolean;



  constructor() { }

  ngOnInit() {
  }



}
