import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersReportComponent } from './orders-report.component';

describe('OrdersReportComponent', () => {
  let component: OrdersReportComponent;
  let fixture: ComponentFixture<OrdersReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
