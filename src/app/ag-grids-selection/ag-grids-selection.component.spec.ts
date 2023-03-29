import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridsSelectionComponent } from './ag-grids-selection.component';

describe('AgGridsSelectionComponent', () => {
  let component: AgGridsSelectionComponent;
  let fixture: ComponentFixture<AgGridsSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridsSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgGridsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
