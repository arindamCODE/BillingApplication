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
  constructor( private object: GetProductsService) { }

  ngOnInit() {
  }

  }

