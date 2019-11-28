import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @HostBinding('attr.class') role = 'vbox viewport margin_on_top';
  constructor() { }

  ngOnInit() {
  }

}
