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
import { OnlyNumbersDirective } from './Miscellaneoues/only-numbers.directive';
import { FormsModule } from '@angular/forms';
import { CommonModule, HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import localeCR from '@angular/common/locales/es';
registerLocaleData(localeCR);
import { FlatpickrModule } from 'angularx-flatpickr';
import { Spanish } from 'flatpickr/dist/l10n/es';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { IncomeReportComponent } from './Administration/income-report/income-report.component';

@NgModule({
  declarations: [
    AppComponent,
    SalePointComponent,
    SalesReportComponent,
    OrdersReportComponent,
    PurchasesReportComponent,
    ProductCategoryReportComponent,
    ReportsComponent,
    NavigationComponent,
    OnlyNumbersDirective,
    IncomeReportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ToastrModule.forRoot(), // ToastrModule added
    FlatpickrModule.forRoot({ locale: Spanish }),
    CommonModule,
    HttpClientModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
