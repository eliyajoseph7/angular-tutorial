import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: object;
  product: object

  constructor(private data: ProductService) { }

  ngOnInit(): void {
    this.data.getProducts().subscribe(products => {
      this.products = products
      console.log(products)
    })

  }
      viewProduct(event, id){
        this.data.getSpecificProduct(event, id).subscribe(product => {
          this.product = product
        })
        return this.product;
      }

}
