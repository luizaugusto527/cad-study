import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
 
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  students:Student[] = [{
    nome:"Luiz",
    idade:27,
    curso:"Análise e desenvolvimento de sistemas",
    semestre:"3°",
    cidade:"Sorocaba"

  },
  {
    nome:"Maria",
    idade:18,
    curso:"Psicologia",
    semestre:"5°",
    cidade:"Itu"

  },
  {
    nome:"Rodrigo",
    idade:23,
    curso:"Engenharia Elétrica",
    semestre:"4°",
    cidade:"Sorocaba"

  }

]
  constructor() { }

  ngOnInit(): void {
  }

}
