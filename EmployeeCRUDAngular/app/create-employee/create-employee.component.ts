import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

employee: Employee = new Employee();
  submitted = false;
  constructor(private es: EmployeeService,
    private router: Router) { }

  ngOnInit() {
  }
  
  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

save() {
    this.es.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
  }
onSubmit() {
    this.submitted = true;
    this.save();    
  }
gotoList() {
    this.router.navigate(['/employees']);
  }
}
