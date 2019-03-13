import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import {EmployeeFormComponent} from '../employee-form/employee-form.component';

@Component({
  selector: 'app-employee-managment',
  templateUrl: './employee-managment.component.html',
  styleUrls: ['./employee-managment.component.css']
})
export class EmployeeManagmentComponent implements OnInit, AfterViewInit  {
  @ViewChild(EmployeeFormComponent) child;
  itCount = 0;
  hrCount = 0;
  accountCount = 0;
  message = '';
  selectedRadioButtonValue = 'all';
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.message = this.child.itCount;

    console.log("In partent it count "+this.child.itCount)
  }
receiveITCount($event) {
    this.itCount = $event
  }

receiveHRCount($event) {
    this.hrCount = $event
    console.log("Parent==="+this.message)
  }
receiveAccountCount($event) {
    this.accountCount = $event
    console.log("Parent==="+this.message)
  }
 onRadioButtonSelectionChange(): void {
  console.log(this.selectedRadioButtonValue);
  //this.child.showData(this.selectedRadioButtonValue);
 }

}
