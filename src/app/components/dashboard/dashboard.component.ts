import { Component, OnInit } from '@angular/core';
import { Customer, CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  customers: Array<Customer>;

  constructor(private service: CustomersService) { }

  ngOnInit(): void {
    this.service.load()
      .subscribe(customers => this.customers = customers);
  }

}
