import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunctionsRoutingModule } from './functions-routing.module';
import { FunctionsComponent } from './functions.component';
import { ListComponent } from './list/list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    FunctionsComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FunctionsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class FunctionsModule { }
