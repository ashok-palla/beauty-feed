import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-beauty-feed',
  templateUrl: './beauty-feed.component.html',
  styleUrls: ['./beauty-feed.component.scss']
})
export class BeautyFeedComponent implements OnInit {
  @HostBinding('attr.class') role = 'vbox viewport';
  constructor() { }

  ngOnInit() {
  }

}
