import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion-card',
  templateUrl: './promotion-card.component.html',
  styleUrls: ['./promotion-card.component.css']
})
export class PromotionCardComponent implements OnInit {
  cards = [
    { title: 'Pepper', cols: 1, rows: 1, LINK: 'https://www.spiceography.com/wp-content/uploads/2017/11/tellicherry-pepper.jpeg'},
    { title: 'Pepper', cols: 1, rows: 1, LINK: 'https://www.spiceography.com/wp-content/uploads/2017/11/tellicherry-pepper.jpeg' },
    { title: 'Pepper', cols: 1, rows: 1, LINK: 'https://www.spiceography.com/wp-content/uploads/2017/11/tellicherry-pepper.jpeg' },
    { title: 'Pepper', cols: 1, rows: 1, LINK: 'https://www.spiceography.com/wp-content/uploads/2017/11/tellicherry-pepper.jpeg' },
    { title: 'Pepper', cols: 1, rows: 1, LINK: 'https://www.spiceography.com/wp-content/uploads/2017/11/tellicherry-pepper.jpeg' }
  ];
  constructor() { }

  ngOnInit() {
  }
}
