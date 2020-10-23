import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryReportComponent } from './product-category-report.component';

describe('ProductCategoryReportComponent', () => {
  let component: ProductCategoryReportComponent;
  let fixture: ComponentFixture<ProductCategoryReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCategoryReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
