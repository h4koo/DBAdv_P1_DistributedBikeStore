import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Client } from 'src/app/Models/client.model';
import { Report } from 'src/app/Models/report.model';
import { ReportsService } from 'src/app/Services/reports.service';

@Component({
  selector: 'app-income-report',
  templateUrl: './income-report.component.html',
  styleUrls: ['./income-report.component.scss']
})
export class IncomeReportComponent implements OnInit {
  
  selectedStore: string = "Seleccione una tienda";

  stores: string[] = [];

  clientes : Client[] = [];

  keyword = 'name';
   
  selectEvent(item) {
    // do something with selected item
    console.log(item);
  }
 

  constructor(private toastr: ToastrService, private reportService: ReportsService) { }

  ngOnInit(): void {
    this.stores = this.reportService.getStores();
    this.reportService.getReportList().then(res => this.clientes = res);
  }

  selectStore(store: string) {
    this.selectedStore = store;
  }

  getReport(){
    
  }

}
