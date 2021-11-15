import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentsListService } from './students-list.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  constructor(public student:StudentsListService) { }
  students:Student[] = []
  
  
  
  ngOnInit(): void {
    this.students= this.student.getstudentsList()
       
  }

}
