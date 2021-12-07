import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentsListService } from './students-list.service';
import { FormGroup,FormBuilder,Validators, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students:Student[] =[]
  isEmpty:boolean = false
  studentForm:FormGroup;
    mostra:Student = {
      id:0,
      nome:"null",
      idade:0,
      semestre:"0",
      curso:"",
      email:"",
      cidade:''
    }
  constructor(public student:StudentsListService, private formBuilder:FormBuilder) {
    this.studentForm = this.formBuilder.group({
      nome:['',Validators.required],
      idade:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      curso:['',Validators.required],
      semestre:['',Validators.required],
      cidade:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.student.getstudentsList().subscribe({
      next:studentList =>{
        this.students = studentList
        if (this.students.length == 0) {
          this.isEmpty = true
        }
      }
    })
       
  }

  edit(id:number){
   this.mostra =  this.students.find(name => name.id == id)!; 
   this.studentForm.setValue({
    nome: this.mostra.nome, 
    email: this.mostra.email, 
    curso: this.mostra.curso, 
    semestre: this.mostra.semestre, 
    idade: this.mostra.idade, 
    cidade: this.mostra.cidade, 
  
  });
    
  }

}
