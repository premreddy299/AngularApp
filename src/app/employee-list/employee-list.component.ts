import { Component, OnInit } from '@angular/core';
import {EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeservice :EmployeeService,private router:Router) { }
employee : any;
  ngOnInit() {
    this.employeeservice.getEmployees()
    .subscribe((employeedata)=>this.employee =employeedata)
  }
   Edit(id): void{
     localStorage.setItem('EmpId',id);
 this.router.navigate(['/update-employee']);
   }
  AddEmployee(): void{
    this.router.navigate(['/new-employee']);
  }
  Delete(id): void{
    this.employeeservice.DeleteEmployee(id);
    console.log('successfuly delete');
  }

}
