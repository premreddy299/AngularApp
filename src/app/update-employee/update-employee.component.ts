import { Component, OnInit } from '@angular/core';
import {EmployeeService } from '../employee.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";  

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employeetemp :any;
  constructor(private employeeservice :EmployeeService) { }

  ngOnInit() {
    let empId=localStorage.getItem('EmpId');
    this.employeeservice.getEmployee(empId).subscribe((data)=>{
      console.log(JSON.stringify(data))
      this.employeetemp=data;
     
    })
  }
  UpdateEmployee() :void{
    console.log(this.employeetemp);
    this.employeeservice.UpdateEmployee(this.employeetemp);
    console.log('successfuly updated');
  }

}
