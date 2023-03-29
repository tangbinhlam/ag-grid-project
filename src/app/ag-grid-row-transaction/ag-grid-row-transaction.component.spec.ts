import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridRowTransactionComponent } from './ag-grid-row-transaction.component';

describe('AgGridRowTransactionComponent', () => {
  let component: AgGridRowTransactionComponent;
  let fixture: ComponentFixture<AgGridRowTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridRowTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgGridRowTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
