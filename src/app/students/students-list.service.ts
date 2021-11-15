import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})

export class StudentsListService {
  getstudentsList():Student[]{
    return this.students
  }
  setstudentList(obj:any){
    this.students.push(obj)
  }
  constructor() { }

  students:Student[] = [{
    nome:"Luiz",
    idade:27,
    curso:"Análise e desenvolvimento de sistemas",
    semestre:"3°",
    cidade:"Sorocaba",
    email:"luiz@gmail.com"

  },
  {
    nome:"Maria",
    idade:18,
    curso:"Psicologia",
    semestre:"5°",
    cidade:"Itu",
    email:"maria.vidaloca@gmail.com"

  },
  {
    nome:"Rodrigo",
    idade:23,
    curso:"Engenharia Elétrica",
    semestre:"4°",
    cidade:"Sorocaba",
    email:"rodrigo.faro@gmail.com"

  }
]

}
