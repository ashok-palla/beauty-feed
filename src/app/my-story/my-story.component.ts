import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-my-story',
  templateUrl: './my-story.component.html',
  styleUrls: ['./my-story.component.scss']
})
export class MyStoryComponent implements OnInit {
  @HostBinding('attr.class') role = 'vbox viewport margin_on_top';
  constructor() { }

  ngOnInit() {
  }

}
