import { Component, OnInit } from '@angular/core';
import { Student } from '../students/student';
import { StudentsListService } from '../students/students-list.service';
import { FormGroup,FormBuilder,Validators, EmailValidator } from '@angular/forms';



@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  studentForm:FormGroup
  isAlert = false;

  constructor(public student: StudentsListService,private formBuilder:FormBuilder) {
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

  }
  register(): boolean {
    const registerStudent = this.studentForm.value
    this.student.setstudentList(registerStudent)
    this.confirmed();
    return false
  }
  confirmed(){
    this.isAlert = true
    setTimeout(() => {
       this.isAlert = false
       this.studentForm.reset()
     }, 1300);
  }
  
}
