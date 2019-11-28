import { Injectable } from '@angular/core';
@Injectable()
export class SharedService {
    public menuLinks = [
        { name: 'Home', link: '' },
        { name: 'Collagen shot', link: 'product/1?variation=1' },
        { name: 'Sales Point', link: 'sales-point' },
        { name: 'My Story', link: 'my-story' },
        { name: 'Blog', link: 'blog' },
        { name: 'Contact', link: 'contact' },
    ];
}
