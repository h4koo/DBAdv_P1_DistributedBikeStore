import { Injectable } from '@angular/core';
import { Client } from '../Models/client.model';
import { Product } from '../Models/product.model';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../Models/employee.model';
import { Order } from '../Models/order.model';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  clients: Client[] = [
    { id: 1234, name: "Cliente 1", lastname: "Cliente 1", phone: 12345678 },
    { id: 1235, name: "Cliente 2", lastname: "Cliente 2", phone: 12345678 }
  ];
  products: Product[] = [
    { id: 1, name: "Producto 1", price: 1000},
    { id: 2, name: "Producto 2", price: 1200},
    { id: 3, name: "Producto 3", price: 800},
    { id: 4, name: "Producto 4", price: 1100}
  ];
  employees: Employee[] = [
    { id: 1, name: "Empleado 1", lastname: "Empleado 1"},
    { id: 2, name: "Empleado 2", lastname: "Empleado 2"}
  ];

  constructor( public toastr: ToastrService) { }

  getClients() {
    return this.clients;
  }

  getProducts() {
    return this.products;
  }

  getEmployees(){
    return this.employees;
  }

  processOrder(order: Order) {
    console.log(order.required_date);
    this.toastr.success("Orden procesada correctamente", 'Éxito!');
  }

}
