import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { ProductService } from 'src/app/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  public products: Product[] = [];

  constructor(private _productService: ProductService, private _router: Router) {}

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

  delete(id: number) {
    this._productService.removeProduct(id).subscribe(
      product => {
        this.productList();
      }, 
      error => {
        alert("Erro ao excluir");
      }
    );

    this._router.navigate([/restrict/list]);
  }
}
