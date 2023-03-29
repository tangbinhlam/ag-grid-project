import { Component } from '@angular/core';
import { ColDef, GridOptions, IRowNode } from 'ag-grid-community';

interface iMyData {
  id: number;
  make: string;
  model: string;
  price: number;
  zombies: string;
  style: string;
  clothes: string;
}

@Component({
  selector: 'app-ag-grid-row-transaction',
  templateUrl: './ag-grid-row-transaction.component.html',
  styleUrls: ['./ag-grid-row-transaction.component.scss']
})
export class AgGridRowTransactionComponent {

  columnDefs: ColDef[] = [
    { field: 'id', hide: true},
    { field: 'make', headerCheckboxSelection: true},
    { field: 'model' },
    { field: 'price' },
    { field: 'zombies' },
    { field: 'style' },
    { field: 'clothes'}
  ];
  newCount = 1;
  gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    defaultColDef: {
      flex: 1,
      checkboxSelection: false,
    },
    rowData: this.innitData(),
    rowSelection: 'multiple',
    getRowId: (param) => param.data.id,
  }

  innitData() {
    const data = [];
    for(let i = 0; i < 5; i++) {
      data.push(this.createNewRowData())
    }
    return data;
  }

  createNewRowData(): iMyData {
    const newData: iMyData = {
      id: this.newCount,
      make: 'Toyota ' + this.newCount,
      model: 'Celica ' + this.newCount,
      price: 35000 + this.newCount * 17,
      zombies: 'Headless',
      style: 'Little',
      clothes: 'Airbag',
    };
    this.newCount++;
  return newData;
  }
  onAddItems() {
    const newData: iMyData[] = [
      this.createNewRowData(),
       this.createNewRowData(),
       this.createNewRowData()
      ];
    this.gridOptions.api?.applyTransaction({
      add: newData,
      addIndex: 2,
    });
  }

  onUpdateItems() {
    const itemToUpdate: any[]= [];
    this.gridOptions.api?.forEachNodeAfterFilterAndSort( (rowNode: IRowNode, idex) => {
      if(idex > 2) return;
      const data = rowNode.data;
      data.price = Math.floor(Math.random()*(10000-500) + 500);
      itemToUpdate.push(data);
    });

    this.gridOptions.api?.applyTransaction({
      update: itemToUpdate,
    });
  }

  removeSelected() {
    const selectedNote =
    this.gridOptions.api?.getSelectedNodes().map( rowNote => rowNote.data);
    this.gridOptions.api?.applyTransaction(
      {
        remove: [{ id: 3}]
      }
    )


  }
}
