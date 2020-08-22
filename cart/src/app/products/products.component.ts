import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../cart.service';
import { Item } from "../item";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  cartItems: Item[];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getAllCartItems().subscribe(data => {
      this.cartItems = data;
    })
  }

  onGetAllItemsSuccess(items: Item[]){
    this.cartItems = items;

  }

  onGetAllItemsError(error: Error) { 
    console.log(error.message);
  }

  deleteCartItem(id): void { 
    this.cartService.deleteItem(id).subscribe(() => { 
      alert(`Item deleted!`);
      this.cartService.getAllCartItems().subscribe(c => {
        this.cartItems = c
      });
    }, (error: Error) => {
      alert(error.message);
    });
    // this.cartService.deleteItem(id).subscribe(() => {
    //   this.cartService.getAllCartItems().subscribe(c => {
    //     this.cartItems = c;
    //   });
    // });
  }
  
  submitItem(item){
    this.cartService.addItem(item).subscribe(data => {
      this.cartService.getAllCartItems().subscribe(c => {
        this.cartItems = c;
      });
    });
  }

}
