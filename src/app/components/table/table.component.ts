import { Component, OnInit, Input } from '@angular/core';
import { workOrder } from 'src/app/app.component';

// export const workOrders: workOrder[] = [];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() tableDataWorkOrders: workOrder[] = [];
  constructor() {}
  ngOnInit(): void {}
}
