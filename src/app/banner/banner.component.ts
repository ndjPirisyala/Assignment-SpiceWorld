import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  cards = [
    { title: 'Spice World', addressLine1: 'No. 50,', addressLine2: 'Colombo Road,', addressLine3: 'Kadawatha.', tele: '011 2705687', cols: 1, rows: 1,
      LINK: 'http://tipsytopsyexports.com/wp-content/themes/tipsytopsy/images/spices-banner.jpg'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
