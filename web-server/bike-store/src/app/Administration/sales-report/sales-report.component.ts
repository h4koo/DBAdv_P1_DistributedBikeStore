import { Component, OnInit } from '@angular/core';
import { compareAsc } from 'date-fns';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { SalesReportLine } from 'src/app/Models/sales-report-line.model';
import { ReportsService } from 'src/app/Services/reports.service';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.scss']
})
export class SalesReportComponent implements OnInit {

  refresh: Subject<any> = new Subject();

  startDate: Date = new Date();

  endDate: Date = new Date();

  report: SalesReportLine[] = [];

  selectedStore: string = "Seleccione una tienda";

  stores: string[] = [];

  constructor(private toastr: ToastrService, private reportService: ReportsService) { }

  ngOnInit(): void {
    this.stores = this.reportService.getStores();
  }

  getReport() {
    if (compareAsc(this.startDate, this.endDate) == -1 || compareAsc(this.startDate, this.endDate) == 0) {
      if(this.selectedStore != "Seleccione una tienda"){
        this.report = this.reportService.getSalesReport(this.startDate, this.endDate, "Rowlette");
      }
      else{
        this.toastr.error("Seleccione una tienda", "Error");
      }
    }
    else {
      this.toastr.error("La fecha de fin no puede ser menor a inicio")
    }
  }

  selectStore(store: string) {
    this.selectedStore = store;
  }
}
