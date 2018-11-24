import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  centeredText = 'No. 50, /<br> Colombo Road, /<br> Kadawatha.';
  constructor() { }

  ngOnInit() {
  }

}
