import { Component, OnInit, HostBinding } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @HostBinding('attr.class') role = 'vbox viewport margin_on_top';
  public prod = this.sharedService.products[0];
  public quantity = 500;
  constructor(public sharedService: SharedService) { }

  ngOnInit() {
  }

}
