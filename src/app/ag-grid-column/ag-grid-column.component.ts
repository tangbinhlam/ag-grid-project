import {Component, OnInit} from '@angular/core';
import {ColDef, GridOptions} from "ag-grid-community";

@Component({
  selector: 'app-ag-grid-column',
  templateUrl: './ag-grid-column.component.html',
  styleUrls: ['./ag-grid-column.component.scss']
})
export class AgGridColumnComponent implements OnInit{
  gridOptions: GridOptions = {
    pagination: true,
    paginationPageSize: 10,
    columnDefs: this.getColDefinition(),
    rowData: this.getData(),
    defaultColDef: {
      sortable: true,
      width: 200,
      editable: true,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      resizable: true
    },
    columnTypes: {
      nonEdit: { editable: false},
      myType: { filter: 'agNumberColumnFilter', editable: false},
      abc: {
        headerClass: 'text-center',
        cellStyle: { textAlign: 'center' },
        headerTooltip: 'my data'
      }
    }
  }

  savedState!: any;
  getColDefinition() {
    return [
      {
        headerName: 'Group A',
        groupId: 'groupA',
        children: [
          { field: 'athlete', cellClass: 'suppress-movable-col'},
          { field: 'age', lockVisible: true },
          { field: 'country', columnGroupShow: 'open' },
        ],
      },
      {
        headerName: 'Group B',
        children: [
          { field: 'sport' },
          { field: 'year' , filter: 'agDateColumnFilter'},
          { field: 'date', columnGroupShow: 'open' },
        ],
      },
      {
        headerName: 'Group C',
        groupId: 'groupC',
        children: [
          { field: 'total' },
          { field: 'gold', columnGroupShow: 'open' },
          { field: 'silver', columnGroupShow: 'open' },
          { field: 'bronze', columnGroupShow: 'open' },
        ],
      },
    ]
  }
  columnDefs = [
    { field: 'name'},
    { field: 'medals.gold', headerName: 'Gold'}
  ];

  onSaveState(){
    this.savedState = this.gridOptions.columnApi!.getColumnState();
  }
  onRestoreState() {
    this.gridOptions.columnApi?.applyColumnState({
      state: [
        { colId: 'athlete', sort: 'asc' },
        { colId: 'sport', sort: 'desc'},
        { colId: 'age', hide: false}
      ],
      applyOrder: true,
    });
  }
  getData() {
    const rowData = [
      {
        "athlete": "Michael Phelps",
        "age": 23,
        "country": "United States",
        "year": 2008,
        "date": "24/08/2008",
        "sport": "Swimming",
        "gold": 8,
        "silver": 0,
        "bronze": 0,
        "total": 8
      },
      {
        "athlete": "Michael Phelps",
        "age": 19,
        "country": "United States",
        "year": 2004,
        "date": "29/08/2004",
        "sport": "Swimming",
        "gold": 6,
        "silver": 0,
        "bronze": 2,
        "total": 8
      },
      {
        "athlete": "Michael Phelps",
        "age": 27,
        "country": "United States",
        "year": 2012,
        "date": "12/08/2012",
        "sport": "Swimming",
        "gold": 4,
        "silver": 2,
        "bronze": 0,
        "total": 6
      },
      {
        "athlete": "Natalie Coughlin",
        "age": 25,
        "country": "United States",
        "year": 2008,
        "date": "24/08/2008",
        "sport": "Swimming",
        "gold": 1,
        "silver": 2,
        "bronze": 3,
        "total": 6
      },
      {
        "athlete": "Aleksey Nemov",
        "age": 24,
        "country": "Russia",
        "year": 2000,
        "date": "01/10/2000",
        "sport": "Gymnastics",
        "gold": 2,
        "silver": 1,
        "bronze": 3,
        "total": 6
      },
      {
        "athlete": "Alicia Coutts",
        "age": 24,
        "country": "Australia",
        "year": 2012,
        "date": "12/08/2012",
        "sport": "Swimming",
        "gold": 1,
        "silver": 3,
        "bronze": 1,
        "total": 5
      },
      {
        "athlete": "Missy Franklin",
        "age": 17,
        "country": "United States",
        "year": 2012,
        "date": "12/08/2012",
        "sport": "Swimming",
        "gold": 4,
        "silver": 0,
        "bronze": 1,
        "total": 5
      },
      {
        "athlete": "Ryan Lochte",
        "age": 27,
        "country": "United States",
        "year": 2012,
        "date": "12/08/2012",
        "sport": "Swimming",
        "gold": 2,
        "silver": 2,
        "bronze": 1,
        "total": 5
      },
      {
        "athlete": "Allison Schmitt",
        "age": 22,
        "country": "United States",
        "year": 2012,
        "date": "12/08/2012",
        "sport": "Swimming",
        "gold": 3,
        "silver": 1,
        "bronze": 1,
        "total": 5
      },
      {
        "athlete": "Natalie Coughlin",
        "age": 21,
        "country": "United States",
        "year": 2004,
        "date": "29/08/2004",
        "sport": "Swimming",
        "gold": 2,
        "silver": 2,
        "bronze": 1,
        "total": 5
      },
      {
        "athlete": "Ian Thorpe",
        "age": 17,
        "country": "Australia",
        "year": 2000,
        "date": "01/10/2000",
        "sport": "Swimming",
        "gold": 3,
        "silver": 2,
        "bronze": 0,
        "total": 5
      },
      {
        "athlete": "Dara Torres",
        "age": 33,
        "country": "United States",
        "year": 2000,
        "date": "01/10/2000",
        "sport": "Swimming",
        "gold": 2,
        "silver": 0,
        "bronze": 3,
        "total": 5
      },
      {
        "athlete": "Cindy Klassen",
        "age": 26,
        "country": "Canada",
        "year": 2006,
        "date": "26/02/2006",
        "sport": "Speed Skating",
        "gold": 1,
        "silver": 2,
        "bronze": 2,
        "total": 5
      },
      {
        "athlete": "Nastia Liukin",
        "age": 18,
        "country": "United States",
        "year": 2008,
        "date": "24/08/2008",
        "sport": "Gymnastics",
        "gold": 1,
        "silver": 3,
        "bronze": 1,
        "total": 5
      },
      {
        "athlete": "Marit Bjørgen",
        "age": 29,
        "country": "Norway",
        "year": 2010,
        "date": "28/02/2010",
        "sport": "Cross Country Skiing",
        "gold": 3,
        "silver": 1,
        "bronze": 1,
        "total": 5
      },
      {
        "athlete": "Sun Yang",
        "age": 20,
        "country": "China",
        "year": 2012,
        "date": "12/08/2012",
        "sport": "Swimming",
        "gold": 2,
        "silver": 1,
        "bronze": 1,
        "total": 4
      },
      {
        "athlete": "Kirsty Coventry",
        "age": 24,
        "country": "Zimbabwe",
        "year": 2008,
        "date": "24/08/2008",
        "sport": "Swimming",
        "gold": 1,
        "silver": 3,
        "bronze": 0,
        "total": 4
      },
      {
        "athlete": "Libby Lenton-Trickett",
        "age": 23,
        "country": "Australia",
        "year": 2008,
        "date": "24/08/2008",
        "sport": "Swimming",
        "gold": 2,
        "silver": 1,
        "bronze": 1,
        "total": 4
      },
      {
        "athlete": "Ryan Lochte",
        "age": 24,
        "country": "United States",
        "year": 2008,
        "date": "24/08/2008",
        "sport": "Swimming",
        "gold": 2,
        "silver": 0,
        "bronze": 2,
        "total": 4
      },
      {
        "athlete": "Inge de Bruijn",
        "age": 30,
        "country": "Netherlands",
        "year": 2004,
        "date": "29/08/2004",
        "sport": "Swimming",
        "gold": 1,
        "silver": 1,
        "bronze": 2,
        "total": 4
      },
      {
        "athlete": "Petria Thomas",
        "age": 28,
        "country": "Australia",
        "year": 2004,
        "date": "29/08/2004",
        "sport": "Swimming",
        "gold": 3,
        "silver": 1,
        "bronze": 0,
        "total": 4
      },
      {
        "athlete": "Ian Thorpe",
        "age": 21,
        "country": "Australia",
        "year": 2004,
        "date": "29/08/2004",
        "sport": "Swimming",
        "gold": 2,
        "silver": 1,
        "bronze": 1,
        "total": 4
      },
      {
        "athlete": "Inge de Bruijn",
        "age": 27,
        "country": "Netherlands",
        "year": 2000,
        "date": "01/10/2000",
        "sport": "Swimming",
        "gold": 3,
        "silver": 1,
        "bronze": 0,
        "total": 4
      },
      {
        "athlete": "Gary Hall Jr.",
        "age": 25,
        "country": "United States",
        "year": 2000,
        "date": "01/10/2000",
        "sport": "Swimming",
        "gold": 2,
        "silver": 1,
        "bronze": 1,
        "total": 4
      },
      {
        "athlete": "Michael Klim",
        "age": 23,
        "country": "Australia",
        "year": 2000,
        "date": "01/10/2000",
        "sport": "Swimming",
        "gold": 2,
        "silver": 2,
        "bronze": 0,
        "total": 4
      },
      {
        "athlete": "Susie O'Neill",
        "age": 27,
        "country": "Australia",
        "year": 2000,
        "date": "01/10/2000",
        "sport": "Swimming",
        "gold": 1,
        "silver": 3,
        "bronze": 0,
        "total": 4
      },
      {
        "athlete": "Jenny Thompson",
        "age": 27,
        "country": "United States",
        "year": 2000,
        "date": "01/10/2000",
        "sport": "Swimming",
        "gold": 3,
        "silver": 0,
        "bronze": 1,
        "total": 4
      },
      {
        "athlete": "Pieter van den Hoogenband",
        "age": 22,
        "country": "Netherlands",
        "year": 2000,
        "date": "01/10/2000",
        "sport": "Swimming",
        "gold": 2,
        "silver": 0,
        "bronze": 2,
        "total": 4
      },
      {
        "athlete": "An Hyeon-Su",
        "age": 20,
        "country": "South Korea",
        "year": 2006,
        "date": "26/02/2006",
        "sport": "Short-Track Speed Skating",
        "gold": 3,
        "silver": 0,
        "bronze": 1,
        "total": 4
      },
      {
        "athlete": "Aliya Mustafina",
        "age": 17,
        "country": "Russia",
        "year": 2012,
        "date": "12/08/2012",
        "sport": "Gymnastics",
        "gold": 1,
        "silver": 1,
        "bronze": 2,
        "total": 4
      },
      {
        "athlete": "Shawn Johnson",
        "age": 16,
        "country": "United States",
        "year": 2008,
        "date": "24/08/2008",
        "sport": "Gymnastics",
        "gold": 1,
        "silver": 3,
        "bronze": 0,
        "total": 4
      },
      {
        "athlete": "Dmitry Sautin",
        "age": 26,
        "country": "Russia",
        "year": 2000,
        "date": "01/10/2000",
        "sport": "Diving",
        "gold": 1,
        "silver": 1,
        "bronze": 2,
        "total": 4
      },
      {
        "athlete": "Leontien Zijlaard-van Moorsel",
        "age": 30,
        "country": "Netherlands",
        "year": 2000,
        "date": "01/10/2000",
        "sport": "Cycling",
        "gold": 3,
        "silver": 1,
        "bronze": 0,
        "total": 4
      },
      {
        "athlete": "Petter Northug Jr.",
        "age": 24,
        "country": "Norway",
        "year": 2010,
        "date": "28/02/2010",
        "sport": "Cross Country Skiing",
        "gold": 2,
        "silver": 1,
        "bronze": 1,
        "total": 4
      },
      {
        "athlete": "Ole Einar Bjørndalen",
        "age": 28,
        "country": "Norway",
        "year": 2002,
        "date": "24/02/2002",
        "sport": "Biathlon",
        "gold": 4,
        "silver": 0,
        "bronze": 0,
        "total": 4
      },
      {
        "athlete": "Janica Kostelic",
        "age": 20,
        "country": "Croatia",
        "year": 2002,
        "date": "24/02/2002",
        "sport": "Alpine Skiing",
        "gold": 3,
        "silver": 1,
        "bronze": 0,
        "total": 4
      },
      {
        "athlete": "Nathan Adrian",
        "age": 23,
        "country": "United States",
        "year": 2012,
        "date": "12/08/2012",
        "sport": "Swimming",
        "gold": 2,
        "silver": 1,
        "bronze": 0,
        "total": 3
      },
      ];
    return rowData;
  }

  ngOnInit(): void {
  }
}
