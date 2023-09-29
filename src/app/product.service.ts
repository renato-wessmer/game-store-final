import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/Product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private url = "http://localhost:3000/produtcs";

    constructor(private _httpCliente: HttpClient) { }

    getProduct(id: any): Observable<Product> {
        const urlIdProduct = `${this.url}?id=${id}`;
        return this._httpCliente.get<Product>(urlIdProduct);
    }

    getProducts(): Observable<Product[]> {
        return this._httpCliente.get<Product[]>(this.url);
    }

    productRegistration(product: Product): Observable<Product[]> {
        return this._httpCliente.post<Product[]>(this.url, product);
    }

    updateProduct(id: any, product: Product): Observable<Product[]> {
        const urlUpdate = `${this.url}?$id=${id}`;
        return this._httpCliente.put<Product[]>(urlUpdate, product);
    }

    removeProduct(id: any): Observable<Product[]> {
        const urlRemove = `${this.url}?$id=${id}`;
        return this._httpCliente.delete<Product[]>(urlRemove);
    }
}
