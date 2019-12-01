import { Component, OnInit, HostBinding } from '@angular/core';
import { SharedService } from '../shared.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @HostBinding('attr.class') role = 'vbox viewport margin_on_top';
  public cart;
  public totalPay = 0;
  public mrp = 0;
  public savedAmount = 0;
  constructor(public sharedService: SharedService) {
    this.cartCalculate();
  }

  ngOnInit() { }
  cartCalculate() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
    if (isNullOrUndefined(this.cart)) { this.cart = []; }
    this.cart.forEach(element => {
      this.totalPay = (this.totalPay + (element.mrp - element.offer_price)) * element.cartCount;
      this.mrp = (this.mrp + element.mrp) * element.cartCount;
      this.savedAmount = (this.savedAmount + element.offer_price) * element.cartCount;
    });
  }
}
