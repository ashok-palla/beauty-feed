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
