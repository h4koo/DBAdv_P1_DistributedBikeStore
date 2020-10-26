import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { formatISO } from 'date-fns';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { Category } from '../Models/category.model';
import { IncomeReportLine } from '../Models/income-report-line.model';
import { OrderReportLine } from '../Models/order-report-line.model';
import { ProductCategoryReportLine } from '../Models/product-category-report-line.model';
import { PurhaseReportLine } from '../Models/purhase-report-line.model';
import { SalesReportLine } from '../Models/sales-report-line.model';
import { StoreProductsReportLine } from '../Models/store-products-report-line.model';
import { TopClientsReportLine } from '../Models/top-clients-report-line.model';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  categories: Category[] = [];

  stores: string[] = ["Baldwin Bikes", "Santa Cruz Bikes", "Rowlette Bikes"];

  ordersReport: OrderReportLine[] = [];

  purchasesReport: PurhaseReportLine[] = [];

  categoryReport: ProductCategoryReportLine[] = [];

  salesReport: SalesReportLine[] = [];

  incomeReport: IncomeReportLine[] = [];

  topClientsReport : TopClientsReportLine[] =[];

  storeProductSalesReport : StoreProductsReportLine[] =[];

  constructor(public http: HttpClient, private toastr: ToastrService) { }

  getStores() {
    return this.stores;
  }

  async getOrdersReport(start: Date, end: Date) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    const body = {
      init_date: formatISO(start).slice(0, 19).replace('T', ' '),
      end_date: formatISO(end).slice(0, 19).replace('T', ' ')
    }
    await this.http.put(environment.API + '/reports/2', body, httpOptions).toPromise().then(res => {
      this.ordersReport = res as OrderReportLine[];
    }, error => {
      this.toastr.error('No se pudo recuperar el reporte', 'Error');
      console.log(error);
    });
    return this.ordersReport;
  }

  async getPurchasesReport(start: Date, end: Date) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    const body = {
      init_date: formatISO(start).slice(0, 19).replace('T', ' '),
      end_date: formatISO(end).slice(0, 19).replace('T', ' ')
    }
    await this.http.put(environment.API + '/reports/3', body, httpOptions).toPromise().then(res => {
      this.purchasesReport = res as PurhaseReportLine[];
    }, error => {
      this.toastr.error('No se pudo recuperar el reporte', 'Error');
      console.log(error);
    });
    return this.purchasesReport;
  }

  async getCategoryReport(start: Date, end: Date, category: number) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    const body = {
      init_date: formatISO(start).slice(0, 19).replace('T', ' '),
      end_date: formatISO(end).slice(0, 19).replace('T', ' '),
      prod_category: category
    }
    await this.http.put(environment.API + '/reports/4', body, httpOptions).toPromise().then(res => {
      this.categoryReport = res as ProductCategoryReportLine[];
     if(this.categoryReport[0] == undefined){
       this.toastr.warning("No hay productos de esta categoría", "Advertencia")
     }
    }, error => {
      this.toastr.error('No se pudo recuperar el reporte', 'Error');
      console.log(error);
    });
    return this.categoryReport;
  }

  async getCategories() {
    await this.http.get(environment.API + '/productcategories').toPromise().then(res => {
      this.categories = res as Category[];
    }, error => {
      this.toastr.error('No se pudieron cargar las categorias', 'Error!');
      console.log(error);
    });
    return this.categories;
  }


  async getIncomeReport(start: Date, end : Date,store: number) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    const body = {
      init_date: formatISO(start).slice(0, 19).replace('T', ' '),
      end_date: formatISO(end).slice(0, 19).replace('T', ' '),
      idTienda: store
    }
    await this.http.put(environment.API + '/reports/1',body, httpOptions).toPromise().then(res => {
      this.incomeReport = res as IncomeReportLine[];
      console.log(this.incomeReport[0].TotalRecaudado)
    }, error => {
      this.toastr.error('No se pudo recuperar el reporte', 'Error');
      console.log(error);
    });
    return this.incomeReport;
  }

  async getSalesReport(start: Date, end : Date) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    const body = {
      init_date: formatISO(start).slice(0, 19).replace('T', ' '),
      end_date: formatISO(end).slice(0, 19).replace('T', ' ')
    }
    await this.http.put(environment.API + '/reports/5',body, httpOptions).toPromise().then(res => {
      this.salesReport = res as SalesReportLine[];
    }, error => {
      this.toastr.error('No se pudo recuperar el reporte', 'Error');
      console.log(error);
    });
    return this.salesReport;
  }

  async getTopClientsReport(start: Date, end : Date) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    const body = {
      init_date: formatISO(start).slice(0, 19).replace('T', ' '),
      end_date: formatISO(end).slice(0, 19).replace('T', ' ')
    }
    await this.http.put(environment.API + '/reports/7',body, httpOptions).toPromise().then(res => {
      this.topClientsReport = res as TopClientsReportLine[];
    }, error => {
      this.toastr.error('No se pudo recuperar el reporte', 'Error');
      console.log(error);
    });
    return this.topClientsReport;
  }

  async getStoreProductSalesReport(start: Date, end : Date) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    const body = {
      init_date: formatISO(start).slice(0, 19).replace('T', ' '),
      end_date: formatISO(end).slice(0, 19).replace('T', ' ')
    }
    await this.http.put(environment.API + '/reports/6',body, httpOptions).toPromise().then(res => {
      this.storeProductSalesReport = res as StoreProductsReportLine[];
    }, error => {
      this.toastr.error('No se pudo recuperar el reporte', 'Error');
      console.log(error);
    }); 
    return this.storeProductSalesReport;
  }
}
