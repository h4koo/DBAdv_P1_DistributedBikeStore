import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './Administration/reports/reports.component';
import { SalePointComponent } from './Sales/sale-point/sale-point.component';


const routes: Routes = [
  { path: '', redirectTo: 'ventas', pathMatch: 'full' },
  { path: 'admin', component: ReportsComponent },
  { path: 'ventas', component: SalePointComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
