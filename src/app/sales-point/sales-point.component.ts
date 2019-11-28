import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-sales-point',
  templateUrl: './sales-point.component.html',
  styleUrls: ['./sales-point.component.scss']
})
export class SalesPointComponent implements OnInit {
  @HostBinding('attr.class') role = 'vbox viewport margin_on_top';
  constructor() { }

  ngOnInit() {
  }

}
