import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  timer;
  public pageIndex = 0;
  public imageArray = [
    'https://rukminim1.flixcart.com/flap/844/140/image/874e789bec6bdefd.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/1688/280/image/324c3012acbba30d.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/1688/280/image/e0d3640723eb7e06.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/1688/280/image/b263ea13ca8649f0.jpg?q=50'];
  @HostBinding('attr.class') role = 'vbox viewport';
  constructor() { }

  ngOnInit() {
    this.getSliderData();
  }
  getSliderData() { this.timer = setInterval(() => { this.increment(); }, 4000); }
  clearTimer() { clearInterval(this.timer); }
  increment() {
    if (this.pageIndex === (this.imageArray.length - 1)) {
      this.pageIndex = 0;
      return;
    }
    this.pageIndex++;
  }
  decrement() {
    if (this.pageIndex === 0) {
      this.pageIndex = this.imageArray.length - 1;
      return;
    }
    this.pageIndex--;
  }
}
