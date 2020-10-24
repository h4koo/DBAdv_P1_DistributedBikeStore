import { Injectable } from '@angular/core';
import { Client } from '../Models/client.model';
import { Product } from '../Models/product.model';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../Models/employee.model';
import { Order } from '../Models/order.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { formatISO } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  /*clients: Client[] = [
    { id: 1234, name: "Cliente 1", lastname: "Cliente 1", phone: 12345678 },
    { id: 1235, name: "Cliente 2", lastname: "Cliente 2", phone: 12345678 }
  ];

  employees: Employee[] = [
    { id: 1, name: "Empleado 1", lastname: "Empleado 1" },
    { id: 2, name: "Empleado 2", lastname: "Empleado 2" }
  ];
    products: Product[] = [
    { prod_id: 1, nombre: "Producto 1", precio: 1000 },
    { prod_id: 2, nombre: "Producto 2", precio: 1200 },
    { prod_id: 3, nombre: "Producto 3", precio: 800 },
    { prod_id: 4, nombre: "Producto 4", precio: 1100 }
  ];
  */

  clients: Client[] = [];

  employees: Employee[] = [];

  products: Product[] = [];

  constructor(public http: HttpClient, private toastr: ToastrService) { }

  /*getClients() {
    return this.clients;
  }
  
  
  getEmployees() {
    return this.employees;
  }
  

  getProducts() {
    return this.products;
  }

  processOrder(order: Order) {
    console.log(order.required_date);
    this.toastr.success("Orden procesada correctamente", 'Éxito!');
  }*/

  //Métodos asincrónicos para conectar al API

  async getClients() {
    await this.http.get(environment.API + '/clients').toPromise().then(res => {
      this.clients = res as Client[];
    }, error => {
      this.toastr.error('No se pudieron cargar los clientes', 'Error!');
      console.log(error);
    });
    return this.clients;
  }

  async getEmployees() {
    await this.http.get(environment.API + '/employees').toPromise().then(res => {
      this.employees = res as Employee[];
    }, error => {
      this.toastr.error('No se pudieron cargar los empleados', 'Error!');
      console.log(error);
    });
    return this.employees;
  }

  async getProducts() {
    await this.http.get(environment.API + '/products').toPromise().then(res => {
      this.products = res as Product[];
    }, error => {
      this.toastr.error('No se pudieron cargar los productos', 'Error!');
      console.log(error);
    });
    return this.products;
  }

  async processOrder(order: Order) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    const body = {
      client_id: order.client_id,
      emp_id: order.emp_id,
      req_date: formatISO(order.required_date).slice(0, 19).replace('T', ' '),
      items: order.items
    }
    await this.http.post(environment.API + '/sale', body, httpOptions).toPromise().then(res => {
      console.log(res);
      if (res[0][0].Result == "success") {
        this.toastr.success('Orden procesada exitosamente', 'Éxito');
      }else{
        this.toastr.error(res[0][0].Result, 'Error');
      }
    }, error => {
      this.toastr.error('No se pudo procesar la orden', 'Error');
      console.log(error);
    });
  }
}
