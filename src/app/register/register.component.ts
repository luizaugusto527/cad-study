import { Component, OnInit } from '@angular/core';
import { Student } from '../students/student';
import { StudentsListService } from '../students/students-list.service';



@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(public student: StudentsListService) { }

  ngOnInit(): void {

  }
  register(): boolean {
    let teste1 = { nome: "teste", idade: 200, curso: "ADS", cidade: "Sorocaba", email: "teste@teste", semestre: '1' }
    this.student.setstudentList(teste1)
    return false
  }

}
