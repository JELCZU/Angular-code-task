import { Component } from '@angular/core';
export interface workOrder {
  woID: number;
  description: string;
  receivedDate: string;
  assignedTo: string;
  status: string;
  priority: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dummy: workOrder = {
    woID: 1,
    description: '',
    receivedDate: '',
    assignedTo: '',
    status: '',
    priority: '',
  };
  filter: string = '';
  tableDataWorkOrders: workOrder[] = [];
  WorkOrders: workOrder[] = [];
  constructor() {}
  ngOnInit(): void {
    this.getData();
    this.workOrdersSearch('');
  }
  filterChange(value: string) {
    this.filter = value;
  }
  async getData() {
    const res = await fetch('http://localhost:5000/promise');
    const data = await res.json();
    this.WorkOrders = [];
    data.response.data.forEach((wo: any, index: number) => {
      this.WorkOrders.push({ ...this.dummy });
      this.WorkOrders[index].woID = wo.work_order_id;
      this.WorkOrders[index].description = wo.description;
      this.WorkOrders[index].receivedDate = wo.received_date;
      if (wo.assigned_to.length === 0) {
        this.WorkOrders[index].assignedTo = '-';
      } else {
        this.WorkOrders[index].assignedTo = '';
        wo.assigned_to.forEach((person: any, indexPerson: number) => {
          this.WorkOrders[index].assignedTo += person.person_name;
          if (indexPerson < wo.assigned_to.length - 1) {
            this.WorkOrders[index].assignedTo += ', ';
          }
        });
      }
      this.WorkOrders[index].status = wo.status;
      this.WorkOrders[index].priority = wo.priority;
    });
    console.log(this.WorkOrders);
  }
  workOrdersSearch(text: string) {
    this.tableDataWorkOrders = this.WorkOrders.filter((element) =>
      element.description.includes(text)
    );
  }
}
