import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Models/client.model';
import { Product } from 'src/app/Models/product.model';

@Component({
  selector: 'app-sale-point',
  templateUrl: './sale-point.component.html',
  styleUrls: ['./sale-point.component.scss']
})
export class SalePointComponent implements OnInit {

  selectedClient: Client = {
    name: "Seleccione un cliente",
    lastname: "",
    phone: 0,
    email: "",
    state: "",
    postcode: 0,
    id : 0
  }

  selectedProduct: Product = {
    name: ""
  }

  clients: Client[] = [];

  products: Product[] = [];

  selectClient(value: Client) {
    this.selectedClient = value;
  }

  selectProduct(value: Product) {
    this.selectedProduct = value;
  }
  constructor() { }

  ngOnInit(): void {
    this.clients = [{ id : 1234, name: "Cliente 1", lastname: "Cliente 1", phone: 12345678, email: "cliente1@mail.com", state: "NY", postcode: 10101 }, { id: 1235, name: "Cliente 2", lastname: "Cliente 2", phone: 12345678, email: "cliente2@mail.com", state: "TX", postcode: 101567 }];
    this.products = [{ name: "Producto 1" }, { name: "Producto 2" }];
  }

}
