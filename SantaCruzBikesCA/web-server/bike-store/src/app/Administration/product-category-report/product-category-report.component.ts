import { Component, OnInit } from '@angular/core';
import { compareAsc } from 'date-fns';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Category } from 'src/app/Models/category.model';
import { ProductCategoryReportLine } from 'src/app/Models/product-category-report-line.model';
import { ReportsService } from 'src/app/Services/reports.service';

@Component({
  selector: 'app-product-category-report',
  templateUrl: './product-category-report.component.html',
  styleUrls: ['./product-category-report.component.scss']
})
export class ProductCategoryReportComponent implements OnInit {

  refresh: Subject<any> = new Subject();

  startDate : Date = new Date();

  endDate : Date = new Date();


  selectedCategory: Category = {
    nombre: "Seleccione una categoría",
    report_id: 0
  }

  categories: Category[] = [];

  report: ProductCategoryReportLine[] = [];

  constructor(private reportsService: ReportsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.reportsService.getCategories().then(res => this.categories = res);
  }

  getReport() {
    if (this.selectedCategory.nombre != "Seleccione una categoría") {
      if (compareAsc(this.startDate, this.endDate) == -1 || compareAsc(this.startDate, this.endDate) == 0) {
        this.reportsService.getCategoryReport(this.startDate, this.endDate, this.selectedCategory.report_id)
        .then(res => this.report = res);
      }
      else{
        this.toastr.error("La fecha de fin no puede ser menor a inicio")
      }     
    }
    else {
      this.toastr.error("Seleccione una categoría", "Error");
    }
  }

  selectCategory(value: Category) {
    this.selectedCategory = value;
  }
}
