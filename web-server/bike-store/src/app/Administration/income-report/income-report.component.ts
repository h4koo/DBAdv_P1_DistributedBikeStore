import { Component, OnInit } from '@angular/core';
import { compareAsc } from 'date-fns';
import { ToastrService } from 'ngx-toastr';
import { report } from 'process';
import { Subject } from 'rxjs';
import { Client } from 'src/app/Models/client.model';
import { IncomeReportLine } from 'src/app/Models/income-report-line.model';
import { Report } from 'src/app/Models/report.model';
import { ReportsService } from 'src/app/Services/reports.service';

@Component({
  selector: 'app-income-report',
  templateUrl: './income-report.component.html',
  styleUrls: ['./income-report.component.scss']
})
export class IncomeReportComponent implements OnInit {

  refresh: Subject<any> = new Subject();

  startDate: Date = new Date();

  endDate: Date = new Date();

  selectedStore: string = "Seleccione una tienda";

  stores: string[] = [];

  report: IncomeReportLine[] = []

  constructor(private toastr: ToastrService, private reportService: ReportsService) { }

  ngOnInit(): void {
    this.stores = this.reportService.getStores();
  }

  selectStore(store: string) {
    this.selectedStore = store;
  }

  getReport() {
    if (compareAsc(this.startDate, this.endDate) == -1 || compareAsc(this.startDate, this.endDate) == 0) {
      this.reportService.getIncomeReport(this.startDate,this.endDate, 1).then(res => this.report = res)
    }
    else {
      this.toastr.error("La fecha de fin no puede ser menor a inicio")
    }
  }
}
