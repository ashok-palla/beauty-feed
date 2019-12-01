import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @HostBinding('attr.class') role = 'vbox viewport margin_on_top';
  constructor() { }

  ngOnInit() {
    localStorage.clear();
  }

}
