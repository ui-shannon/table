import {SelectionModel} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  transactionID: string;
  deviceID: number;
  orderDate: number;
  customerIP: number;
  cardNum: number;
  recommendation: string;
  customerID: number;
  customerName: string;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {transactionID: '12436567', deviceID: 5654, orderDate: 1.0079, recommendation: 'deny', customerID: 45628756,customerIP: 56747, cardNum: 4745, customerName: 'Kate'},
  {transactionID: '654367', deviceID: 6536, orderDate: 53673, recommendation: 'challenge', customerID: 467,customerIP: 755675, cardNum: 4567898, customerName: 'Tom'},
  {transactionID: '783275', deviceID: 56473, orderDate: 43768243, recommendation: 'deny', customerID: 7153709,customerIP: 78854, cardNum: 435854, customerName: 'Shane'},
  {transactionID: '235378759', deviceID: 6536, orderDate: 5675373, recommendation: 'accept', customerID: 572687,customerIP: 31576, cardNum: 65427, customerName: 'Olga'},
  {transactionID: '944q562', deviceID: 5908796, orderDate: 54754376, recommendation: 'deny', customerID: 79431785 ,customerIP: 7825365, cardNum: 56856, customerName: 'Ryan'},
  {transactionID: '63473', deviceID: 5475365, orderDate: 56563, recommendation: 'noScore', customerID: 27585,customerIP: 77543, cardNum: 98765, customerName: 'Derrick'},{transactionID: '54787859', deviceID: 95724624, orderDate: 1.0079, recommendation: 'challenge', customerID: 43787835,customerIP: 7848, cardNum: 37547478, customerName: 'michelle'},
];


/**
 * @title Table with selection
 */
@Component({
  selector: 'table-selection-example',
  styleUrls: ['table-selection-example.css'],
  templateUrl: 'table-selection-example.html',
})
export class TableSelectionExample {
  displayedColumns: string[] = ['select', 'transactionID','deviceID','orderDate','customerIP', 'recommendation',  'cardNum', 'customerIP', 'customerName'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
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

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */