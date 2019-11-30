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
  public TESTIMONIALS = [
    {
      rating: 5, description: `I haven't seen nails grow so beautifully and uniformly in a long time. In my opinion, one of the better
    products ... justifies the price.`, name: 'Guest 1'
    },
    {
      rating: 5, description: `I am currently in pms and my face is cleaner than in "normal" days.`, name: 'Guest 2'
    },
    {
      rating: 5, description: `After only two collagen pops, I have no words just pictures.`, name: 'Guest 3'
    },
    {
      rating: 5, description: 'Hanging bags under my eyes were my trademark, after about 10-15 days of using collagen my underarms are gone !!!', name: 'Guest 4'
    },
    {
      rating: 5, description: 'For now, my nails are growing like crazy ', name: 'Guest 5'
    },
    {
      rating: 5, description: 'She is great, her hair is piercing, I have no sun allergy and otherwise I have problems every year. All praise', name: 'Guest 6'
    },
    {
      rating: 5, description: 'About the Allergies to the Sun  For the last couple of years, I have been struggling with allergies, my skin was burning and full of blisters and itching to go crazy. And now I am 2.5 months at sea and have no sun allergy. This is the only diet supplement I have been drinking for half a year and only now do I realize that it has helped me', name: 'Guest 7'
    },
    {
      rating: 5, description: 'I eat it without any problems. I have been using it for 2 months. The brown spots on the face are visibly reduced, the skin is softer and more elastic, the nails and hair are recovering. It is also used by my 16 year old daughter whose complexion has improved. Any praise', name: 'Guest 8'
    },
    {
      rating: 5, description: `Great thing .. I've been drinking it for a little over two weeks..no nails are never longer and firmer. Hair that is otherwise thin is lush and new is even growing. Facial skin is great. Otherwise, a few pimples broke out during PMS, but this time it didn't happen. I am mostly satisfied and I definitely order a new one by the end of the bottle. Thanks Gaia Naturelle for the top product`, name: 'Guest 9'
    }
  ];
  public textmoDisplayArray = [];
  public testmoPerPage = 3;
  public testmoPaginationArray = [];
  public testmoPageSelected = 0;
  @HostBinding('attr.class') role = 'vbox viewport margin_on_top';
  constructor(public sharedService: SharedService) { }
  public testmoTimer;
  ngOnInit() {
    this.getSliderData();
    this.increseTestmoPagination();
    this.testmoInterval();
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
  testmoPagination() {
    this.testmoPaginationArray = [];
    this.textmoDisplayArray = [];
    const length = this.TESTIMONIALS.length;
    const totalNoOfPages = Math.ceil(length / this.testmoPerPage);
    let index = 1;
    while (totalNoOfPages >= index) {
      this.testmoPaginationArray.push(index);
      index++;
    }
    let testmoPageStart = (this.testmoPageSelected * this.testmoPerPage) - this.testmoPerPage;
    const testmoPageEnd = (testmoPageStart + this.testmoPerPage) - 1;
    this.TESTIMONIALS.forEach((data, itemIndex) => {
      if (itemIndex >= testmoPageStart && itemIndex <= testmoPageEnd) { this.textmoDisplayArray.push(testmoPageStart); testmoPageStart++; }
    });
  }
  testmoClearTimer() { clearInterval(this.testmoTimer); }
  testmoInterval() {
    this.testmoTimer = setInterval(() => { this.increseTestmoPagination(); }, 6000);
  }
  increseTestmoPagination() {
    const length = this.TESTIMONIALS.length;
    const totalNoOfPages = Math.ceil(length / this.testmoPerPage);
    this.testmoPageSelected++;
    if (totalNoOfPages < this.testmoPageSelected) {
      this.testmoPageSelected = 1;
    }
    this.testmoPagination();
  }
}
