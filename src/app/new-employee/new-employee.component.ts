import { Component, OnInit } from '@angular/core';
import {EmployeeService } from '../employee.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
 Employee:any = {};
  constructor(private employeeservice :EmployeeService) { }

  ngOnInit() {

  }
  AddEmployee(Employee):void{
console.log(this.Employee);
this.employeeservice.AddEmployee(this.Employee);
console.log('successfuly inserted');
  }

}
