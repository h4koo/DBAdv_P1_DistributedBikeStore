import { Component, OnInit } from '@angular/core';
import { compareAsc } from 'date-fns';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { OrderReportLine } from 'src/app/Models/order-report-line.model';
import { ReportsService } from 'src/app/Services/reports.service';

@Component({
  selector: 'app-orders-report',
  templateUrl: './orders-report.component.html',
  styleUrls: ['./orders-report.component.scss']
})
export class OrdersReportComponent implements OnInit {

  refresh: Subject<any> = new Subject();

  startDate : Date = new Date();

  endDate : Date = new Date();

  report : OrderReportLine[] = [];

  constructor(private toastr: ToastrService, private reportService : ReportsService) { }

  ngOnInit(): void {
  }

  getReport(){
    if (compareAsc(this.startDate, this.endDate) == -1 || compareAsc(this.startDate, this.endDate) == 0) {
      this.report = this.reportService.getOrdersReport(this.startDate, this.endDate, "Rowlette");
    }
    else{
      this.toastr.error("La fecha de fin no puede ser menor a inicio")
    }
  }
}
