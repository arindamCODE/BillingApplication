import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent implements OnInit {
  // @Output() clicked: EventEmitter<any>=new EventEmitter<any>();
  id:number;
  productName:string;
  price:number;


  constructor() { }

  ngOnInit() {
  }

  addProduct(id:number,productName:string,price:number) {
    this.id=id;
    this.productName=productName;
    this.price=price;
    console.log(this.id,this.productName,this.price);
  }

}
