import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-pre-order',
  templateUrl: './pre-order.component.html',
  styleUrls: ['./pre-order.component.scss']
})
export class PreOrderComponent implements OnInit {
  @HostBinding('attr.class') role = 'vbox viewport margin_on_top';
  constructor() { }
  ngOnInit() { }

}
