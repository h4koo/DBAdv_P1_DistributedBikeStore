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

  clients: Client[] = [];

  employees: Employee[] = [];

  products: Product[] = [];

  constructor(public http: HttpClient, private toastr: ToastrService) { }

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
      } else{
        this.toastr.error(res[0][0].Result, 'Error');
      }
    }, error => {
      this.toastr.error('No se pudo procesar la orden', 'Error');
      console.log(error);
    });
  }
}
