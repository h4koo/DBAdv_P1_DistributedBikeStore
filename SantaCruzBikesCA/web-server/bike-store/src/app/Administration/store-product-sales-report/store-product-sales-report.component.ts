import { Component, OnInit } from '@angular/core';
import { compareAsc } from 'date-fns';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { StoreProductsReportLine } from 'src/app/Models/store-products-report-line.model';
import { ReportsService } from 'src/app/Services/reports.service';

@Component({
  selector: 'app-store-product-sales-report',
  templateUrl: './store-product-sales-report.component.html',
  styleUrls: ['./store-product-sales-report.component.scss']
})
export class StoreProductSalesReportComponent implements OnInit {

  refresh: Subject<any> = new Subject();

  startDate: Date = new Date();

  endDate: Date = new Date();

  report: StoreProductsReportLine[] = [];

  constructor(private toastr: ToastrService, private reportService: ReportsService) { }

  ngOnInit(): void {
  }

  getReport() {
    if (compareAsc(this.startDate, this.endDate) == -1 || compareAsc(this.startDate, this.endDate) == 0) {
      this.reportService.getStoreProductSalesReport(this.startDate, this.endDate).then(res => this.report = res);
    }
    else {
      this.toastr.error("La fecha de fin no puede ser menor a inicio")
    }
  }
}
