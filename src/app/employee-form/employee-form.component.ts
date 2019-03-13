import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import {Employee} from './employee';
import {Department} from './department';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit, OnChanges {
 public empArray = new Array<Employee>();
 public departmentArray = new Array<Department>();
 public abc: Employee[] = [];
 public itCount = 0;
 public accountCount = 0;
 public hrCount = 0;
 public salary = '';
 public department = '';
 public name = '';
 public radioValue = '';
public selectedValue = 'all' ;
public id = '';
@Output() itEvent = new EventEmitter<number>();
@Output() accountEvent = new EventEmitter<number>();
@Output() hrEvent = new EventEmitter<number>();

@Input() departmentValue: string;
  constructor() { }
 ngOnChanges() {
    // changes.prop contains the old and the new value...
    this.radioValue = this.departmentValue;
    this.selectedValue = this.departmentValue;
    this.showData(this.radioValue);
  }
  ngOnInit() {
    this.departmentArray.push(new Department(1, 'IT'));
    this.departmentArray.push(new Department(2, 'Account'));
    this.departmentArray.push(new Department(3, 'HR'));
    console.log(this.departmentArray);
  }
submit(): void {
{{debugger}}
if (this.id || this.id === 0) {

if (this.department !== this.empArray[this.id].department) {
  this.countEmployee(this.empArray[this.id].department, 'delete');
    this.countEmployee(this.department, 'edit');

}
const emp = new Employee(this.name, this.salary, this.department);
this.empArray.splice(this.id, 1, emp);

} else {
const emp = new Employee(this.name, this.salary, this.department);
this.empArray.push(emp);
this.countEmployee(this.department, 'edit');
}
this.name = '';
this.salary = '';
this.department = '';
this.departmentValue = 'all';
this.selectedValue = 'all';
this.id = '';
}

edit(i): void {
this.name = this.empArray[i].name;
this.salary = this.empArray[i].salary;
this.department = this.empArray[i].department;
this.id = i;
}
delete(i): void {
  {{debugger}}
this.countEmployee(this.empArray[i].department, 'delete');

this.empArray.pop(i);
this.id = '';
}
countEmployee(department, action): void {
  {{debugger}}
switch (department) {

  case "IT":
  if (action === 'edit') {
    this.itCount++;
  } else {
    this.itCount--;
  }
    this.itEvent.emit( this.itCount);
    break;
    case "Account":
     if (action === 'edit') {
    this.accountCount++;
  } else {
    this.accountCount--;
  }
      this.accountEvent.emit(this.accountCount);

    break;
    case "HR":
    if (action === 'edit') {
    this.hrCount++;
  } else {
    this.hrCount--;
  }
      this.hrEvent.emit(this.hrCount);

    break;
    default:
    console.log("In default");

}

}

showData(selectedValue: string): void {
  {{debugger}}
if (this.empArray) {

 this.empArray.filter((e: Employee) => e.department === selectedValue);

}
}


}
