import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieserviceService } from '../movieservice.service';
@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {
  name:string = 'Rgv'
  age:number = 23
  fno:number = 10
  sno:number = 5
  total:number = 0
  city : string ="lucknow"
  mstatus : boolean = false

  add():number{
    this.total = this.fno + this.sno
    return this.total
  }
  Show():void{
    alert('Name is ' + this.name + ' and age is' 
      + this.age)
  }
  //inside the constructor, we have implemented the movieservice service
  constructor(private movieservice: MovieserviceService) { }
  myname = this.movieservice.Display('Jerry')
  ngOnInit(): void {
  }

}
