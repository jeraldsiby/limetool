import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeId:string;

  constructor(private route:ActivatedRoute) //constructor injection
   { }

  ngOnInit() {
    this.employeeId = this.route.snapshot.params['id']; //this id matches the one in app.routing.ts
  }

}
