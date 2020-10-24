import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Client } from '../Models/client.model';
import { IncomeReportLine } from '../Models/income-report-line.model';
import { OrderReportLine } from '../Models/order-report-line.model';
import { ProductCategoryReportLine } from '../Models/product-category-report-line.model';
import { PurhaseReportLine } from '../Models/purhase-report-line.model';
import { Report } from '../Models/report.model';
import { SalesReportLine } from '../Models/sales-report-line.model';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  categories: string[] = ["Categoria 1", "Categoria 2", "Categoria 3", "Categoria 4"];

  stores: string[] = ["Baldwin Bikes", "Santa Cruz Bikes", "Rowlette Bikes"];

  ordersReport: OrderReportLine[] = [
    { client: "Cliente 1", orders: 3 },
    { client: "Cliente 2", orders: 1 }
  ]

  purchasesReport: PurhaseReportLine[] = [
    { client: "Cliente 1", purchases: 3 },
    { client: "Cliente 2", purchases: 1 }
  ]

  categoryReport: ProductCategoryReportLine[] = [
    { product: "Producto 1", sales: 15000 },
    { product: "Producto 2", sales: 30000 }
  ]

  salesReport: SalesReportLine[] = [
    { sales: 12000 }
  ]

  incomeReport: IncomeReportLine[] = [
    { total: 12000 }
  ];

  constructor(public http: HttpClient, private toastr: ToastrService) { }

  getCategories() {
    return this.categories;
  }

  getOrdersReport(start: Date, end: Date, store: string) {
    return this.ordersReport;
  }

  getPurchasesReport(start: Date, end: Date, store: string) {
    return this.purchasesReport;
  }

  getCategoryReport(month: string, category: string, store: string) {
    return this.categoryReport;
  }

  getSalesReport(start: Date, end: Date, store: string) {
    return this.salesReport;
  }

  getIncomeReport(store: string) {
    return this.incomeReport;
  }

  getStores() {
    return this.stores;
  }

  reportes: Client[] = []
  async getReportList() {
    await this.http.get('http://localhost:3000/api/clients').toPromise().then(res => {
      this.reportes = res as Client[];
    }, error => {
      this.toastr.error('No se pudieron cargar los reportes', 'Error!');
      console.log(error);
    });
    return this.reportes;
  }
}
