import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { employeesRouting } from "app/erp/employees/employees.routing";
import { EmployeesListComponent } from "app/erp/employees/employees-list/employees-list.component";
import { EmployeeDetailsComponent } from "app/erp/employees/employee-details/employee-details.component";
import { EmployeeCreateComponent } from "app/erp/employees/employee-create/employee-create.component";
import { EmployeeSectionComponent } from "app/erp/employees/employee-section/employee-section.component";

@NgModule({
  imports: [
    CommonModule,
    employeesRouting
  ],
  declarations: [
    EmployeesListComponent,
    EmployeeDetailsComponent,
    EmployeeCreateComponent,
    EmployeeSectionComponent
  ]
})
export class EmployeesModule { }
