import { Component, OnInit } from '@angular/core';
import { compareAsc } from 'date-fns';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { OrderReportLine } from 'src/app/Models/order-report-line.model';
import { PurhaseReportLine } from 'src/app/Models/purhase-report-line.model';
import { ReportsService } from 'src/app/Services/reports.service';

@Component({
  selector: 'app-purchases-report',
  templateUrl: './purchases-report.component.html',
  styleUrls: ['./purchases-report.component.scss']
})
export class PurchasesReportComponent implements OnInit {

  refresh: Subject<any> = new Subject();

  startDate : Date = new Date();

  endDate : Date = new Date();

  report : PurhaseReportLine[] = [];

  constructor(private toastr: ToastrService, private reportService : ReportsService) { }

  ngOnInit(): void {
  }

  getReport(){
    if (compareAsc(this.startDate, this.endDate) == -1 || compareAsc(this.startDate, this.endDate) == 0) {
      this.report = this.reportService.getPurchasesReport(this.startDate, this.endDate, "Rowlette");
    }
    else{
      this.toastr.error("La fecha de fin no puede ser menor a inicio")
    }
  }

}
