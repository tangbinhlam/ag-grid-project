import { AfterViewInit, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ColDef, GridOptions, GridReadyEvent } from 'ag-grid-community';
import { debounceTime, Observable, tap } from 'rxjs';
import { IOlympicWinners } from '../models/OlypicWinners.model';
import { OlympicWinnersService } from '../olympic-winners.service';

@Component({
  selector: 'app-ag-grids-selection',
  templateUrl: './ag-grids-selection.component.html',
  styleUrls: ['./ag-grids-selection.component.scss']
})
export class AgGridsSelectionComponent implements AfterViewInit {

  columnsDefs: ColDef[] = [
    {
      field: 'athlete',
      showDisabledCheckboxes: true,
      checkboxSelection: true,
      headerCheckboxSelection: true,
      filter: 'agTextColumnFilter',
    },
    {
      field: 'age',
      maxWidth: 120,
      filter: 'agNumberColumnFilter'
    },
    { field: 'country', filter: true},
    { field: 'year' , hide: true},
    {
      field: 'date',
      filter: 'agDateColumnFilter'
    },
    { field: 'sport' , hide: true},
    { field: 'gold' , hide: true},
    { field: 'silver' , hide: true},
    { field: 'bronze' , hide: true},
    { field: 'total' , hide: true},
  ]

  filterInput = new FormControl('');

  gridOptions: GridOptions = {
    columnDefs: this.columnsDefs,
    rowSelection: 'multiple',
    rowMultiSelectWithClick: true,
    pagination: true,
    paginationPageSize: 10,

    defaultColDef: {
      flex: 1,
      checkboxSelection: false,
      floatingFilter: true,
    },
    // isRowSelectable: (param) => {
    //   return param.data.year == '2012';
    // },
    onFirstDataRendered: (params) => {
      params.api.forEachNode( (node) => {
        node.setSelected(!!node.data && node.data.age===27)
      })
    },
  }

  data$!: Observable<IOlympicWinners[]>


  constructor(private service: OlympicWinnersService){}
  ngAfterViewInit(): void {
    this.filterInput.valueChanges.pipe(
      debounceTime(500),
      tap( value => this.gridOptions.api?.setQuickFilter(value as string))
    ).subscribe();
  }

  onGridReady($event: GridReadyEvent<any>) {
     this.data$ = this.service.getData$();
  }

  selectAllAmerican() {
    this.gridOptions.api?.forEachNode( node => {
      node.setSelected(node.data.country === 'United States');
      node.setDataValue('age', 50);
    })
  }
}
