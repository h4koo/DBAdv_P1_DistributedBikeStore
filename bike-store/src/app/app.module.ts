import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalePointComponent } from './Sales/sale-point/sale-point.component';
import { SalesReportComponent } from './Administration/sales-report/sales-report.component';
import { OrdersReportComponent } from './Administration/orders-report/orders-report.component';
import { PurchasesReportComponent } from './Administration/purchases-report/purchases-report.component';
import { ProductCategoryReportComponent } from './Administration/product-category-report/product-category-report.component';
import { ReportsComponent } from './Administration/reports/reports.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './Miscellaneoues/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    SalePointComponent,
    SalesReportComponent,
    OrdersReportComponent,
    PurchasesReportComponent,
    ProductCategoryReportComponent,
    ReportsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
