export class PostProductTable {

    productName: string;
    price: number;
    purchase: boolean;
    constructor( productName: string, price: number, purchase: boolean) {

        this.productName = productName;
        this.price = price;
        this.purchase = purchase;
    }
}
