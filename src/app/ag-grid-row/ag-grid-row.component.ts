import { Component } from '@angular/core';
import {ColDef, GridOptions} from "ag-grid-community";

interface ICar {
  id: number;
  make: string;
  model: string;
  price: number;
}
@Component({
  selector: 'app-ag-grid-row',
  templateUrl: './ag-grid-row.component.html',
  styleUrls: ['./ag-grid-row.component.scss']
})
export class AgGridRowComponent {
  columnDefs: ColDef<ICar>[] = [
    { field: 'id'},
    { field: 'make'},
    { field: 'model'},
    { field: 'price'},
  ];

  id = 1;
  immutableStore: any[] = [];
  createItem() {
    return {
      id: this.id++,
      make: ['Toyota','Porsche','Porsche'][Math.floor(Math.random()*3)],
      model: ['Celica','Boxster','DBX','AXC','Tuson','Federy'][Math.floor(Math.random()*6)],
      price: Math.floor(Math.random()*5000 + (5000-400)),
    }
  }

  defaultColDef: ColDef = {
    sortable: true,
    editable: true,
  }

  getInitData() {
    const data=[];
    for(let i = 0; i< 5; i++) {
      data.push(this.createItem())
    }
    return data;
  }
  gridOptions: GridOptions = {
    pagination: true,
    paginationPageSize: 10,
    columnDefs: this.columnDefs,
    defaultColDef: this.defaultColDef,
    rowSelection: 'multiple',
    animateRows: true,
    autoGroupColumnDef: {
      headerName: 'Make',
      cellRenderer: 'agGroupCellRenderer',
      field: 'make'
    },
    statusBar: {
      statusPanels: [{ statusPanel: 'agAggregationComponent', align: 'right' }],
    },
    groupDefaultExpanded: 1,
    enableRangeSelection: true,
    onGridReady: (param) => {
      this.immutableStore = [];
      this.immutableStore = this.getInitData();
      param.api.setRowData(this.immutableStore);
    },
    getRowId: (param) => {
      return param.data.id;
    }
  }

  add5() {
    let data = this.immutableStore.slice();
    for(let i = 0; i< 5; i++) {
      data.push(this.createItem());
    }
    this.immutableStore = data;
    this.gridOptions.api?.setRowData(this.immutableStore);
  }

  reserve() {
    this.immutableStore = this.immutableStore.reverse();
    this.gridOptions.api?.setRowData(this.immutableStore);
  }

  onRemoveSelected() {
    let selectedItems = this.gridOptions.api?.getSelectedRows().map( item => item.id);
    // @ts-ignore
    let data = this.immutableStore.filter( item => selectedItems.indexOf(item.id) < 0)
    this.immutableStore = data;
    this.gridOptions.api?.setRowData(this.immutableStore);
    console.log(selectedItems);
  }

  updatePrice() {
    let selectedItems = this.gridOptions.api?.getSelectedRows().map( item => item.id);
    // @ts-ignore
    let data = this.immutableStore.map(item => selectedItems.indexOf(item.id) < 0?item: {...item, price: item.price + 50});
    this.immutableStore = data;
    this.gridOptions.api?.setRowData(this.immutableStore)
  }

  onRowGroup() {
    this.gridOptions.columnApi?.applyColumnState({
      state: [
        {
          colId: 'make',
          rowGroup: true,
          hide: true,
        },
        {
          colId: 'id',
          hide: true,
        }
      ]
    })
  }
}
