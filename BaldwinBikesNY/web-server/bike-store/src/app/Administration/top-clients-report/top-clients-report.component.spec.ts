import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopClientsReportComponent } from './top-clients-report.component';

describe('TopClientsReportComponent', () => {
  let component: TopClientsReportComponent;
  let fixture: ComponentFixture<TopClientsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopClientsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopClientsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
