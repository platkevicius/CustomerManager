import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Customer {
  name: string;
  street: string;
  country: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  load() {
    return this.http.get<Array<Customer>>('https://api.jsonbin.io/b/5ead46034c87c3359a655718');
  }
}
