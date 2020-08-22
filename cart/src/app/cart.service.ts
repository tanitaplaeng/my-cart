import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Item } from "./item";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemsApiEndpoint: string = 'http://localhost:3000/cart-items';

  constructor(private http: HttpClient) { }

  getAllCartItems(): Observable<any> {
    return this.http.get("http://localhost:3000/cart-items",
    { responseType: "json"}
);
    // return this.http.get(this.cartItemsApiEndpoint);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.cartItemsApiEndpoint}/${id}`);
  }

  addItem(item: Item): Observable<any> { 
    return this.http.post(this.cartItemsApiEndpoint, item);
  }
  
    // editItem(quantity): Observable<any>{
  //   return this.http.put(this.endPoint, quantity);
  // }
}
