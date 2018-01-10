
import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { PostProductsService, AlertService } from '../../services';
import { PostProductTable } from '../../models/postProductTable';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';



@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[Equalvalidate][formControlName],[formControl],[ngModel]',
  providers: [
      {
          provide: NG_VALIDATORS,
          useExisting: forwardRef(() => EqualValidator),
          multi: true
      }
  ]
})

export class EqualValidator implements Validator {

  constructor(@Attribute('Equalvalidate') public Equalvalidate: string) { }

  validate(abControl: AbstractControl): { [key: string]: any } {
       // Get self value.
       // tslint:disable-next-line:prefer-const
       let val = abControl.value;

      // Get control value.
       // tslint:disable-next-line:prefer-const
       let cValue = abControl.root.get(this.Equalvalidate);

      // value not equal
       // tslint:disable-next-line:curly
       if (cValue && val !== cValue.value) return {
           Equalvalidate: false
       };

      return null;
   }
}

@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent implements OnInit {
  model: any = {};
  loading = false;
  titleAlert = 'This field is required';
  id: number;
  productName: string;
  price: number;
  purchase: boolean;
  public product: PostProductTable;
  constructor(private postProductsService: PostProductsService , private router: Router , private alertService: AlertService) {
  this.purchase = false;
  }
  ngOnInit() {
  }

  addProduct() {
    this.loading = true;
    this.product = new PostProductTable(this.model.productName, this.model.price, this.purchase);
    this.postProductsService.postProducts(this.product).subscribe(
      data => {
        this.alertService.success('Registration success', true);
        this.router.navigate(['/products']);
    },
    error => {
        this.alertService.error('Unable to Post');
        this.loading = false;


    });

            }
  // addProduct(id: number, productName: string, price: number) {
  //   this.id = id;
  //   this.productName = productName;
  //   this.price = price;
  //   this.product = new ProductTable(this.id, this.productName, this.price, this.purchase);
  //   this.postProductsService.postProducts(this.product).subscribe(
  //       res => {
  //         console.log(res);
  //       },
  //       err => {
  //         console.log('Error occured');
  //       });
  // }

}
