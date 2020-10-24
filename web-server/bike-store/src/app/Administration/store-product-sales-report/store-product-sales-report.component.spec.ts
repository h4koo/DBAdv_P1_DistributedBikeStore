import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreProductSalesReportComponent } from './store-product-sales-report.component';

describe('StoreProductSalesReportComponent', () => {
  let component: StoreProductSalesReportComponent;
  let fixture: ComponentFixture<StoreProductSalesReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreProductSalesReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreProductSalesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
