import { Component, OnInit, HostBinding } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  timer;
  public pageIndex = 0;
  public imageArray = [
    'assets/I-3.jpg',
    'assets/16.jpg',
    'assets/BackUp/11.jpg',
    'assets/BackUp/12.jpg',
    'assets/BackUp/13.jpg',
    'assets/BackUp/18.jpg'];
    public category = [
      {
        name: 'Tonique',
        image_original_link: 'assets/GAIA_NATURELLE_1600x1600-300x300.jpg',
        image_link: 'assets/GAIA_NATURELLE_1600x1600-300x300.jpg',
        url: '#/product/1',
      },
      {
        name: 'Cream',
        image_original_link: 'assets/00001.jpg',
        image_link: 'assets/00001.jpg',
        url: '#/product/1',
      }
    ];
  public products = [
    {
      name: 'Collagen Shot',
      image_original_link: 'assets/GAIA_NATURELLE_1600x1600-300x300.jpg',
      image_link: 'assets/GAIA_NATURELLE_1600x1600-300x300.jpg',
      url: '#/product/1',
      mrp: 2990,
      offer_price: 50,
      currency: 'EUR'
    },
    {
      name: 'Hyaluron Face Cream',
      image_original_link: 'assets/00001.jpg',
      image_link: 'assets/00001.jpg',
      url: '#/product/1',
      mrp: 2440,
      offer_price: 732,
      currency: 'EUR'
    },
    {
      name: 'ShotCa',
      image_original_link: 'assets/00008.jpg',
      image_link: 'assets/00008.jpg',
      url: '#/product/1',
      mrp: 2190,
      offer_price: 657,
      currency: 'EUR'
    }
  ];
  @HostBinding('attr.class') role = 'vbox viewport margin_on_top';
  constructor(public sharedService: SharedService) { }

  ngOnInit() {
    this.getSliderData();
  }
  getSliderData() { this.timer = setInterval(() => { this.increment(); }, 4000); }
  clearTimer() { clearInterval(this.timer); }
  decrement() {
    if (this.pageIndex === (this.imageArray.length - 1)) {
      this.pageIndex = 0;
      return;
    }
    this.pageIndex++;
  }
  increment() {
    if (this.pageIndex === 0) {
      this.pageIndex = this.imageArray.length - 1;
      return;
    }
    this.pageIndex--;
  }
}
