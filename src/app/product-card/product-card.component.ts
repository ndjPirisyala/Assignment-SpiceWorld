import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  cards: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.cards = db.collection('products').valueChanges();
}

  ngOnInit() {
  }

}
