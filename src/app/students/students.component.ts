import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentsListService } from './students-list.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[] = []
  isEmpty: boolean = true
  isDelete:boolean = false;
  isUpdate:boolean = false;
  studentForm: FormGroup;


  mostra: Student = {
    id: 0,
    nome: "null",
    idade: 0,
    semestre: "0",
    curso: "",
    email: "",
    cidade: ''
  }
  constructor(public student: StudentsListService, private formBuilder: FormBuilder) {
    this.studentForm = this.formBuilder.group({
      id: [''],
      nome: ['', Validators.required],
      idade: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      curso: ['', Validators.required],
      semestre: ['', Validators.required],
      cidade: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.student.getstudentsList().subscribe({
      next: studentList => {
        this.students = studentList
        if (this.students.length == 0) {
          this.isEmpty = false
        }
      }
    })

  }

  edit(id: number) {
    this.mostra = this.students.find(name => name.id == id)!;
    this.studentForm.setValue({
      id: this.mostra.id,
      nome: this.mostra.nome,
      email: this.mostra.email,
      curso: this.mostra.curso,
      semestre: this.mostra.semestre,
      idade: this.mostra.idade,
      cidade: this.mostra.cidade,

    });

  }

  updateStudent() {
    const editedStudent = this.studentForm.value
    this.student.updateStudentList(editedStudent).subscribe(() => {
      this.isUpdate = true;
      setTimeout(() => {
        this.isUpdate = false
        this.ngOnInit();
        
      }, 1100);

    }

    )

  }

  showDeleteStudent(id: number) {
    this.mostra = this.students.find(name => name.id == id)!;
 
  }

  deleteStudent(id:number){
    this.student.deleteStudent(id).subscribe(() => {
      
      this.isDelete = true;
      setTimeout(() => {
        this.isDelete = false
        this.ngOnInit();
        
      }, 1200);
     

    }

    )
  }

}

