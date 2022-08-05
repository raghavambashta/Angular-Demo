import { Component, OnInit } from '@angular/core';
// importing Employee class
import { Employee } from '../employee';


@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  weekdays:string[]=['sunday','monday','tuesday',
      'wednesday','thursday','friday','saturday']

  age:number = 30
  emps:Employee[] = [
    {id:101, name:'Tom', salary:15, dept:'HR'},
    {id:102, name:'Tomy', salary:10, dept:'Support'},
    {id:103, name:'Thomas', salary:20, dept:'Marketing'},
    {id:104, name:'Tiny', salary:30, dept:'IT'},
    {id:105, name:'Tina', salary:25, dept:'IT'}
  ]

  getTotal() : number {
    var total:number = 0
    for (var i = 0; i < this.emps.length; i++){
      total = total + this.emps[i].salary
    }
    return total
  }
  constructor() { }

  ngOnInit(): void {
  }

}
