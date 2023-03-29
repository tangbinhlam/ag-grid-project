import {Component, ViewChild} from '@angular/core';
import {ColDef, GridOptions, GridReadyEvent} from "ag-grid-community";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AgGridAngular} from "ag-grid-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ag-gird-app';
  columnDefs: ColDef[] = [
    { field: 'make'},
    { field: 'model'},
    { field: 'price'}
  ]

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  }

  rowData$!: Observable<any[]>

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  constructor(public http: HttpClient) {
  }

  onGridReady($event: GridReadyEvent) {
    this.rowData$ = this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
  }

  clearSelection() {
    this.agGrid.api.deselectAll();
  }
}
