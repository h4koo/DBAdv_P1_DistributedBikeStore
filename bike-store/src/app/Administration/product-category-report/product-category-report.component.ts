import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { ProductCategoryReportLine } from 'src/app/Models/product-category-report-line.model';
import { ReportsService } from 'src/app/Services/reports.service';

@Component({
  selector: 'app-product-category-report',
  templateUrl: './product-category-report.component.html',
  styleUrls: ['./product-category-report.component.scss']
})
export class ProductCategoryReportComponent implements OnInit {

  refresh: Subject<any> = new Subject();

  selectedCategory: string = "Seleccione una categoría";

  selectedMonth: string = "Seleccione un mes";

  months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];

  categories: string[] = [];

  report : ProductCategoryReportLine[] = [];

  constructor(private reportsService: ReportsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.categories = this.reportsService.getCategories();
  }

  getReport() {
    if (this.selectedCategory != "Seleccione una categoría") {
      if (this.selectedMonth != "Seleccione un mes") {
        this.report = this.reportsService.getCategoryReport(this.selectedMonth, this.selectedCategory, "Rowlette");
      }
      else {
        this.toastr.error("Seleccione un mes", "Error");
      }
    }
    else {
      this.toastr.error("Seleccione una categoría", "Error");
    }
  }

  selectMonth(value: string) {
    this.selectedMonth = value;
  }

  selectCategory(value: string) {
    this.selectedCategory = value;
  }
}
