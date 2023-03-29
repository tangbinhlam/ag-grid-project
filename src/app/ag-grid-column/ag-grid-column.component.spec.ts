import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridColumnComponent } from './ag-grid-column.component';

describe('AgGridColumnComponent', () => {
  let component: AgGridColumnComponent;
  let fixture: ComponentFixture<AgGridColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgGridColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
