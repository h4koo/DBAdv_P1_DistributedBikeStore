import { Component, OnInit } from '@angular/core';
import { compareAsc } from 'date-fns';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { TopClientsReportLine } from 'src/app/Models/top-clients-report-line.model';
import { ReportsService } from 'src/app/Services/reports.service';

@Component({
  selector: 'app-top-clients-report',
  templateUrl: './top-clients-report.component.html',
  styleUrls: ['./top-clients-report.component.scss']
})
export class TopClientsReportComponent implements OnInit {
  refresh: Subject<any> = new Subject();

  startDate: Date = new Date();

  endDate: Date = new Date();

  report: TopClientsReportLine[] = [];

  constructor(private toastr: ToastrService, private reportService: ReportsService) { }

  ngOnInit(): void {
  }

  getReport() {
    if (compareAsc(this.startDate, this.endDate) == -1 || compareAsc(this.startDate, this.endDate) == 0) {
        this.reportService.getTopClientsReport(this.startDate, this.endDate).then(res => this.report = res);
    }
    else {
      this.toastr.error("La fecha de fin no puede ser menor a inicio")
    }
  }
}
