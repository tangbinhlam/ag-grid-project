import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridChartComponent } from './ag-grid-chart.component';

describe('AgGridChartComponent', () => {
  let component: AgGridChartComponent;
  let fixture: ComponentFixture<AgGridChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgGridChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
