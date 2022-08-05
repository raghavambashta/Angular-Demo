import { Component, OnInit } from '@angular/core';
//importing movie interface
import { Movie } from '../movie';
@Component({
  selector: 'app-movieadd',
  templateUrl: './movieadd.component.html',
  styleUrls: ['./movieadd.component.css']
})
export class MovieaddComponent implements OnInit {

  moviedata: Movie = {id: 0, name: '', year:0, rating: 0}

  constructor() { }
  SaveData (data:Movie){//we will call this method from html
    alert('added')
    this.moviedata = data
    console.log(this.moviedata)
  }

  ngOnInit(): void {
  }

}
