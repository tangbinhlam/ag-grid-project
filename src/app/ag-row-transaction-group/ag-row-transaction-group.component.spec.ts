import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgRowTransactionGroupComponent } from './ag-row-transaction-group.component';

describe('AgRowTransactionGroupComponent', () => {
  let component: AgRowTransactionGroupComponent;
  let fixture: ComponentFixture<AgRowTransactionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgRowTransactionGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgRowTransactionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
