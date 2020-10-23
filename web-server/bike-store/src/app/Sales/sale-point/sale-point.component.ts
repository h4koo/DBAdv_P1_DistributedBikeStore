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
    lastname: "",
    phone: 0,
    id: 0
  }

  selectedEmployee: Employee = {
    name: "Seleccione un empleado",
    lastname: "",
    id: 0
  }

  selectedProduct: Product = {
    name: "Seleccione un producto",
    id: 0,
    price: 0
  }

  newOrder: Order = {
    client_id: 0,
    emp_id: 0,
    items: [],
    required_date: addDays(new Date(), 15)
  };

  newLine: OrderLine = {
    product_id: 0,
    quantity: 0
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
    this.clients = this.salesService.getClients();
    this.products = this.salesService.getProducts();
    this.employees = this.salesService.getEmployees();
  }

  selectClient(value: Client) {
    this.selectedClient = value;
    this.newOrder.client_id = value.id;
  }

  selectProduct(value: Product) {
    this.selectedProduct = value;
  }

  selectEmployee(value: Employee) {
    this.selectedEmployee = value;
    this.newOrder.emp_id = value.id;
  }

  addProduct() {
    if (this.selectedProduct.name != "Seleccione un producto") {
      if (this.newLine.quantity != 0) {
        this.newLine.product_id = this.selectedProduct.id;
        this.orderLines.push(this.newLine);
        var line = {
          id: this.selectedProduct.id,
          name: this.selectedProduct.name,
          quantity: this.newLine.quantity,
          price: this.selectedProduct.price
        }
        this.tableLines.push(line);
        this.total = this.total + (this.selectedProduct.price * this.newLine.quantity);
        this.newLine = {
          product_id: 0,
          quantity: 0
        }
        this.selectedProduct = {
          name: "Seleccione un producto",
          id: 0,
          price: 0
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
    this.orderLines = this.orderLines.filter(line => line.product_id != product.id);
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
