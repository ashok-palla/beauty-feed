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
  public totalPay = 0;
  public mrp = 0;
  public savedAmount = 0;
  constructor(public sharedService: SharedService) {
    this.cartCalculate();
  }

  ngOnInit() {
  }
  cartCalculate() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (isNullOrUndefined(cart)) { cart = []; }
    cart.forEach(element => {
      this.totalPay = this.totalPay + (element.mrp - element.offer_price);
      this.mrp = this.mrp + element.mrp;
      this.savedAmount = this.savedAmount + element.offer_price;
    });
  }
}
