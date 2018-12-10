import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  citiesList: Array<any> = [
    {'id':1,"nameOfCountry":"PL","nameOfCity":"Warsaw","temp":"","pop":"","long":"","lat":""},
    {'id':2,"nameOfCountry":"JP","nameOfCity":"Tokyo","temp":"","pop":"","long":"","lat":""},
    {'id':3,"nameOfCountry":"CA","nameOfCity":"Ottawa","temp":"","pop":"","long":"","lat":""},
    {'id':4,"nameOfCountry":"SK","nameOfCity":"Kosice","temp":"","pop":"","long":"","lat":""},
    {'id':5,"nameOfCountry":"USA","nameOfCity":"New York","temp":"","pop":"","long":"","lat":""}
  ]


  constructor() { }

  ngOnInit() {
  }

}
