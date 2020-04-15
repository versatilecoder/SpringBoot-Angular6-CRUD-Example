import { Component, OnInit } from '@angular/core';
import { Employee } from "../model/employee";
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { EmployeeService } from "../services/employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
	
	 employees: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService,
    private router: Router) {}

  ngOnInit() {
	  this.reloadData();
  }
  
  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }
  
   deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  
   updateEmployee(id: number) {
    this.router.navigate(['update-emp', id]);
  }

  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }

}
