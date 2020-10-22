import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ReportsService } from 'src/app/Services/reports.service';

@Component({
  selector: 'app-income-report',
  templateUrl: './income-report.component.html',
  styleUrls: ['./income-report.component.scss']
})
export class IncomeReportComponent implements OnInit {
  
  selectedStore: string = "Seleccione una tienda";

  stores: string[] = [];

  constructor(private toastr: ToastrService, private reportService: ReportsService) { }

  ngOnInit(): void {
    this.stores = this.reportService.getStores();
  }

  selectStore(store: string) {
    this.selectedStore = store;
  }

  getReport(){
    
  }

}
