import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { ProductService } from 'src/app/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.css']
})
export class ProductRegistrationComponent {
  public product: Product = new Product(0, "", "", "", 0);

  constructor(private _productService: ProductService, private _router: Router) {}

  registration():void{
    this._productService.productRegistration(this.product).subscribe(
      product => {
        this.product = new Product(0, "", "", "", 0);
        alert("Cadastro efetuado com sucesso");
      },
      error => {
        alert("Erro ao cadastrar");
      }
    );

    this._router.navigate(['restrict/registration']);
  }

} 
