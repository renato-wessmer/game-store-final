export class Product {
    id: number = 0;
    product: string ="";
    description: string ="";
    picture: string ="";
    price: number = 0;

    constructor(id: number, product: string, description: string, picture: string, price: number) {
        this.id = id;
        this.product = product;
        this.description = description;
        this.picture = picture;
        this.price = price;
    }
}