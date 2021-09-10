import {SelectionModel} from '@angular/cdk/collections';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, MatPaginator} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';


/**
 * @title Table with selection
 */
@Component({
  selector: 'table-selection-example',
  styleUrls: ['table-selection-example.css'],
  templateUrl: 'table-selection-example.html',
})
export class TableSelectionExample implements AfterViewInit {
  //the columns that will be rendered in the table
  displayedColumns: string[] = ['select', 'transactionID','deviceID','orderDate','customerID', 'recommendation',  'cardNum', 'customerIP', 'customerName'];
  dataSource = new MatTableDataSource<db>(COLUMN_DATA);
  selection = new SelectionModel<db>(true, []);

  

  /** Whether the number of selected columns matches the total number of rows. */
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

 @ViewChild(MatSort)sort: MatSort;
 @ViewChild(MatPaginator)paginator: MatPaginator;


 ngAfterViewInit(){
   this.dataSource.sort = this.sort;
   this.dataSource.paginator = this.paginator;
 }

 

  getColor(recommendation){
    switch(recommendation){
      case'deny':
      return 'red';
      case'accept':
      return'green';
      case'challenge':
      return 'yellow';
      case'noScore':
      return 'white';
    }
  }
}

export interface db {
  transactionID: string;
  deviceID: number;
  orderDate: number;
  customerIP: number;
  cardNum: number;
  recommendation: string;
  customerID: number;
  customerName: string;
}



const COLUMN_DATA: db[] = [
  {transactionID: '12436567', deviceID: 5654, orderDate: 1.0079, recommendation: 'deny', customerID: 45628756,customerIP: 56747, cardNum: 4745, customerName: 'Kate'},
  {transactionID: '654367', deviceID: 6536, orderDate: 53673, recommendation: 'challenge', customerID: 467,customerIP: 755675, cardNum: 4567898, customerName: 'Tom'},
  {transactionID: '783275', deviceID: 56473, orderDate: 43768243, recommendation: 'deny', customerID: 7153709,customerIP: 78854, cardNum: 435854, customerName: 'Shane'},
  {transactionID: '235378759', deviceID: 6536, orderDate: 5675373, recommendation: 'accept', customerID: 572687,customerIP: 31576, cardNum: 65427, customerName: 'Olga'},
  {transactionID: '944q562', deviceID: 5908796, orderDate: 54754376, recommendation: 'deny', customerID: 79431785 ,customerIP: 7825365, cardNum: 56856, customerName: 'Ryan'},
  {transactionID: '63473', deviceID: 5475365, orderDate: 56563, recommendation: 'noScore', customerID: 27585,customerIP: 77543, cardNum: 98765, customerName: 'Derrick'},{transactionID: '54787859', deviceID: 95724624, orderDate: 1.0079, recommendation: 'challenge', customerID: 43787835,customerIP: 7848, cardNum: 37547478, customerName: 'michelle'},
];


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */