import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  url:string = 'https://5e98afff5eabe7001681c474.mockapi.io/api/v1/products';
  limit:string = '?page=1&limit=9';
  getProducts(){
    return this.http.get(`${this.url}${this.limit}`);
  }

  getSpecificProduct(event, id){
    return this.http.get(`${this.url}/${id}`)
  }
}
