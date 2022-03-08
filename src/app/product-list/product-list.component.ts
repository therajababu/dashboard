import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  message: string ="";
  products: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.message = "Product List";
    this.products = [
      {
        "productId" : 1,
        "productName" : "Leaf Rake",
        "productCode" : 202,
        "releaseDate" : "March 2022",
        "price": 340,
        "startRating" : 4.5,
        "imageUrl" : ""
      }

    ];
  }

}
