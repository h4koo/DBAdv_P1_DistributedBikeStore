import { Component, OnInit } from '@angular/core';
import { addDays } from 'date-fns';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Client } from 'src/app/Models/client.model';
import { Employee } from 'src/app/Models/employee.model';
import { OrderLine } from 'src/app/Models/order-line.model';
import { Order } from 'src/app/Models/order.model';
import { Product } from 'src/app/Models/product.model';
import { TableLine } from 'src/app/Models/table-line.model';
import { SalesService } from 'src/app/Services/sales.service';

@Component({
  selector: 'app-sale-point',
  templateUrl: './sale-point.component.html',
  styleUrls: ['./sale-point.component.scss']
})
export class SalePointComponent implements OnInit {

  selectedClient: Client = {
    name: "Seleccione un cliente",
    person_id: 0
  }

  selectedEmployee: Employee = {
    name: "Seleccione un empleado",
    person_id: 0
  }

  selectedProduct: Product = {
    name: "Seleccione un producto",
    prod_id: 0,
    precio: 0
  }

  newOrder: Order = {
    client_id: 0,
    emp_id: 0,
    items: [],
    required_date: addDays(new Date(), 15)
  };

  newLine: OrderLine = {
    prod_id: 0,
    cant: 0
  }

  tableLines: TableLine[] = [];

  orderLines: OrderLine[] = [];

  clients: Client[] = [];

  products: Product[] = [];

  employees: Employee[] = [];

  total: number = 0;

  refresh: Subject<any> = new Subject();

  constructor(private toastr: ToastrService, private salesService: SalesService) { }

  ngOnInit(): void {
    this.salesService.getClients().then(res => this.clients = res);
    this.salesService.getProducts().then(res => this.products = res);
    this.salesService.getEmployees().then(res => this.employees = res);
  }

  keyword = "name"

  /*selectClient(value: Client) {
    this.selectedClient = value;
    this.newOrder.client_id = value.id;
  }*/
  selectClient(item) {
    this.newOrder.client_id = item.person_id;
    this.selectedClient = item;
  }


  selectProduct(item) {
    this.selectedProduct = item;
  }

  selectEmployee(item) {
    this.selectedEmployee = item;
    this.newOrder.emp_id = item.person_id;
    console.log(this.selectedClient.name);
    console.log(this.selectedEmployee.name);
  }

  addProduct() {
    if (this.selectedProduct.name != "Seleccione un producto") {
      if (this.newLine.cant != 0) {
        this.newLine.prod_id = this.selectedProduct.prod_id;
        this.orderLines.push(this.newLine);
        var line = {
          id: this.selectedProduct.prod_id,
          name: this.selectedProduct.name,
          quantity: this.newLine.cant,
          price: this.selectedProduct.precio
        }
        this.tableLines.push(line);
        this.total = this.total + (this.selectedProduct.precio * this.newLine.cant);
        this.newLine = {
          prod_id: 0,
          cant: 0
        }
        this.selectedProduct = {
          name: "Seleccione un producto",
          prod_id: 0,
          precio: 0
        }
      }
      else {
        this.toastr.error("Escoja una cantidad", "Error");
      }
    }
    else {
      this.toastr.error("Seleccione un producto", "Error")
    }
  }

  removeProduct(product: TableLine) {
    this.tableLines.forEach(line => {
      if (line.id == product.id) {
        this.total = this.total - (product.quantity * product.price);
      }
    });
    this.orderLines = this.orderLines.filter(line => line.prod_id != product.id);
    this.tableLines = this.tableLines.filter(line => line.id != product.id);
  }

  processOrder() {
    if (this.selectedEmployee.name != "Seleccione un empleado") {
      if (this.selectedClient.name != "Seleccione un cliente") {
        if (this.orderLines.length != 0) {
          this.newOrder.items = this.orderLines;
          this.salesService.processOrder(this.newOrder);
        }
        else {
          this.toastr.error("Agregue productos a la orden", "Error")
        }
      }
      else {
        this.toastr.error("Seleccione un cliente", "Error");
      }
    }
    else {
      this.toastr.error("Seleccione un empleado", "Error");
    }
  }

}
