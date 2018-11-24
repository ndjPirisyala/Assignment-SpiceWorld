import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  cards = [
    { title: 'Pepper', cols: 1, rows: 1, LINK: 'https://www.spiceography.com/wp-content/uploads/2017/11/tellicherry-pepper.jpeg'},
    { title: 'Pepper', cols: 1, rows: 1, LINK: 'https://www.spiceography.com/wp-content/uploads/2017/11/tellicherry-pepper.jpeg' },
    { title: 'Pepper', cols: 1, rows: 1, LINK: 'https://www.spiceography.com/wp-content/uploads/2017/11/tellicherry-pepper.jpeg' },
    { title: 'Pepper', cols: 1, rows: 1, LINK: 'https://www.spiceography.com/wp-content/uploads/2017/11/tellicherry-pepper.jpeg' },
    { title: 'Pepper', cols: 1, rows: 1, LINK: 'https://www.spiceography.com/wp-content/uploads/2017/11/tellicherry-pepper.jpeg' },
    { title: 'Pepper', cols: 1, rows: 1, LINK: 'https://www.spiceography.com/wp-content/uploads/2017/11/tellicherry-pepper.jpeg'},
    { title: 'Pepper', cols: 1, rows: 1, LINK: 'https://www.spiceography.com/wp-content/uploads/2017/11/tellicherry-pepper.jpeg' },
    { title: 'Pepper', cols: 1, rows: 1, LINK: 'https://www.spiceography.com/wp-content/uploads/2017/11/tellicherry-pepper.jpeg' },
    { title: 'Pepper', cols: 1, rows: 1, LINK: 'https://www.spiceography.com/wp-content/uploads/2017/11/tellicherry-pepper.jpeg' },
    { title: 'Pepper', cols: 1, rows: 1, LINK: 'https://www.spiceography.com/wp-content/uploads/2017/11/tellicherry-pepper.jpeg' },
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
