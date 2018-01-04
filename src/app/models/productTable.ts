export class ProductTable {
    id: number;
    productName: string;
    price: number;
    purchase: boolean;
    constructor(id: number, productName: string, price: number, purchase: boolean) {
        this.id = id;
        this.productName = productName;
        this.price = price;
        this.purchase = purchase;
    }
}
