import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  id: number;
  introduced: string;
  discontinued: string;
  company: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', introduced: '31-08-1990', discontinued: '04-06-1998', company: 'toshiba'},
  {id: 1, name: 'Hydrogen', introduced: '31-08-1990', discontinued: '04-06-1998', company: 'toshiba'},
  {id: 1, name: 'Hydrogen', introduced: '31-08-1990', discontinued: '04-06-1998', company: 'toshiba'},
];

@Component({
  selector: 'app-computer-table',
  templateUrl: './computer-table.component.html',
  styleUrls: ['./computer-table.component.scss']
})
export class ComputerTableComponent {
  displayedColumns: string[] = ['id', 'name', 'introduced', 'discontinued', 'company'];
  dataSource = ELEMENT_DATA;
 
}
