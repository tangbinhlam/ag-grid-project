import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AgGridModule} from "ag-grid-angular";
import {HttpClientModule} from "@angular/common/http";
import { AgGridColumnComponent } from './ag-grid-column/ag-grid-column.component';
import { AgGridRowComponent } from './ag-grid-row/ag-grid-row.component';
import { AgGridRowTransactionComponent } from './ag-grid-row-transaction/ag-grid-row-transaction.component';
import { AgRowTransactionGroupComponent } from './ag-row-transaction-group/ag-row-transaction-group.component';
import { AgGridsSelectionComponent } from './ag-grids-selection/ag-grids-selection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridChartComponent } from './ag-grid-chart/ag-grid-chart.component';
import { AgChartsAngularModule } from 'ag-charts-angular';

@NgModule({
  declarations: [
    AppComponent,
    AgGridColumnComponent,
    AgGridRowComponent,
    AgGridRowTransactionComponent,
    AgRowTransactionGroupComponent,
    AgGridsSelectionComponent,
    AgGridChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    AgChartsAngularModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
