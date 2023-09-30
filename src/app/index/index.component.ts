import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public products: Product[] = [];

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.productList();
  }

  productList(): void {
    this._productService.getProducts().subscribe(
      returnProduct => {
        this.products = returnProduct.map(
          item => {
            return new Product(
              item.id,
              item.product,
              item.description,
              item.picture,
              item.price
            );
          }
        )
      }
    )
  }
}
