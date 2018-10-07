import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class EmployeeService {

  constructor(private _http: HttpClient) { }
  getEmployees(){
   return this._http.get('http://localhost:61377/api/employee');
  }
  DeleteEmployee(id){
    return this._http.get('http://localhost:61377/api/DeleteEmployee/'+id)
    .subscribe((res: any) => {
    }, error => console.log = error);
   }

   AddEmployee(Employee){
    return this._http.get('http://localhost:61377/api/AddEmployee?id='+Employee.ID+'&firstname='+Employee.firstname+'&lastname='+Employee.lastname+'&salary='+Employee.salary+'&age='+Employee.Age+'&designation='+Employee.Designation)
    .subscribe((res: any) => {
    }, error => console.log = error);
   }

   getEmployee(id){
    return this._http.get('http://localhost:61377/api/employee/'+id)
   }

   UpdateEmployee(Employee){
     
    return this._http.get('http://localhost:61377/api/UpdateEmployee?id='+Employee.ID+'&firstname='+Employee.FirstName+'&lastname='+Employee.LastName+'&salary='+Employee.SAL+'&age='+Employee.Age+'&designation='+Employee.DESIGNATION)
    .subscribe((res: any) => {
    }, error => console.log = error);
   }

}
