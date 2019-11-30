import { Injectable } from '@angular/core';
@Injectable()
export class SharedService {
    public menuLinks = [
        { name: 'Home', link: '' },
        { name: 'Collagen shot', link: 'product/1' },
        { name: 'Sales Point', link: 'sales-point' },
        { name: 'My Story', link: 'my-story' },
        { name: 'Blog', link: 'blog' },
        { name: 'Contact', link: 'contact' },
    ];
    public socialLinks = [
        { image_link: 'assets/facebook_circle-512.png', url: 'https://www.facebook.com/gaianaturelle.kolagenshot/' },
        { image_link: 'assets/insta.png', url: 'https://www.facebook.com/gaianaturelle.kolagenshot/' }
    ];
    public products = [
        {
            name: 'Collagen Shot',
            image_original_link: 'assets/00003.jpg',
            image_preview_link: 'assets/00003.jpg',
            image_link: 'assets/00003.jpg',
            images: [
                'assets/00003.jpg',
                // tslint:disable-next-line: max-line-length
                'https://scontent.fhyd2-1.fna.fbcdn.net/v/t1.0-9/77420499_772458963198609_7063862553440419840_n.jpg?_nc_cat=105&_nc_ohc=-3qFUfa7M90AQlP4VU4OsMnvuOCK_495v7VNC5k5me_OKMtuf_jTZSa8A&_nc_ht=scontent.fhyd2-1.fna&oh=5f66ef3cd4273ec4891c87940974ba53&oe=5E7F9861',
                'assets/BackUp/13.jpg',
                'assets/BackUp/14.jpg',
                'assets/BackUp/15.jpg',
                'assets/BackUp/18.jpg'
            ],
            url: '#/product/1',
            mrp: 2990,
            offer_price: 50,
            currency: 'EUR',
            quantity: [
                { qua: 500, in_stock: true }
            ],
            measure: 'ML'
        }
        // , 
        // {
        //   name: 'Hyaluron Face Cream',
        //   image_original_link: 'assets/00001.jpg',
        //   image_link: 'assets/00001.jpg',
        //   url: '#/product/1',
        //   mrp: 2440,
        //   offer_price: 732,
        //   currency: 'EUR'
        // },
        // {
        //   name: 'ShotCa',
        //   image_original_link: 'assets/00008.jpg',
        //   image_link: 'assets/00008.jpg',
        //   url: '#/product/1',
        //   mrp: 2190,
        //   offer_price: 657,
        //   currency: 'EUR'
        // }
    ];
    public collegenshotbenefits = [
        {
            title: 'Fish collagen',
            description: 'The small particle size allows for the best possible absorption and thus high product efficiency.',
            image_url: 'assets/benefits/icon-riba.png',
            height: 100
        },
        {
            title: 'Vitamins and zinc',
            description: 'For maximum efficiency, Vitamin C, E, B6 and biotin and zinc are added to Collagen shot.',
            image_url: 'assets/benefits/icon-vitamini.png',
            height: 100
        },
        {
            title: 'MSM',
            description: 'Organic sulfur involved in collagen formation. Because of its effects, it is often referred to as a mineral of beauty.',
            image_url: 'assets/benefits/icon-msm.png',
            height: 100
        },
        {
            title: 'Easy dosing',
            description: 'You take high levels of the active ingredients in one shot without mixing with other foods.',
            image_url: 'assets/benefits/icon-doziranje.png',
            height: 100
        }
    ];
}
